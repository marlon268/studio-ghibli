import React from "react";
import ContainerText from "../../moleculas/HomeCards/ContainerText";
import ContainerImg from "../../moleculas/HomeCards/ContainerImg";


export const Cards = ({children}) => {
    return(
        <div className="container">
            <ContainerImg />
            <ContainerText />
        </div>      
                 
    )
}


export default Cards;
