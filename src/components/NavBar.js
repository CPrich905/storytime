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
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">

            <h1>(NavBar)Joshua&apos;s Tale</h1>
            <p>A choose your own adventure story, built in React</p>
          </div>
        </div>
      </nav>
    )
  }
}

export default NavBar
