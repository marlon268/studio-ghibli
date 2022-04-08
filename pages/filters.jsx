import React from 'react'
import {FilterContainer} from '../components/UI/organismos/FilterContainer/FilterContainer'
import { HeaderNav } from '../components/UI/organismos/HeaderNav/HeaderNav'


const Filters = () => {
  return (
    <React.Fragment >
      <HeaderNav />
      <FilterContainer />
    </React.Fragment>
  )
}

export default Filters