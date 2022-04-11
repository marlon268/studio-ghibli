import React from 'react'


export const NavBar = () => {
  return (
   <div className="SearchBar">
  <input type="text" placeholder="Search" />
  <button className="btn">
    <img src="./images/SearchInput.png" alt="ShearchIcon" />
  </button>
</div>
  )
}
