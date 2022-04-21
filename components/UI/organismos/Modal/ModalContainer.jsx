import React from "react";
import { ModalTextContainer } from "../../moleculas/ModalQualify/ModalTextContainer";
import { ModalIconsContainer } from "../../moleculas/ModalQualify/ModalIconsContainer";
import "./ModalContainer.scss";

export const ModalContainer = () => {
  return (
    <div className="modal">
      <ModalTextContainer />
      <ModalIconsContainer />
    </div>
  );
};
