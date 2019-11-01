import React, { Component } from 'react'
import axios from 'axios'

class ChapterShow extends Component {
  constructor(props) {
    super(props)
    this.state = { chapter: null }
  }


  // sets chapter data to state. This needs to request a specific chapter id.
  getData() {
    axios.get(`/api/chapters/${this.props.match.params.id}`)
      .then((res) => this.setState({ chapter: res.data }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
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
          <h2>Chapter number is { chapter.chapter }</h2>
          <p> { chapter.text } </p>
        </div>
      </main>
    )
  }

}

export default ChapterShow
