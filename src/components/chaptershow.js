import React, { Component } from 'react'
import axios from 'axios'

class ChapterShow extends Component {
  constructor(props) {
    super(props)
    this.state = { chapter: null, choices: [] }
  }


  // sets chapter data to state. This needs to request a specific chapter id.
  getData() {
    console.log('getData in ChaperShow fires')
    axios.get(`/api/chapters/${this.props.match.params.id}`)
      .then((res) => console.log(res.data))
      // .then((res) => this.setState({ chapter: res.data }))
      .catch(err => console.log(err))
  }

  checkChoices() {
    //function to check the choices on the current chapter, pushing them to an array of choices in state
    console.log('check choices fires in ChapterShow')
  }

  componentDidMount() {
    // console.log('componentDidMount in ChapterShow fires')
    this.getData()
  }

  // display chapter title, main text and options as buttons when you reach the end of the chapter

  render() {
    if(!this.state.data) return null
    console.log('chaptershow.js render() fires')
    const { chapter } = this.state
    return (
      <main>
        <div>
          <h1>Chapters</h1>
          <h2>Chapter number is </h2>
          <p>Chapter text goes here { chapter.text }</p>
        </div>
      </main>
    )
  }

}

export default ChapterShow
