import React from 'react'
// import { slide as Menu } from 'react-burger-menu'
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
  navbarClicked(e) {
    e.preventDefault()
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

        <section className="navbar-brand">
          <p className="navbar-title">Joshua&apos;s Tale</p>
          <p className="navbar-sub-title">A choose your own adventure story, built in React</p>
        </section>

        <section className="menu">
          <ul className="navbar-item-wrapper">
            <li className="navbar-item">
              <a href="https://www.linkedin.com/in/charles-prichard/" 
              target="_blank"><i className="fab fa-linkedin navbar-icon"></i></a>
            </li>
            <li className="navbar-item">
              <a
                href=""
                className="navbar-link">Start</a>
            </li>
            <li className="navbar-item">
              <a
                href=""
                className="navbar-link">Previous</a>
            </li>
            <li className="navbar-item">
              <a
                href="https://github.com/CPrich905/"
                target="_blank"
                className="navbar-link"><i className="fab fa-github-square navbar-icon"></i></a>
            </li>
          </ul>
        </section>
      </nav>
    )
  }
}

export default NavBar

// {/* <Menu isOpen={ false }>
//               <a id="home" className="menu-item">Home</a>
//               <a id="about" className="menu-item">GitHub</a>
//               <a id="contact" className="menu-item">LinkedIn</a>
//               <a onClick={ this.navbarClicked } className="menu-item--small" href="">Settings</a>
//             </Menu>
//              */}
