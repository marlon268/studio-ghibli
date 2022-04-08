import React from 'react'


export const UserNameOptions = () => {
  return (
    <div className="UserNameOptions">
        <button className="UserNameOptions__button">
            <label>Scores</label>
            <img className="ArrowOne" src='./images/ArrowOptions.png' alt="Arrow" />
        </button>
        <button className="UserNameOptions__button">
            <label>Passwords</label>
            <img className="ArrowTwo" src='./images/ArrowOptions.png' alt="Arrow" />
        </button>
    </div>
  )
}
