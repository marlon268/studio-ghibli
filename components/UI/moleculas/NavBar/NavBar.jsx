import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass  } from "@fortawesome/free-solid-svg-icons";



export const NavBar = ({searchValue, setSearchValue}) => {
  const onSearchValueChange = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }
  return (
   <div className="SearchBar">
  <input type="text" placeholder="Search" onChange={onSearchValueChange}  value={searchValue} />
  <button type="submit" className="btn">
    <FontAwesomeIcon icon={ faMagnifyingGlass } width="15px" color='white'/>
  </button>
</div>
  )
}
