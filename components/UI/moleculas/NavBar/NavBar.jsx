import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass  } from "@fortawesome/free-solid-svg-icons";



export const NavBar = () => {
  return (
   <div className="SearchBar">
  <input type="text" placeholder="Search" />
  <button className="btn">
  <FontAwesomeIcon icon={ faMagnifyingGlass } width="15px" color='white'/>
  </button>
</div>
  )
}
