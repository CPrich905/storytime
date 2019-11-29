import React from 'react'

class Footer extends React.Component {
  constructor() {
    super()

    this.hideFooter = this.hideFooter.bind(this)
  }

  hideFooter() {
    const footerNote = document.getElementById('footer-note')

    if (footerNote.style.display === 'none') {
      footerNote.style.display = 'block'
    } else {
      footerNote.style.display = 'none'
    }
  }

  render() {
    return(
      <div className="footer" onClick={this.hideFooter}>
        <h4 className="footer-banner">Page & Story by Me. <a href="https://www.linkedin.com/in/charles-prichard/">LinkedIn</a></h4>
        <div className="footer-note" id="footer-note">
          <p className="footer-text">Authors note: This is quite a big project to write and develop so some of the chapters are yet to be fully written. There are bullet point notes for the incomplete chapters which will hopefully give you an idea of the story arc I have in mind - if you have any questions or suggestions, please get in touch through LinkedIn.</p>
          <p>Click anywhere in the footer to hide this message, click again to bring it back.</p>
        </div>
      </div>
    )
  }
}

export default Footer
