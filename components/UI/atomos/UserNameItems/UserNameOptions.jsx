import React from 'react'
import Link from 'next/link' 


export const UserNameOptions = () => {
  return (
    <div className="UserNameOptions">
        <button className="UserNameOptions__button">
          <Link href="/score">
          <label>Scores</label>
          </Link>
            <img className="ArrowOne" src='./images/ArrowOptions.png' alt="Arrow" />
          
            
        </button>
        <button className="UserNameOptions__button">
            <label>Passwords</label>
            <img className="ArrowTwo" src='./images/ArrowOptions.png' alt="Arrow" />
        </button>
    </div>
  )
}
