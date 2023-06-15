import React from "react";
import Estilos from "../navBar/navBar.module.css";
import { Link } from "react-router-dom";

function NavBar () {
    return (
        <div className={Estilos.main}>
            <h1 className={Estilos.Titulo}>estamos en el NavBar</h1>
            <Link to={'/'}><button>Inicio</button></Link>
            <Link to={'create'}><button>Create GAME</button></Link>

        </div>
    )
};

export default NavBar;