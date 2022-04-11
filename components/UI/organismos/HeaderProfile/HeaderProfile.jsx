import React from 'react'
import { NavBar } from '../../moleculas/NavBar/NavBar'
import  Link  from 'next/link'


export const HeaderProfile = () => {
  return (
    <header>
      <button className="UserNameOptions__button">
      <Link href="/account">
      <img className="IconProfile" src="./images/UserIcon.png" alt="backButton" />
      </Link>
      </button>  
  <nav>
    <NavBar />
  </nav>
</header>
  )
}
