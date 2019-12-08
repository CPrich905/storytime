import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Homepage extends React.Component {
  constructor() {
    super()

    this.state = { chapter: null }
    // this.checkChapter = this.checkChapter.bind(this)
  }


  // get request to api/chapters/search/1 looks for a chapter with the chapter #1 & sets state. This function initially requested all chapters, sorted & saved to state but then never used the additional data.
  componentDidMount() {
    console.log('homepage did mount')
    axios.get('/api/chapters/search/1')
      .then(res => {
        this.setState({ chapter: res.data })
        // this.checkChapter()
      })
      .catch(err => console.log(err))
  }

  // Home page will need only chapter 1. For all subsequent chapters, the choices will need to be mapped through, probably using chapters.choices.map(chapter)
  render() {
    if(!this.state.chapter ) return null
    const { chapter } = this.state
    return (
      <section className="home-section">
        <div className="home-about">
          <p className="about-text">This story follows Joshua, a magician afflicted by some serious bad luck and possibly a curse or three. Guide his journey as he tries to find answers.
            <br />
            <br />
          Click on the card below to start your adventure. At the bottom of each chapter, further options will become available - each choice opens some doors and closes others, shaping your journey. Choose wisely!
          </p>
        </div>

        <div className="chapter-card">
          <Link
            className="chapter-options"
            to={`/${chapter._id}`}
            id={chapter._id}
            key={chapter.chapter}
          >{chapter.choice}</Link>
        </div>
      </section>
    )
  }
}

export default Homepage
