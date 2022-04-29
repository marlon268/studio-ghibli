import React from 'react'
import  Link  from 'next/link'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";

export const HeaderDetails = () => {
  return (
    <header className="HeaderDetails">
  <button className="UserNameOptions__button">
    <Link href="/home">
      <FontAwesomeIcon icon={faArrowLeft} width="25px" color='white'/>
    </Link>
  </button> 
</header>
  )
}
