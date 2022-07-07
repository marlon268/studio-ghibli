import React from 'react'

import { library, icon } from '@fortawesome/fontawesome-svg-core'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {fas} from '@fortawesome/free-solid-svg-icons'
import {faTwitter, faFacebook, faGithub} from '@fortawesome/free-brands-svg-icons'


library.add(fas , faTwitter, faFacebook, faGithub);

const Icons = (props) =>{

const facebook = icon({ prefix: 'fab', iconName: 'facebook' });
const twitter = icon({ prefix: 'fab', iconName: 'twitter' });
const github = icon({ prefix: 'fab', iconName: 'github'});

  if (props.icon === "facebook"){
    return(        
        <FontAwesomeIcon icon= {facebook} />             
    )     
  } 
  else if(props.icon === "twitter") {
    return(      
        <FontAwesomeIcon icon={twitter}  />      
    )    
  }/*  else if(props.icon === "github"){
      <FontAwesomeIcon icon={github} />   
  } */
  else{
    return(      
      <FontAwesomeIcon icon={props.icon} />      
  )

  }
}

export default Icons;