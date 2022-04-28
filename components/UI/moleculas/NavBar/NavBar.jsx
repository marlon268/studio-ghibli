import React from 'react'


export const NavBar = ({searchValue, setSearchValue}) => {
  const onSearchValueChange = (e) => {
    console.log(e.target.value)
    setSearchValue(e.target.value)
  }
  return (
   <div className="SearchBar">
  <input type="text" placeholder="Search" onChange={onSearchValueChange}  value={searchValue} />
  <button type="submit" className="btn">
    <img src="./images/SearchInput.png" alt="ShearchIcon" />
  </button>
</div>
  )
}
