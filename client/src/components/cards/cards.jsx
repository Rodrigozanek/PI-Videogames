import React from "react";
import Card from "../card/card";
import Estilos from "../cards/cards.module.css";

export default function Cards ({allGames}) {
  const listGames = allGames;
  return (  
            <div className={Estilos.cardList}>
             {listGames?.map(game=>
               <Card game = {game} />)}
            </div> 
  //primero verificamos si hay juegos, despues hacemos un map, por cada juego creamos una card, esa card va a mandar el juego por props al componente Card
            );
};


