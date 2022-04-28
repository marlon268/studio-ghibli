import React from 'react'
import { NavBar } from '../../moleculas/NavBar/NavBar'
import  Link  from 'next/link' 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft, faMagnifyingGlass  } from "@fortawesome/free-solid-svg-icons";


export const HeaderNav = () => {
  return (
<header>
  <button className="UserNameOptions__button">
    <Link href="/home">
      <FontAwesomeIcon icon={faArrowLeft} width="25px" color='white'/>
    </Link>
  </button> 
  <nav>
    <NavBar />
  </nav>
</header>
  )
}
