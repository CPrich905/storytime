import React from 'react'
// import { Link } from 'react-router-dom'

// NavBar needs to have the following:
// perma-header 'Joshua's Tale'
// desktop sub-header 'A choose-your-own-adventure story built in React'
// buttons for 'Github' and 'Back to Start'
// button/onclick hide/show NavBar
class NavBar extends React.Component {
  constructor() {
    super()

    this.state = {  }

    this.navbarClicked = this.navbarClicked.bind(this)
  }

  //write function to hide/show burger menu on clicked.
  navbarClicked() {
    console.log('navbar clicked')
    const burger = document.getElementById('navbar-links')
    const burgericon = document.getElementById('navbar-icon')
    const menu = document.getElementById('navbar-menu')
    if (burger.style.display === 'block') {
      burger.style.display = 'none'
      burgericon.style.display = 'block'
      menu.stle.display = 'block'
    } else {
      burger.style.display = 'block'
      burgericon.style.display = 'none'
      menu.style.display = 'none'
    }
  }

  render() {
    return(
      <nav className="navbar">
        <div className="container col-100">
          <div className="navbar-brand col-75">
            <p className="title">Joshua&apos;s Tale</p>
            <p className="sub-title">A choose your own adventure story, built in React</p>
          </div>

          <div className="navbar-menu col-25">
            <span
              className="navbar-icon"
              id="navbar-name">Menu
            </span>
            <span
              className="icon"
              id="navbar-icon"
              type="button"
              onClick={this.navbarClicked}><i className="fas fa-book fa-7x"></i>
            </span>

            <span
              id="navbar-links"
              className="hamburger-box">
              <a
                href="#previous chapter"
                className="hamburger-inner close-book"
                id="close-burger"
                onClick={this.navbarClicked}>x</a>
              <a
                href="#Github"
                className="hamburger-inner">Github</a>
              <a
                href="#Back to start"
                className="hamburger-inner">Start</a>
              <a
                href="#previous chapter"
                className="hamburger-inner">Previous</a>
            </span>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
