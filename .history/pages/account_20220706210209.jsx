import React from 'react'
import {AccountContainer} from '../components/UI/moleculas/AccountContainer/AccountContainer'
import { getSession} from 'next-auth/react' 

const Account = () => {
  return (
    <div className="animation">
    <AccountContainer />
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

export default Account