import React from 'react'
import { NavBar } from '../../moleculas/NavBar/NavBar'


export const HeaderProfile = () => {
  return (
    <header>
      <button className="UserNameOptions__button">
      <img className="IconProfile" src="./images/UserIcon.png" alt="backButton" />
      </button>  
  <nav>
    <NavBar />
  </nav>
</header>
  )
}
