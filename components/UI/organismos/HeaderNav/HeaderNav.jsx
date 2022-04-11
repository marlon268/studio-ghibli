import React from 'react'
import { NavBar } from '../../moleculas/NavBar/NavBar'
import  Link  from 'next/link' 


export const HeaderNav = () => {
  return (
<header>
  <button className="UserNameOptions__button">
    <Link href="/home">
  <img src="./images/BackButton.png" alt="backButton" />
    </Link>
  </button> 
  <nav>
    <NavBar />
  </nav>
</header>
  )
}
