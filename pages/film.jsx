import React from 'react'
import Cards from '../components/UI/organismos/HomeCards/HomeCards'
import { HeaderNav} from '../components/UI/organismos/HeaderNav/HeaderNav'


export async function getStaticProps() {
  try {
    const res = await fetch('https://ghibliapi.herokuapp.com/films/')
    const data =await res.json()
    return {
      props: {
        data
      }
  }
    
  } catch (error) {
    console.log(error)
  }
}

const Film = ({data}) => {
  
  return (
    <React.Fragment>
      <HeaderNav />
      <Cards data={
            data.map(({id, title, director, image, key}) => (
              key={id},
              title={title},
              director={director},
              image={image} 
            )) 
          }/>
    </React.Fragment>    
  )
}




export default Film