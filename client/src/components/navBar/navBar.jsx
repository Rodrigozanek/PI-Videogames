import React from "react";
import Estilos from "../navBar/navBar.module.css";

function NavBar () {
    return (
        <div>
            <h1 className={Estilos.Titulo}>estamos en el NavBar</h1>
            <button>Inicio</button>
        </div>
    )
};

export default NavBar;