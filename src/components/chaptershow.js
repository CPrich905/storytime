import React, { Component } from 'react'
import axios from 'axios'

class ChapterShow extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }


  // sets chapter data to state. This needs to request a specific chapter id.
  getData() {
    axios.get('/api/chapters')
      .then((res) => this.setState({ data: res.data }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData()
  }

  // display chapter title, main text and options as buttons when you reach the end of the chapter

  render() {
    if(!this.state.data) return null
    console.log(this.state.data)
    return (
      <main>
        <div>
          <h1>Chapters</h1>

        </div>
      </main>
    )
  }

}

export default ChapterShow
