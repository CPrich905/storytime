import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// Component Welcome page, explains the idea of the story & an intro to the project.
import Home from './components/home'
// ChapterShow: This needs  to show title (?and summary of previous chapter?), content, and choices.
import ChapterShow from './components/chaptershow'
// Component: footer

// Future development to include a choice of characters (vue version? Score panel as well.)

// add a footer with links to github & writing website when set up

class App extends React.Component {
  render() {
    console.log('App.js renders')
    return (

      <BrowserRouter>
        <main>
          <Switch>
            <Route path="/:id" component={ ChapterShow }/>
            <Route exact path="/" component={ Home }/>
          </Switch>
        </main>

      </BrowserRouter>

    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
