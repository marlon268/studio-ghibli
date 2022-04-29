import React from 'react'

export const HeaderDetails = () => {
  return (
    <header>
  <button className="UserNameOptions__button">
    <Link href="/home">
      <FontAwesomeIcon icon={faArrowLeft} width="25px" color='white'/>
    </Link>
  </button> 
</header>
  )
}
