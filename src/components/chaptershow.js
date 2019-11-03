import React, { Component } from 'react'
import axios from 'axios'

class ChapterShow extends Component {
  constructor() {
    super()
    this.state = { chapter: null }

    this.getData = this.getData.bind(this)
  }


  // sets chapter data to state. Request returns full chapter data.
  getData() {
    console.log('getData in ChaperShow fires')
    axios.get(`/api/chapters/${this.props.match.params.id}`)
      .then(res => this.setState({ chapter: res.data }))
      .catch(err => console.log(err))
  }

  // checkChoices() {
  //   //function to check the choices on the current chapter, pushing them to an array of choices in state
  //   console.log('check choices fires in ChapterShow')
  // }

  componentDidMount() {
    console.log('componentDidMount in ChapterShow fires')
    this.getData()
    // axios.get(`/api/chapters/${this.props.match.params.id}`)
    //   .then((res) => console.log(res.data))
    //   .then((res) => this.setState({ chapter: res.data }))
    //   .catch(err => console.log(err))
  }

  // display: Decision that lead to this chapter, title, main text. Options as buttons to display when you reach the end of the chapter.

  render() {
    // console.log('this.state is', this.state)
    if(!this.state.chapter) return null
    console.log('chaptershow.js render() fires')
    const { chapter } = this.state
    return (
      <main>
        <div>
          <h1>Chapter title </h1>
          <h2>Chapter number {chapter.chapter}</h2>
          <p>Decision taken that leads to chapter goes here {chapter.choice}</p>
          <p>Chapter text goes here {chapter.text} </p>

        </div>
      </main>
    )
  }

}

export default ChapterShow
