import React from "react";
import Estilos from "../navBar/navBar.module.css";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <div className={Estilos.main}>
            <Link to={'/'}><button className={Estilos.botInicio}>Inicio</button></Link>
            <Link to={'/about'}><h1 className={Estilos.about}>ABOUT</h1></Link>
            <input placeholder="Busqueda" className={Estilos.BarraBusqueda}/>
            <button className={Estilos.botBack}>Buscar</button>
            <Link to={'/create'}><button className={Estilos.botCreate}>Create GAME</button></Link>
            <Link to={-1}><button className={Estilos.botBack}>Back</button></Link>
        </div>
    )
};

export default NavBar;