import React, { useState, useEffect } from "react";
import Link from 'next/link'

import { HeaderProfile } from "../components/UI/organismos/HeaderProfile/HeaderProfile";
import { getList } from "../database/services";
import { Estrellas } from "../components/UI/organismos/Estrellas";
import { ModalContainer } from "../components/UI/organismos/Modal/ModalContainer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faArrowLeft, faMagnifyingGlass  } from "@fortawesome/free-solid-svg-icons";

const Score = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList().then((films) => {
      console.log("films:", films);
      if (mounted) {
        setList(films);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

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

      <div className="containerScore">
        <div className="container-main">
          {list.map(({id, title, image}) => (
                <div className="container" key = {id}>                
                  <img 
                          className="images-score"
                          src= { image }
                          alt="images of card"
                        />
                
                        <div className="container-text">
                          <h1 className="title-score"> { title } </h1>
                          <div className="container-estrellas">
                            <h2>Audience Score</h2>
                            <Estrellas/>
                            <h2>Your Score</h2>
                            <Estrellas/>
                            <ModalContainer />
                          </div> 
                          
                        </div>                       
                </div>    
              ))}
        </div>  
      </div>
    
    </>
  );
};

export default Score;

