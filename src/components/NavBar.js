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

    this.state = {}
    this.toggleNavbar = this.toggleNavbar.bind(this)
  }

  toggleNavbar() {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }

  render() {
    return(
      <nav className="navbar col-100">
        <div className="container">
          <div className="navbar-brand col-75">
            <p className="title">Joshua&apos;s Tale</p>
            <p className="sub-title">A choose your own adventure story, built in React</p>
          </div>
          <div className="navbar-menu col-25">
            <a role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false">
              <span
                aria-hidden="true"
                className="navbar-link">
                <a
                  href="https://github.com/CPrich905/storytime"
                >Github</a>
              </span>
              <span aria-hidden="true"
                className="navbar-link">
                <a href="/">Back to start</a>
              </span>
              <span
                aria-hidden="true"
                className="navbar-link">
                <a>Previous Chapter</a>
              </span>

              <button className="hamburger hamburger--collapse" type="button">
                <span className="hamburger-box">
                  <span className="hamburger-inner">Github</span>
                  <span className="hamburger-inner">Start</span>
                  <span className="hamburger-inner">Previous</span>
                </span>
              </button>

            </a>
          </div>
        </div>Name
      </nav>
    )
  }
}

export default NavBar
