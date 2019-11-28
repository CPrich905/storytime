import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './stylesheets/style.scss'
// import './style.css'

// Component Welcome page, explains the idea of the story & an intro to the project.
import Home from './components/Home'
// ChapterShow: This needs  to show title (?and summary of previous chapter?), content, and choices.
import ChapterShow from './components/Chapters/chaptershow'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
// import NextChapter from './components/NextChapter'
// Component: footer w. links to github

// Future development to include a choice of characters (vue version? Score panel as well.)

// add a footer with links to github & writing website when set up

const App = () => {
  return (
    <BrowserRouter>
      <main className="app-main">
        <NavBar />
        <Switch>
          <Route path="/:id" component={ ChapterShow }/>
          <Route path="/search/:query" component={ ChapterShow }/>
          <Route exact path="/" component={ Home }/>
        </Switch>
        <Footer />
      </main>


    </BrowserRouter>
  )
}

// class App extends React.Component {
//   render() {
//     console.log('App.js renders')
//     return (
//
//       <BrowserRouter>
//         <main>
//           <Navbar />
//           <Switch>
//             <Route path="/:id" component={ ChapterShow }/>
//             <Route path="/search/:query" component={ ChapterShow }/>
//             <Route exact path="/" component={ Home }/>
//           </Switch>
//
//         </main>
//       </BrowserRouter>
//
//     )
//   }
// }

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
