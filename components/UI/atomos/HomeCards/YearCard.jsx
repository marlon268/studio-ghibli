import React from "react";
import { MovieWatched } from "../MovieWatched/MovieWatched";

export const YearCard = ( props ) =>{
    return(
        <div className="boxFuncionality">
             <p className="year-card"> { props.year }</p>
            <MovieWatched watched={props.watched} />
        </div>
       

    )
}

export default YearCard;