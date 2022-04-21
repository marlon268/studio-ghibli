import React from "react";
import ImagesCard from '../../atomos/HomeCards/ImagesCard'


const ContainerImg = (props) =>{
    return(
        
            <div className="container-images">
                <ImagesCard
                    image={props.image}
                />
            </div>
       
    )
}

export default ContainerImg;