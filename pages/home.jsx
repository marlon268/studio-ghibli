import React from 'react'
import Cards from '../components/UI/organismos/HomeCards/HomeCards'
import ProgressBar from '../components/UI/atomos/ProgessBar/ProgressBar'
import {HeaderProfile} from '../components/UI/organismos/HeaderProfile/HeaderProfile'

const Home = () => {
  return (
    <React.Fragment>
    <HeaderProfile />
    <div>
      <div>Home</div>
      <Cards />
      <Cards />
      <ProgressBar 
        bar = "20"
      />
    </div>
    </React.Fragment>
  )
}

export default Home