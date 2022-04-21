import React, { useState, useEffect }from 'react'
import {HeaderProfile} from '../components/UI/organismos/HeaderProfile/HeaderProfile'
import {getList} from '../database/services'
import HomeCards from '../components/UI/organismos/HomeCards/HomeCards'



 
const Home = () => {
  
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true
    getList()
      .then(films => {
        console.log('films:', films)
        if (mounted) {
       setList(films)
       }
      })
    return () => {
      mounted = false
    }
  }, [])
  
  return (
    
     <div className="animation">
      <div className="containerCards">
      <HeaderProfile /> 
      {
            list.map((film) => (
              <HomeCards id={film.id} title={film.title} image={film.image}  release_date={film.release_date} description={film.description} />
            ))
      } 
      </div>
        
        </div>   
  
     
  )
}

export default Home