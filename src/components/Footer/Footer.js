import React from 'react'

class Footer extends React.Component {
  constructor() {
    super()

    this.hideFooter = this.hideFooter.bind(this)
  }

  hideFooter() {
    // const footerDiv = document.querySelector('footer')
    const footerNotes = document.querySelectorAll('.footer-text')
    const authorsNote = document.getElementById('authors-note')
    let i = 0
    // console.log('footerNote', footerNotes[1])
    for (i = 0; i < footerNotes.length; i++) {
      if (footerNotes[i].style.display === 'none') {
        footerNotes[i].style.display = 'block'
        authorsNote.style.display = 'none'
      } else {
        footerNotes[i].style.display = 'none'
        authorsNote.style.display = 'block'
      }
    }
  }

  render() {
    return(
      <div className="footer" onClick={this.hideFooter}>
        <h4 className="footer-banner">Page & Story by Me. <a href="https://www.linkedin.com/in/charles-prichard/">LinkedIn</a></h4>
        <div className="footer-note" id="footer-note">
          <p><span id="authors-note" className="authors-note">Click to show authors note </span><span className="footer-text">This is quite a big project to write and develop so some of the chapters are yet to be fully written. There are bullet point notes for the incomplete chapters which will hopefully give you an idea of the story arc I have in mind - if you have any questions or suggestions, please get in touch through LinkedIn.</span></p>
        </div>
      </div>
    )
  }
}

export default Footer
