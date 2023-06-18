import Estilos from "../card/card.module.css"
import {Link} from "react-router-dom"

function Card ({game}) {
    const {id, name,image, genres} = game
    // const genresAPI = genres.map((genre)=>genre.name).join(", ")
    console.log(game);
    return (
        <div className={Estilos.cardContainer}>
            <h4>ID: {id}</h4>
            <Link to = '/detail'>
           <h3>Name: {name}</h3>
            </Link>
           <img src={image} alt="not found" className={Estilos.Imagenes}/>
           <h4>Genres: {genres}</h4>
           {/* <h4>Released: {released}</h4> */}
        </div>
    )
};

export default Card;