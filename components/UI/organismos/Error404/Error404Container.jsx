import React from 'react'
import {ImgError} from '../../moleculas/Error404Img/ImgError'
import {ButtonError} from '../../atomos/ButtonError'

export const Error404Container = () => {
  return (
    <div className="Error404Container">
        <h1>Page Not Found!</h1>
        <ButtonError/>
        <ImgError/>
    </div>
  )
}
