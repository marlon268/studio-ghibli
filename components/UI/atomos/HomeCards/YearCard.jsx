import React from "react";
import { MovieWatched } from "../MovieWatched/movieWatched";

export const YearCard = ( props ) =>{
    return(
        <div className="boxFuncionality">
             <p className="year-card"> { props.year }</p>
            <MovieWatched />
        </div>
       

    )
}

export default YearCard;