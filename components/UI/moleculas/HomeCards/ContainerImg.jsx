import React from "react";
import ImagesCard from '../../atomos/HomeCards/ImagesCard'


const ContainerImg = () =>{
    return(
        
            <div className="container-images">
                <ImagesCard
                    images= "https://image.tmdb.org/t/p/w600_and_h900_bestv2/npOnzAbLh6VOIu3naU5QaEcTepo.jpg"
                />
            </div>
       
    )
}

export default ContainerImg;