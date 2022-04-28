import React, { useState } from 'react';

import { Estrellas } from "../../components/UI/organismos/Estrellas";
import Link from 'next/link'
import { getList } from '../../database/services';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHeart, faArrowRight  } from "@fortawesome/free-solid-svg-icons";
import {faArrowLeft, faMagnifyingGlass  } from "@fortawesome/free-solid-svg-icons";



export default function Film ({data}){
    
  return (
      <>
        
        <header>
            <button className="UserNameOptions__button">
              <Link href="/home">
                <FontAwesomeIcon icon={faArrowLeft} width="25px" color='white'/>
              </Link>
            </button> 
            <nav>
            <div className="SearchBar">
              <input type="text" placeholder="Search" />
              <button className="btn">
              <FontAwesomeIcon icon={ faMagnifyingGlass } width="15px" color='white'/>
              </button>
            </div>
            </nav>
        </header>
        <div className='container-film-id'>        
            <img className='background-img' src={data.movie_banner} />
            <div className='container-title'>
                <div>
                <h1 className='title'>{ data.title }</h1>
                <FontAwesomeIcon icon={faHeart} style={{color:"red"}}/>
                </div>
                
                <p className='year-card-film'>{ data.release_date }</p>
            </div>
            <div className='container-images'>
                <img className='img' src={data.image}  /> 
                <div className='iconStar'>
                  <Estrellas/>
                </div>
                
            </div>
            <div className='container-text-film-id'>
                <p className='description'>{ data.description }</p>
                <p className='moreInfo'>
                  <Link href={`https://es.wikipedia.org/wiki/${data.title}`} passHref>
                    <a>More info </a>
                  </Link>
                  <FontAwesomeIcon icon={faArrowRight}/></p>
            </div>
                 
    </div>
    
    </>
  )
}

 export async function getStaticPaths (){
    try{
      //const res = await fetch('https://demo5947973.mockable.io/movies')
      const res = await fetch('https://ghibliapi.herokuapp.com/films');
      const data = await res.json();
      const paths = data.map(({ id }) => ({params: {id: `${id}`}}));
      return {
          paths,
          fallback:false
      }
    }catch (error){
      console.log(error);
    }

} 

 export async function getStaticProps ({ params }){
    
    try {
      const res = await fetch(
          'https://ghibliapi.herokuapp.com/films/' +  params.id);
          //'https://demo5947973.mockable.io/movies/' +  params.id);
      const data = await res.json();
      //console.log(data);
      return{
          props: {
            data
          }
      }      
    }catch (error){
      console.log(error);
    }

} 
