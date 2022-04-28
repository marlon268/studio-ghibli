import React from 'react'

export const FilterSearch = () => {
  return (
    <React.Fragment>
    <div className="select" >
    <label>Sort By </label>
    <select name="SortBy">
      <option disabled="choice">Select One Option</option>
              <option value="Year">Year</option>
              <option value="Gender">Gender</option>
              <option value="Character">Character</option>              
     </select>   
     <label>Order  </label>
    <select name="Order">
      <option disabled="choice">Select One Option</option>
                <option value="Ascending">Ascending</option>
                <option value="Falling">Falling</option>
     </select>   
    </div>    
    </React.Fragment>
  )
}
