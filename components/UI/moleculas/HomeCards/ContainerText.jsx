import React from "react";
import TitleCard from '../../atomos/HomeCards/TitleCard'
import YearCard from "../../atomos/HomeCards/YearCard"
import DescriptionCard from "../../atomos/HomeCards/DescriptionCard"

const ContainerText = () =>{
    return(
        <div className="container-text">
                <TitleCard
                    title = "Star Wars: The Rise of Skywalker"
                />
                <YearCard 
                    year = "1986"
                />
                <DescriptionCard 
                    description = "The surviving Resistance faces the First Order once again, and unite once again to defeat the evil Galactic Empire."
                
                />
               
        </div>
    )
}

export default ContainerText;