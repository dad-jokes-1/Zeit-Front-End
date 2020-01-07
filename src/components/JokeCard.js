import React from "react";
import styled from "styled-components";

let colorB = '#a6cc33' ;

export default function JokeCard(props) {
    const Card = styled.div`
      width: 80%;
      padding: 10px;
      margin:30px;
      border-style: double;
      border-width: 15px;
      border-color: yellow;
      background:${colorB} ;
    `;
  
    
  
    const CardInfo = styled.div`
       width: 40%;
      text-align: left;
      margin:30px;
     
     `;


  
  return (
    <div >
      <Card>
       
        <CardInfo>
          <div>Joke: {props.joke.first_line}</div>
          <div>- {props.joke.punchline}</div>   
          <div>id: {props.joke.user_id}</div>
          <div>rating: {props.joke.rating}</div>
          
        </CardInfo>
       
      </Card>
    </div>
  )
  
}

