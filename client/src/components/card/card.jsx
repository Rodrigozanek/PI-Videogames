import Estilos from "../card/card.module.css"
import {Link} from "react-router-dom"

function Card({game}) {
	return (
        <div className={Estilos.cardContainer}>
            {/* <h3>rating: {game.rating}</h3> */}
            <h3>Name: {game.name}</h3>
             <Link to = {`/detail/${game.id}`}>
            <img src={game.image} alt="not found" className={Estilos.Imagenes}/>
             </Link>
            <h4>Genres: {game.genres}</h4>
         </div>
     );
}
export default Card;