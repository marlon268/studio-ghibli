import React from 'react'
import {InputDefault} from '../../atomos/ModalItmes/InputDefault'
import {ModalIconsList} from '../../atomos/ModalItmes/ModalIconsList'
import "./ModalIconsContainer.scss"
import Dos from "../../../../assets/images/ModalEmojis/dos.png"
import Tres from "../../../../assets/images/ModalEmojis/tres.png"
import Cuatro from "../../../../assets/images/ModalEmojis/cuatro.png"
import Cinco from "../../../../assets/images/ModalEmojis/cinco.png"



export const ModalIconsContainer = () => {
    return (
        <React.Fragment>
            <ul className="modal-icons--container">
            <ModalIconsList>
                <InputDefault type="image" name="qualify" value="1" src="../../../../assets/images/ModalEmojis/uno.png" alt="Nombre" />
            </ModalIconsList>
            <ModalIconsList>
                <InputDefault type="image" name="qualify" value="2" src={Dos} alt="Nombre" />
            </ModalIconsList>
            <ModalIconsList>
                <InputDefault type="image" name="qualify" value="3" src={Tres}  alt="Nombre" />
            </ModalIconsList>
            <ModalIconsList>
                <InputDefault type="image" name="qualify" value="4" src={Cuatro} alt="Nombre" />
            </ModalIconsList>
            <ModalIconsList>
                <InputDefault type="image" name="qualify" value="5" src={Cinco} alt="Nombre" />
            </ModalIconsList>
            </ul>           
        </React.Fragment>
  )
}
