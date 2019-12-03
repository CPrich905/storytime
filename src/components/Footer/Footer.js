import React from 'react'

class Footer extends React.Component {
  constructor() {
    super()

    this.hideFooter = this.hideFooter.bind(this)
  }

  hideFooter() {
    const footerNotes = document.getElementById('footer-text')
    if (footerNotes.style.display === "none") {
      footerNotes.style.display = 'block'
    } else {
      footerNotes.style.display = 'none'
    }
  }

  render() {
    return(
      <div className="footer">
        <h4 className="footer-banner"><a
                href="https://github.com/CPrich905/"
                target="_blank"
                className="navbar-link"><i className="fab fa-github-square footer-icon"></i></a>Page & Story by Me <a href="https://www.linkedin.com/in/charles-prichard/" target="_blank"><i className="fab fa-linkedin footer-icon"></i></a></h4>
        <section 
          className="footer-note" 
          id="footer-text-box" onClick={this.hideFooter}>
          <p id="authors-note">Click to hide/show authors note </p>
          <p id="footer-text">This is quite a big project to write and develop so some of the chapters are yet to be fully written. There are bullet point notes for the incomplete chapters which will hopefully give you an idea of the story arc I have in mind - if you have any questions or suggestions, please get in touch through LinkedIn.</p>
        </section>
      </div>
    )
  }
}

export default Footer
