import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames } from "../../redux/actions";


import Cards from "../../components/cards/cards.jsx";
import Estilos from "../home/home.module.css"
import NavBar from "../../components/navBar/navBar";
import { searchGame } from "../../redux/actions/index";

function Home () {
    const dispatch = useDispatch();
    const allGames = useSelector((state)=>state.allGames)//home suscripto al estado allGames 
    const [searcheString, setSearchString] = useState("");

    function handleChange(e){
        e.preventDefault();
        setSearchString(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(searchGame(searcheString))
    }

    useEffect(()=>{
    dispatch(getGames())//en el momento que se cargue la pagina se cargan las cards
    },[dispatch])
    // console.log(allGames);


    return (
        <div className={Estilos.div}>
            <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
            <Cards allGames={allGames}/>
        </div>
    )
};

export default Home;