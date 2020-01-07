import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import JokeCard from "./JokeCard";
import SearchForm from "./SearchForm";


export default function JokeList() {
 

  const [jokes, setJokes] = useState([]);
  const [filterData, updateData] = useState([])

 

  const search = charArray => {
      updateData(charArray)
      
  };


  useEffect(() => {
   

    

    Axios.get("https://dadjokesbw.herokuapp.com/api/jokes").then(response => {
        console.log(response.data);
        setJokes(response.data);
        updateData(response.data);
      });
  


  }, []);

  return (
    <section >
      <h2>Joke List</h2>
      <Link  to={"/"}>
        Home
      </Link>
    
       <SearchForm search={search} jokes={jokes} /> 
      {filterData.map(char => {
        return <JokeCard key={char.id} joke={char} />;
      })}
    </section>
  );
}





