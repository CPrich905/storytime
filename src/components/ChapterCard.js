import React from 'react'
import { Link } from 'react-router-dom'

// each chapter card will be the button/tile that is clicked when the reader makes a decision.
// must contain: chapter number & choice text

const ChapterCard = ({ chapter, choice, _id }) => {
  return (
    <div>
      <Link to={`${_id}`}>
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

export default ChapterCard