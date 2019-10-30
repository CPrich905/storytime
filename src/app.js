import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'

import Chapters from './components/chapters'

class App extends React.Component {
  render() {
    console.log('App.js renders')
    return (
      <div>
        <BrowserRouter>
          <Route exact path="/" component={ Chapters }/>
        </BrowserRouter>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
