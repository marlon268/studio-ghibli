import React from 'react'
import { UserNameHeader } from '../../atomos/UserNameItems/UserNameHeader'
import { UserNameData } from '../../atomos/UserNameItems/UserNameData'
import { UserNameOptions } from '../../atomos/UserNameItems/UserNameOptions'
import ProgressBar from '../../atomos/ProgessBar/ProgressBar'
import { ConfigMenu } from '../../organismos/SubMenuAccount/ConfigMenu'
import {useSession} from "next-auth/react"

export const AccountContainer = () => {
  const {data:session, status} = useSession();
  const [user, getUser] = React.useState([]);

  React.useEffect(()=> {
    
      getUser(session.user);
   

  },[]);

  console.log("user", user)

  return (
    <div className="Account_Container">
        <UserNameHeader />
        <UserNameData name={user.name} image={user.image} />
        <UserNameOptions />
        <ProgressBar bar = "17" />
    </div>
  )
}
