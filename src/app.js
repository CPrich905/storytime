import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './stylesheets/style.scss'
// import './style.css'

// Component Welcome page, explains the idea of the story & an intro to the project.
import Homepage from './components/Homepage'
// ChapterShow: This needs  to show title (?and summary of previous chapter?), content, and choices.
import ShowChapter from './components/Chapters/ShowChapter'
import NavBar from './components/Navbar/NavBar'
import Footer from './components/Footer/Footer'
// import NextChapter from './components/NextChapter'

// Future development to include a choice of characters (vue version? Score panel as well.)

// add link writing website when set up to footer

const App = () => {
  return (
    <BrowserRouter>
      <main className="app-main">
        <NavBar />
        <Switch>
          <Route exact path="/" component={ Homepage }/>
          <Route path="/:id" component={ ShowChapter }/>
          <Route path="/search/:query" component={ ShowChapter }/>
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
