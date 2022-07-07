import React from 'react'
import { Error404Container } from '../components/UI/organismos/Error404/Error404Container'
import { getSession } from 'next-auth/react'

const NotFound = () => {
  return (
    <Error404Container />
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

export default NotFound