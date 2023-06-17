import Estilos from "../card/card.module.css"
import {Link} from "react-router-dom"

function Card ({game}) {
    const {name, background_image, rating, released} = game
    console.log(game);
    return (
        <div className={Estilos.cardContainer}>
            <Link to = '/detail'>
           <h3>Name: {name}</h3>
            </Link>
           <img src={background_image} alt="not found" className={Estilos.Imagenes}/>
           <h4>Rating: {rating}</h4>
           <h4>Released: {released}</h4>
        </div>
    )
};

export default Card;