import React from 'react'

export const UserNameHeader = () => {
  return (
    <hedaer className="UserName_Header"> 
        <button className="UserName__button Back">
            <img src='./images/BackButton.png' alt="ArrowBack" />
        </button>
        <button className="UserName__button Exit">
            <img src='./images/Exit.png' alt="Exit" />
        </button>
    </hedaer>
  )
}
