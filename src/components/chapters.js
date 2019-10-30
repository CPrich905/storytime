import React, { Component } from 'react'
import axios from 'axios'

class Chapters extends Component {
  constructor(props) {
    super(props)
    this.state = { data: null }
  }

  getData() {
    axios.get('/api/chapters')
      .then((res) => this.setState({ data: res.data }))
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.getData()
  }

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

export default Chapters
