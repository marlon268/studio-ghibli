import React from 'react'

export const FilterSearch = (props) => {
  return (
    <React.Fragment>
    <div className="select" >
    <label>Sort By </label>
    <select id="sortBy" name="SortBy" onClick={props.handleChange}  onChange={props.getOption}>
      <option disabled="choice" selected="selected">Select One Option</option>
              <option value="Year">Year</option>
              <option value="Gender">Gender</option>
              <option value="Character">Character</option>              
     </select>   
     <label>Order  </label>
    <select id="order" name="Order" onClick={props.handleChange} onChange={props.getOrder}>
      <option disabled="choice" selected="selected">Select One Option</option>
                <option value="Ascending" >Ascending</option>
                <option value="Falling" >Falling</option>
     </select>   
    </div>    
    </React.Fragment>
  )
}
