import {useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGames, resetGames } from "../../redux/actions";
import { searchGame } from "../../redux/actions/index";


import {Filtros} from "../../components/filtros/filtros"
import { Paginado } from "../../components/paginado/paginado";
import Cards from "../../components/cards/cards.jsx";
import Estilos from "../home/home.module.css"
import NavBar from "../../components/navBar/navBar";

function Home () {
    const dispatch = useDispatch();
    const allGames = useSelector((state)=>state.allGames)//home suscripto al estado allGames 
    const [searcheString, setSearchString] = useState("");
//---------------------------------------------------------------------------------------------
    const filteredVideogames = useSelector((state) => state.filteredVideogames);
    const filterBy = useSelector((state) => state.filterBy);
    const orderBy = useSelector((state) => state.orderBy);
//---------------------------------------------------------------------------------------------

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


    //---------------------------filtros y paginacion-------------------------------
    useEffect(() => {
        dispatch(resetGames());
        dispatch(getGames())
    }, []);// eslint-disable-line react-hooks/exhaustive-deps

      // Filtrado y Ordenado
  let allVideogames;
  filterBy === "All" && orderBy === "Select"
    ? (allVideogames = allGames)
    : (allVideogames = filteredVideogames);


    // Paginacion
    function pagina(e, num) {
        e.preventDefault();
        setPage(num);
    }

    const [page, setPage] = useState(1);//representa la página actual

    const [videogamesPerPage] = useState(15);//representa la cantidad de elementos de videojuegos que se mostrarán por página y se inicializa en 15

    let lastCardPerPage = page * videogamesPerPage; //Se calcula el índice del último videojuego que se mostrará en la página actual multiplicando page por videogamesPerPage

    let firtsCardPerPage = lastCardPerPage - videogamesPerPage; //  Se calcula el índice del primer videojuego que se mostrará en la página actual restando

    let pageGames = allVideogames.slice(firtsCardPerPage, lastCardPerPage);

    //-------------------------------------------
    useEffect(()=>{
        setPage(1)
    }, [allGames])
    //por cada busqueda volvemos a la pagina 1 y eliminamos un problema

    return (
        <div>
            <NavBar handleChange={(e)=>handleChange(e)} handleSubmit={(e)=>handleSubmit(e)}/>

            <div className={Estilos.filtros}>
            <Filtros pagina={pagina}/> 
            </div><br />
            
            <Paginado videogamesPerPage={videogamesPerPage} totalVideogames={allVideogames.length} pagina={pagina}/>

            <Cards allGames={pageGames} /> <br />

        </div>
    )
};

export default Home;