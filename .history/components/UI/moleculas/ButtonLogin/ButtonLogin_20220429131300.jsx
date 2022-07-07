import React from 'react'
import Icons from '../Icons/Icons';

const ButtonLogin = (props) =>{
    return(                            
            <button type={props.type} className={props.className}>  
                <Icons icon={props.className} /> 
                <p>{props.text}</p>
            </button>
        
    )
}

export default ButtonLogin;