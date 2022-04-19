import React, { useState, useEffect }from 'react'
import {HeaderProfile} from '../components/UI/organismos/HeaderProfile/HeaderProfile'
import { useRouter } from 'next/router'
/* import data from '../database/data.js' */
import {getList} from '../database/services'



 
const Home = () => {
  const router = useRouter();
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
      <div className="cards">
      <HeaderProfile />
        {
            list.map(film => (
             
              <div className="container" key={film.id}>
              <div className="container-images">
              <img 
                        className="images-card"
                        src={film.image}
                        alt="images of card"
                    />
               </div>
               <div className="container-text">
                    <h1 className="title-card"> {film.title} </h1>
                    <p className="year-card"> {film.release_date}</p>
                    <p className="description-card">{film.description }</p>
              </div>
              <button onClick={()=> router.push(`/films/${film.id}`)}>
                <a>Go!</a>
              </button>
              </div>
            ))
        }        
      </div>
    </div> 
      
  )
}

export default Home