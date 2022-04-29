import React, { useState, useEffect } from "react";
import { HeaderProfile } from "../components/UI/organismos/HeaderProfile/HeaderProfile";
import { getList } from "../database/services";
import HomeCards from "../components/UI/organismos/HomeCards/HomeCards";
import {FilterContainer} from '../components/UI/organismos/FilterContainer/FilterContainer'
import { Kodama } from "../components/UI/organismos/AnimationBanners/Kodama";

const Home = () => {
  const [list, setList] = React.useState([]);

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

  const [filterState, setFilterState] = React.useState(false);
  
  function handleClickFilters() {
    setFilterState(filterState => !filterState);    
  }

  const [searchValue, setSearchValue] = React.useState('')

  let searchedTitles = []
  if (!searchValue.length >= 1) {
    searchedTitles = list;
  } else {
    searchedTitles = list.filter((film) => {
    const filmText = film.title.toLowerCase();
    const searchText = searchValue.toLowerCase();
    return filmText.includes(searchText);
    })  
  }
  
  return (
      <div className="animation">
      <HeaderProfile searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="containerCards">
      <button className="IconFilter" onClick={()=> handleClickFilters()}>
    <img  src="./images/filterIcon.png" alt="backButton" />
    </button>
    <React.Fragment>
    { 
      filterState ? (
      <div className="FiltersContainer">
        <FilterContainer />
        <Kodama />
        </div>       
     ) : (
          searchedTitles.map((film) => (
          <HomeCards key={film.id}
            id={film.id}
            title={film.title}
            image={film.image}
            release_date={film.release_date}
            description={film.description}
            watched={film.watched}
          />
        ))  
         )
    }
    </React.Fragment>
    </div>
    </div>   
  );
};

export default Home;
