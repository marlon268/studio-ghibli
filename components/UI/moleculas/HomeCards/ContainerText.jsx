import React from "react";
import TitleCard from '../../atomos/HomeCards/TitleCard'
import YearCard from "../../atomos/HomeCards/YearCard"
import DescriptionCard from "../../atomos/HomeCards/DescriptionCard"
import {useRouter} from 'next/router'

const ContainerText = (props) =>{
    const router = useRouter();
    return(
        <div className="container-text">
            <a onClick={()=> router.push(`/films/${props.id}`)}>
            <TitleCard
                    title={props.title}
                />
            </a>              
                <YearCard 
                    year={props.year}
                />
                <DescriptionCard 
                    description={props.description}
                
                />
               
        </div>
    )
}

export default ContainerText;