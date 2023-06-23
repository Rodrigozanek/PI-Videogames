import React, { useEffect } from "react";
import Estilos from "../detail/detail.module.css"
import {useDispatch, useSelector} from "react-redux"


import { Link, useParams } from "react-router-dom";
import { idGame } from "../../redux/actions";

function Detail () {
    const dispatch = useDispatch();
    const {id} = useParams();
    const game = useSelector(state=>state.game)

    useEffect(()=> {
       dispatch(idGame(id)) 
    },[dispatch, id])
    return (
        <div>
            <div>
                <Link to={-1}><button className={Estilos.boton_home}>HOME</button></Link>

            </div>

            <div className={Estilos.detalle_carta}>
            <h3>ID: {game.id}</h3>

            <h1>Name: {game.name}</h1>

            <h3>Image:</h3>
            {game.hasOwnProperty("background_image")?(<img src={game.background_image} alt="not found" className={Estilos.imagen_detail}/>) : (<img src={game.image} alt="not found" className={Estilos.imagen_detail}/>)}

            <h3>Released: {game.released}</h3>
            
            <h3>Rating: {game.rating}</h3>

            <h3>Platforms:</h3>
            <ul>
            {Array.isArray(game.platforms) ? (
            game.platforms.map(p => p.platform.name).join(", ")
            ) : (
            "Platforms data is not available"
            )}
            </ul>

            <h3>Genres:</h3>
            <ul>
            {Array.isArray(game.genres) ? (
            game.genres.map(genre => genre.name).join(", ")
            ) : (
            "Genres data is not available"
            )}
            </ul>
            </div> <br />
            <h4 className={Estilos.description}>Description: {game.description}</h4>
             
        </div>
    )
};

export default Detail;