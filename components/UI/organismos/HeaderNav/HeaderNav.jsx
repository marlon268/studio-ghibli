import React from 'react'
import { NavBar } from '../../moleculas/NavBar/NavBar'


export const HeaderNav = () => {
  return (
<header>
  <button className="UserNameOptions__button">
  <img src="./images/BackButton.png" alt="backButton" />
  </button> 
  <nav>
    <NavBar />
  </nav>
</header>
  )
}
