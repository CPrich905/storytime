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

    this.selectClick = this.selectClick.bind(this)
    this.set = this.set.bind(this)
  }


  // getData() sets chapter data to state. Request returns full chapter data, including choices which are mapped in return().
  getData() {
    // console.log('getData in ChaperShow fires')
    axios.get(`/api/chapters/${this.props.match.params.id}`)
      // .then(res => console.log(res.data))
      .then(res => this.setState({ chapter: res.data }))
      .catch(err => console.log(err))
  }

  // selectClick() takes target id from <a> tag, mapped from options on chapter schema, parses string to integer. Sets the id of selected in state.
  selectClick(e) {
    const data =  parseInt(e.target.id)
    this.setState({ selected: data })
  }

  // set() uses selected set above & makes axios request for chapter by chapter number.
  set(){
    axios.get(`/api/chapters/search/${this.state.selected}`)
      // .then(res => console.log('res.data from set() is', res.data ))
      .then(res => this.setState({ chapter: res.data}))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData()
  }

  // to display: summary that lead to this chapter (from chapter one onwards?), title, main text. Options as buttons to display when you reach the end of the chapter.

  render() {
    if(!this.state.chapter) return null
    const { chapter } = this.state
    return (
      <main>
        <div className="chapter">
          <div className="chapter-header">
            <h2>Chapter {chapter.chapter}</h2>
            <p>The road so far: {chapter.choice}...</p>
          </div>
          <div className="chapter-text">
            <p> {chapter.text} </p>
          </div>

          <div className="chapter-options">
            {chapter.options.map((option, i) =>
              <Link
                className="chapter-option"
                to={`/search/${option.id}`}
                key={i}
                id={option.id}
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
