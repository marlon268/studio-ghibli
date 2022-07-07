import React from 'react'
import { HeaderNav} from '../components/UI/organismos/HeaderNav/HeaderNav'
import { getSession } from 'next-auth/react'

const Search = () => {
  return (
    <HeaderNav />
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

export default Search