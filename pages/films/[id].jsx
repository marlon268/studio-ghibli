import React from 'react'
import {useRouter} from 'next/router'
import data from '../../database/data'
import { HeaderNav } from '../../components/UI/organismos/HeaderNav/HeaderNav'



const Film = () => {
  const router = useRouter()
  const {id} = router.query
  const arr = Object.keys(data).map(key => data[key])
  const film = arr.find(film => film.id === id)
  console.log('film:', film)


  return (
    <div className="animation">
      <HeaderNav />
      <h1>{film.title}</h1>
      <p>{film.description}</p>
      <img src={film.image} alt=""/>
    </div>
  )
}

export default Film
