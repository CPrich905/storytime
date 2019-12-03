import React from 'react'
import axios from 'axios'

// chapter/choice display card
import ChapterCard from './Chapters/ChapterCard'

// copy cheeses index format - create functional component

class Home extends React.Component {
  constructor() {
    super()

    this.state = { chapters: null, activeChapter: null }

    this.checkChapter = this.checkChapter.bind(this)
  }


  // get request to api/chapters. The response is sorted by the 'chapter' field in ascending order, then sets state.
  componentDidMount() {
    axios.get('/api/chapters')
      .then(res => {
        res.data.sort((a, b) => a.chapter - b.chapter)
        this.setState({ chapters: res.data })
        this.checkChapter()
      })
      .catch(err => console.log(err))
  }

  // function to check the active chapter. On the home page this is chapter 1. On subsequent chapters this is the array of choices. A function will be needed to map through the choices array on chapter.x, matching choice number to chapter number and printing chapter.choice text to the cards for the reader to choose from.
  checkChapter() {
    console.log( 'checkChapter fires')
    const activeChapter = this.state.chapters[0]
    this.setState({ activeChapter: activeChapter })
  }


  // the below currently maps through all chapters.
  // Home page will need only chapter 1. For all subsequent chapters, the choices will need to be mapped through, probably using chapters.choices.map(chapter)
  render() {
    if(!this.state.chapters || !this.state.activeChapter) return null
    const { activeChapter } = this.state
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
          <ChapterCard
            key={activeChapter.chapter}
            {...activeChapter}
          />
        </div>
      </section>
    )
  }
}

export default Home
