import {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../../redux/actions";


import Cards from "../../components/cards/cards.jsx";
import Estilos from "../home/home.module.css"

function Home () {
    const dispatch = useDispatch();
    const allGames = useSelector((state)=>state.allGames)//home suscripto al estado allGames 
    useEffect(()=>{
    dispatch(getGames())//en el momento que se cargue la pagina se cargan las cards
    },[dispatch])
    console.log(allGames);


    return (
        <div className={Estilos.div}>
            <Cards allGames={allGames}/>
        </div>
    )
};

export default Home;