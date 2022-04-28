import React from "react";
import ContainerText from "../../moleculas/HomeCards/ContainerText";
import ContainerImg from "../../moleculas/HomeCards/ContainerImg";
import { useRouter } from 'next/router'


export const Cards = (props) => {
    const router = useRouter();
    return(
        <div className="card">
             <ContainerImg image={props.image}  />
            <ContainerText id={props.id} title={props.title} year={props.release_date}  description={props.description} watched={props.watched}  />
        </div>       
    )
}


export default Cards;
