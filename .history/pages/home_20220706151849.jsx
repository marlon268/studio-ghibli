import React, { useState, useEffect } from "react";
import { HeaderProfile } from "../components/UI/organismos/HeaderProfile/HeaderProfile";
import { getList } from "../database/services";
import HomeCards from "../components/UI/organismos/HomeCards/HomeCards";
import {FilterContainer} from '../components/UI/organismos/FilterContainer/FilterContainer'
import { Kodama } from "../components/UI/organismos/AnimationBanners/Kodama";
import { useSession, signIn, signOut } from "next-auth/react"

const Home = () => {
  const [list, setList] = React.useState([]);
  const [loader , setLoader] = React.useState(true);
  const [option , setOption] = React.useState('');
  const [order , setOrder] = React.useState('');

  const getOption = () => {
    const sortBy = document.getElementById("sortBy");
    const Option = sortBy.value;
    console.log(Option);
    return Option;
  }

  const getOrder = () => {
    const orderS = document.getElementById("order");
    const Option = orderS.value;
    console.log(Option);
    return Option;
  }

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
   setTimeout(() => {
      setLoader(false);
    }, 5500);
    setFilterState(filterState => !filterState);
  }

  const [searchValue, setSearchValue] = React.useState('')

  const handleChange = () => {
    option = getOption();
    order = getOrder();
    setOrder(order);
    setOption(option);
    const keyOption = option +" "+ order;
    console.log("keyOption:", keyOption);
    switch (keyOption) {
      case "Year Ascending":
        setList(list.sort((a, b) => a.release_date.localeCompare(b.release_date)));
        break;
      case "Year Falling":
        setList(list.sort((a, b) => b.release_date.localeCompare(a.release_date)));
        break;
      case "Gender Ascending":
        setList(list.sort((a, b) => a.running_time.localeCompare(b.running_time)));
        break;
      case "Gender Falling":
        setList(list.sort((a, b) => b.running_time.localeCompare(a.running_time)));
        break;
      case "Character Ascending":
        setList(list.sort((a, b) => a.rt_score.localeCompare(b.rt_score)));
        break;
      case "Character Falling":
        setList(list.sort((a, b) => b.rt_score.localeCompare(a.rt_score)));
        break;
      default:
        console.log("Somting went wrong, try again");
        break;
    }     
  }
 
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
      <button className="IconFilter" onClick={handleClickFilters}>
    <img  src="./images/filterIcon.png" alt="backButton" />
    </button>
    <React.Fragment>
    { 
      filterState ? (
      <div className="FiltersContainer">
        <FilterContainer getOption={getOption} getOrder={getOrder} handleChange={handleChange}  />
        {
          !loader ? (
            <div className="containerCards">
            {
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
            }     
          </div>

          ) : ( 
          <Kodama/>
          )
        }
    
       
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


export const getServerSideProps = async (context) => {
  const session = await useSession()

  if (!session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {
      session,
    },
  }

}

export default Home;
