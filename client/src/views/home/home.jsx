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


    return (
        <div className={Estilos.div}>
            <NavBar handleChange={handleChange} handleSubmit={handleSubmit}/>
            <div className={Estilos.genero_conteiner}>
                <h4 className={Estilos.h4_filter}>Genero:</h4>
                <select>
                    <option></option>
                </select> <br />

                <h4 className={Estilos.h4_filter}>Ordenamiento:</h4> 
                <select>
                    <option></option>
                </select>
            </div>
            <Cards allGames={allGames}/>
        </div>
    )
};

export default Home;