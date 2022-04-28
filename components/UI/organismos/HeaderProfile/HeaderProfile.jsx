import React , { useState, useEffect } from 'react'
import { NavBar } from '../../moleculas/NavBar/NavBar'
import  Link  from 'next/link'


export const HeaderProfile = (props) => {
  return (
    <header>
      <button className="UserNameOptions__button">
      <Link href="/account">
      <img className="IconProfile" src="./images/UserIcon.png" alt="backButton" />
      </Link>
      </button>  
  <nav>
    <NavBar searchValue={props.searchValue} setSearchValue={props.setSearchValue} />
  </nav>
</header>
  )
}
