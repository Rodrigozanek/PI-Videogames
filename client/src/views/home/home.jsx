import React from "react";
import Cards from "../../components/cards/cards";
import Estilos from "../home/home.module.css"

function Home () {
    return (
        <div className={Estilos.div}>
            <h1 className={Estilos.Titulo}>estamos en el home</h1>
            <Cards/>
        </div>
    )
};

export default Home;