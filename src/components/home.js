import React from 'react'
import axios from 'axios'

// chapter/choice display card
import ChapterCard from './ChapterCard'

// copy cheeses index format - create functional component

class Home extends React.Component {
  constructor() {
    super()

    this.state = { chapters: null }
  }

  componentDidMount() {
    axios.get('/api/chapters')
      .then(res => this.setState({ chapters: res.data }))
      .catch(err => console.log(err))
  }


  // the below currently maps through all chapters.
  // Home page will need only chapter 1. For all subsequent chapters, the choices will need to be mapped through, probably using chapters.choices.map(chapter)
  render() {
    if(!this.state.chapters) return null
    return (
      <section>
        <div>
          {this.state.chapters.map(chapter => (
            <ChapterCard
              key={chapter._id}
              {...chapter}
            />
          ))}
        </div>
      </section>
    )
  }
}

// const Home = () => (
//   <section>
//     <div>
//       <h1>Home page</h1>
//
//       <h2>Start the story</h2>
//     </div>
//   </section>
// )

export default Home
