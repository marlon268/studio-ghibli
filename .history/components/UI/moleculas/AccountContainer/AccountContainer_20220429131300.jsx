import React from 'react'
import { UserNameHeader } from '../../atomos/UserNameItems/UserNameHeader'
import { UserNameData } from '../../atomos/UserNameItems/UserNameData'
import { UserNameOptions } from '../../atomos/UserNameItems/UserNameOptions'
import ProgressBar from '../../atomos/ProgessBar/ProgressBar'
import { ConfigMenu } from '../../organismos/SubMenuAccount/ConfigMenu'

export const AccountContainer = () => {
  return (
    <div className="Account_Container">
        <UserNameHeader />
        <UserNameData />
        <UserNameOptions />
        <ProgressBar bar = "17" />
    </div>
  )
}
