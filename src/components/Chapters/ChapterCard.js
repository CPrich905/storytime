import React from 'react'
// import axios from 'axios'
import { Link } from 'react-router-dom'

// each chapter card will be the button/tile that is clicked when the reader makes a decision.
// must contain: chapter number & choice text


// If adding this back in, remove { Component } and axios from imports
const ChapterCard = ({ chapter, choice, _id }) => {
  return (
    <div>
      <Link to={`/${_id}`}
        className="chapter-link">
        <div className="card">
          <div className="card-header">
            <h4>Chapter {chapter}</h4>
          </div>
          <div className="card-text">
            <p>{choice}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}


// if trying this again, will need to import {Component} from react and axios from axios
// class ChapterCard extends Component {
//   constructor() {
//     super()
//     this.state = {
//       chapters: null
//     }
//   }
//
//   getData() {
//     axios.get(`/api/chapterssearch/${this.props.match.params.chapter}`)
//       .then(res => console.log(res.data))
//       .catch(err => console.log(err))
//   }
//
//
//   render() {
//     if(!this.state.chapter) return null
//     const { chapter } = this.state
//
//
//     return (
//       <div>
//         <Link to={`/${}`}>
//           <div className="card">
//             <div className="card-header">
//               <h4>Chapter {chapter}</h4>
//             </div>
//             <div className="card-text">
//               <p>{choice}</p>
//             </div>
//           </div>
//         </Link>
//       </div>
//     )
//   }
//
// }


export default ChapterCard
