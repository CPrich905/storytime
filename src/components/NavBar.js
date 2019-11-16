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
          <div className="navbar-brand">
            <h1 className="title">Joshua&apos;s Tale</h1>
            <p>A choose your own adventure story, built in React</p>
          </div>
          <div className="navbar-menu">
            <a role="button"
              className="navbar-burger"
              aria-label="menu"
              aria-expanded="false">
              <span aria-hidden="true"><a
                href="https://github.com/CPrich905/storytime"
              >See the code on Github</a></span>
              <span aria-hidden="true"><a href="/">Back to start</a></span>
              <span aria-hidden="true">Previous Chapter</span>
            </a>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
