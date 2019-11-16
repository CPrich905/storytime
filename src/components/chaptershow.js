import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

// import ChapterCard from './ChapterCard'

class ChapterShow extends Component {
  constructor() {
    super()
    this.state = {
      chapter: null,
      chapterOptions: [],
      optionsText: null,
      selected: null }

    // this.checkOptions = this.checkOptions.bind(this)
    this.selectClick = this.selectClick.bind(this)
    this.set = this.set.bind(this)
    this.clicked = this.clicked.bind(this)
    // this.click = this.click.bind(this)
  }


  // sets chapter data to state. Request returns full chapter data.
  getData() {
    // console.log('getData in ChaperShow fires')
    axios.get(`/api/chapters/${this.props.match.params.id}`)
      // .then(res => console.log(res.data))
      .then(res => this.setState({ chapter: res.data }))
      .catch(err => console.log(err))
  }

  // checkOptions() {
  //   //function to check the options on the current chapter, pushing option number to an array of options in state. Choice text should be rendered with the choice number.
  //   const { chapter } = this.state
  //
  //   chapter.options.forEach(function(i){
  //     // console.log(i)
  //     axios.get(`/api/chapters/search/${i}`)
  //       .then(res => this.setState({ optionsText: res.data.choice }))
  //       // .then(res => console.log(res.data.choice))
  //       // .then(console.log(this.optionsText))
  //       .catch(err => console.log(err))
  //   })
  //   console.log(this.state.optionsText)
  // }

  set(){
    console.log('set selected is', this.state.selected)
    // specifying the number works, ie: axios.get('/api/chapterssearch/2')
    // this
    axios.get(`/api/chapters/search/${this.state.selected}`)
      // .then(res => console.log('res.data from set() is', res.data ))
      .then(res => this.setState({ chapter: res.data}))
      .catch(err => console.log(err))
  }

  clicked() {

  }

  selectClick(e) {
    console.log('selectClick fires on', e.target)
    const data =  parseInt(e.target.id)
    this.setState({ selected: data })
  }

  componentDidMount() {
    this.getData()
  }

  // display: Decision that lead to this chapter, title, main text. Options as buttons to display when you reach the end of the chapter.

  render() {
    if(!this.state.chapter) return null
    // this.checkOptions()
    const { chapter } = this.state
    // console.log('chapter', chapter)
    // console.log('optionsText is', optionsText)
    return (
      <main>
        <div className="chapter">
          <h1>Chapter title </h1>
          <h2>Chapter {chapter.chapter}</h2>
          <p>You decided to {chapter.choice}...</p>
          <p> {chapter.text} </p>

          <div className="options">
            {chapter.options.map((option, i) =>
              <Link
                to={`/search/${option.id}`}
                key={i}
                id={option.id}
                onClick={this.clicked}
                onMouseDown={this.selectClick}
                onMouseUp={this.set}
              > {option.option} </Link>
            )}
          </div>
        </div>
      </main>
    )
  }

}

export default ChapterShow


// <div>
//   {optionsText.map((option, i) =>
//     <p key={i}>{option}</p>)}
//
// </div>



// <div>
//   {chapter.options.map((option) =>
//     <ChapterCard
//       key={option}
//       el={option}
//     />
//   )}
// </div>
