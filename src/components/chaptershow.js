import React, { Component } from 'react'
import axios from 'axios'

import ChapterCard from './ChapterCard'

class ChapterShow extends Component {
  constructor() {
    super()
    this.state = { chapter: null, selected: null }

    // this.getData = this.getData.bind(this)
    this.checkOptions = this.checkOptions.bind(this)
    this.selectClick = this.selectClick.bind(this)
    this.click = this.click.bind(this)
  }


  // sets chapter data to state. Request returns full chapter data.
  getData() {
    // console.log('getData in ChaperShow fires')
    axios.get(`/api/chapters/${this.props.match.params.id}`)
      .then(res => this.setState({ chapter: res.data }))
      .catch(err => console.log(err))
  }

  checkOptions() {
    //function to check the options on the current chapter, pushing them to an array of options in state
    // console.log('check options fires in ChapterShow')
    const { chapter } = this.state
    // console.log('there are ', chapter.options.length, 'options')
    let i
    for (i = 0; i < chapter.options.length; i++) {
      console.log('find chapter', chapter.options[i])
    }




    //for loop to run through chapters matching chapter to option.
    // let i
    // for (i = 0; i < chapters.options.length)

    // match or if(). checks for a match between current chapter options and chapter number.
  }

  set(){
    axios.get(`/api/chapterssearch/${this.state.selected}`)
      .then(res => this.setState({ selected: res.data }))
      .catch(err => console.log(err))
  }



  selectClick(e) {
    const data =  e.target.innerText
    console.log('data', data)
    this.setState({ selected: data })
  }

  click(){
    this.set()


  }



  componentDidMount() {
    this.getData()
  }

  // display: Decision that lead to this chapter, title, main text. Options as buttons to display when you reach the end of the chapter.

  render() {
    // console.log('this.state is', this.state)
    if(!this.state.chapter) return null
    const { chapter } = this.state
    console.log(chapter)
    // console.log('chapter options are', chapter.options)
    console.log('options are', chapter.options.map(a => (a)))

    this.checkOptions()

    return (
      <main>
        <div>
          <h1>Chapter title </h1>
          <h2>Chapter {chapter.chapter}</h2>
          <p>You decided to {chapter.choice}...</p>
          <p> {chapter.text} </p>
          <div>
            {chapter.options.map((option,i) =>
              <h1 key={i} onClick={this.selectClick} onDoubleClick={this.click}> {option} </h1>
            )}
          </div>
        </div>
      </main>
    )
  }

}

export default ChapterShow

// <ChapterCard
//   key={option}
//   el={option}
// />
