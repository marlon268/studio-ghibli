import React from 'react'
import {HeaderNav} from '../components/UI/organismos/HeaderNav/HeaderNav'

const FilmWatched = () => {
  return (
    <div className="animation">
        <HeaderNav />
    </div>
   
  )
}

export const getServerSideProps = async (context) => {
  const session = await getSession(context)

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }

}

export default FilmWatched