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

            <h1>Name:</h1>
            <h3>{game.name}</h3>

            <h3>Image:</h3>
            {game.hasOwnProperty("background_image")?(<img src={game.background_image} alt="not found" className={Estilos.imagen_detail}/>) : (<img src={game.image} alt="not found" className={Estilos.imagen_detail}/>)}

            <h3>Released: {game.released}</h3>
            
            <h3>Rating: {game.rating}</h3>

            <h3>Platforms:</h3>
            <h5>
            {Array.isArray(game.platforms) ? (
            game.platforms.map(p => p.platform.name).join(", ")
            ) : (
              (game.platforms)
            )}
            </h5>

            <h3>Genres:</h3>
            <h5>
            {Array.isArray(game.genres) ? (
            game.genres.map(genre => genre.name).join(", ")
            ) : (
            "Genres data is not available"
            )}
            </h5>
            </div> <br />

            <div className={Estilos.description}>
            <h2 className={Estilos.description_title}>Description: </h2>
            <p>{game.description}</p>
            </div>
             
        </div>
    )
};

export default Detail;