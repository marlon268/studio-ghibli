import React from 'react'
import { useRouter } from 'next/router'
import {signOut} from "next-auth/react"


export const ConfigMenu = ({state, modalState}) => {
    const router = useRouter()
  return (
      <React.Fragment>
          { state &&
              <nav className="SubMenu_Account">
                  <button className="SubMenu_Account__ExitModal" onClick={()=> modalState(!state)}>
                        <img src='./images/X.png' alt="Exit" />
                  </button>
        <ul className="SubMenu_Account__list">
            <li className="SubMenu_Account__item">
                <button className="SubMenu_Account__button" onClick={()=> router.push('/about')}>
                    <a>About Us</a>
                    <img src='./images/AboutUs.png' alt="AboutUs" />
                </button>
            </li>
            <li className="SubMenu_Account__item" onClick={()=> router.push('/config')}>
                <button className="SubMenu_Account__button">
                    <a>Config</a>
                    <img src='./images/Config.png' alt="Config" />
                </button>
            </li>
            <li className="SubMenu_Account__item">
                <button className="SubMenu_Account__button" onClick={()=> signOut()}>
                    <a>Log Out</a>
                    <img src='./images/LogOut.png' alt="LogOut" />
                </button>
            </li>
        </ul>
    </nav>}
    
    </React.Fragment>
  )
}
