import React from 'react'
import {FilterContainer} from '../components/UI/organismos/FilterContainer/FilterContainer'
import { HeaderNav } from '../components/UI/organismos/HeaderNav/HeaderNav'


const Filters = () => {
  return (
    <div className="animation">
      <HeaderNav />
      <FilterContainer />
    </div>
  )
}

export default Filters