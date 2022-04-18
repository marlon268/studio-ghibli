import React from 'react'
import {HeaderProfile} from '../components/UI/organismos/HeaderProfile/HeaderProfile'
import { useRouter } from 'next/router'
import data from '../database/data.js'

 
const Home = () => {

  const router = useRouter()
  
  return (
      <div className="animation">      
      <div className="cards">
      <HeaderProfile />
        {
            data.map(({id, title, image, release_date, description}) => (
             
              <div className="container" key={id}>
              <div className="container-images">
              <img 
                        className="images-card"
                        src={image}
                        alt="images of card"
                    />
               </div>
               <div className="container-text">
                    <h1 className="title-card"> {title} </h1>
                    <p className="year-card"> {release_date}</p>
                    <p className="description-card">{description }</p>
              </div>
              <button onClick={()=> router.push(`/films/${id}`)}>
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