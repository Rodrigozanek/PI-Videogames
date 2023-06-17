import React from "react";
import Estilos from "../about/about.module.css";
import {Link} from "react-router-dom"

function About () {
    return (
    <div>
        <div className={Estilos.divGeneral}>
        <Link to={"https://www.soyhenry.com/"}><h1 className={Estilos.Titular}>HENRY</h1></Link>
        <h1>¡VIENVENIDOS A MI PI!</h1> <br />

        <h2>CREADOR:  Rodrigo Maximiliano Zanek</h2> <br />

        <h2>Arme esta pagina web con el fin de poner en practica todo el conocimiento aprendido en este tiempo.</h2>
        <h2>Mi primera pagina WEB armada desde cero!! </h2>
        </div>
    </div>
    )
};

export default About;