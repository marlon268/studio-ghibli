import React from 'react'
import { FilterSearch } from '../../moleculas/FilterSearch/FilterSearch'

export const FilterContainer = (props) => {
  return (
    <div className="FilterSearch_Container" > 
        <FilterSearch getOption={props.getOption} getOrder={props.getOrder} handleChange={props.handleChange}/>
    </div>
  )
}
