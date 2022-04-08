import React from "react";
import TitleCard from '../../atomos/HomeCards/TitleCard'
import YearCard from "../../atomos/HomeCards/YearCard"
import DescriptionCard from "../../atomos/HomeCards/DescriptionCard"

const ContainerText = () =>{
    return(
        <div className="container-text">
                <TitleCard
                    title = "Castle in the Sky"
                />
                <YearCard 
                    year = "1986"
                />
                <DescriptionCard 
                    description = "The orphan Sheeta inherited a mysterious crystal that links her to the mythical sky-kingdom of Laputa. With the help of resourceful Pazu and a rollicking band of sky pirates, she makes her way to the ruins of the once-great civilization. Sheeta and Pazu must outwit the evil Muska, who plans to use Laputa's science to make himself ruler of the world."
                
                />
               
        </div>
    )
}

export default ContainerText;