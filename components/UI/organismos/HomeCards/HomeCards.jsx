import React from "react";
import ContainerText from "../../moleculas/HomeCards/ContainerText";
import ContainerImg from "../../moleculas/HomeCards/ContainerImg";


export const Cards = ({data}) => {
    return(
        <div className="container">
            <ContainerImg images={data.image}/>
            <ContainerText />
        </div>      
                 
    )
}


export default Cards;
