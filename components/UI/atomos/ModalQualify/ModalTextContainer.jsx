import React from 'react'
import {TextItemH1} from '../../atomos/textElements/TextItemH1'
import {TextItemH2} from '../../atomos/textElements/TextItemH2'
import "./ModalTextContainer.scss"


export const ModalTextContainer = () => {
  return (
    <div className="modal-text--container">
        <TextItemH1 text="Help US to Be Better" />
        <TextItemH2 text="your experience is important for us " />
        <TextItemH1 text="QUALIFY" />
    </div>
  )
}
