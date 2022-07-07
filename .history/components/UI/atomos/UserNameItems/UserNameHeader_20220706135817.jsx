import React, { useState, useEffect }from 'react'
import Link from 'next/link'
import { ConfigMenu } from '../../organismos/SubMenuAccount/ConfigMenu';

export const UserNameHeader = (props) => {
  const [modalState, setModalState] = useState(false);



  return (
    <React.Fragment>
    <hedaer className="UserName_Header"> 
        <button className="UserName__button Back">
          <Link href="/home">
            <img src='./images/BackButton.png' alt="ArrowBack" />
          </Link>
        </button>
        <button className="UserName__button Exit" onClick={()=> setModalState(!modalState)}>
            <img src='./images/Exit.png' alt="Exit" />
        </button>
        
    </hedaer>
    <ConfigMenu state={modalState} modalState={setModalState} />
    </React.Fragment>
  )
}
