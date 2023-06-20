import React from "react";
import Estilos from "../about/about.module.css";
import {Link} from "react-router-dom"

function About () {
    return (
    <div>
        <div className={Estilos.divGeneral}>
        <Link to={"https://www.soyhenry.com/"}><h1 className={Estilos.Titular}>HENRY</h1></Link>
        <h1>¡Bienvenidos a mi sitio web personalizado!</h1> <br />

        <h2>He creado esta página con el propósito de poner en práctica todos los conocimientos adquiridos hasta ahora. ¡Es mi primera creación web desde cero! Me esforcé para que tenga un aspecto más profesional y atractivo.</h2>
        <h2>Espero que disfruten explorando este sitio y que les sea útil. ¡Gracias por visitar mi página web! </h2>
        </div>
        <Link to={-1}><button className={Estilos.boton_Back}>Back</button></Link>
    </div>
    )
};

export default About;