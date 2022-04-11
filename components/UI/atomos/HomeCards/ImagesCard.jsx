import React from "react";

export const ImagesCard = ( props ) =>{
    return(
        <img 
                className="images-card"
                src= { props.image }
                alt="images of card"
            />
    )
}


export default ImagesCard;