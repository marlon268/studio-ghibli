import React from 'react'
import Link from 'next/link'

export const UserNameHeader = () => {
  return (
    <hedaer className="UserName_Header"> 
        <button className="UserName__button Back">
          <Link href="/home">
            <img src='./images/BackButton.png' alt="ArrowBack" />
          </Link>
        </button>
        <button className="UserName__button Exit">
            <img src='./images/Exit.png' alt="Exit" />
        </button>
    </hedaer>
  )
}
