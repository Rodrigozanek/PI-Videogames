import React from "react";
import Estilos from "../navBar/navBar.module.css";
import { Link } from "react-router-dom";

function NavBar ({handleChange, handleSubmit}) {
    return (
        <div className={Estilos.main}>
            <Link to={'/'}><button className={Estilos.botInicio}>Inicio</button></Link>
            <Link to={'/about'}><h1 className={Estilos.about}>ABOUT</h1></Link>

            <form onChange={handleChange}>
            <input placeholder="Busqueda" type="search" className={Estilos.BarraBusqueda}/>
            <button type="submit" onClick={handleSubmit} className={Estilos.botBack}>Buscar</button>
            </form>
            
            <Link to={'/create'}><button className={Estilos.botCreate}>Create GAME</button></Link>
            {/* <Link to={'/home'}><button className={Estilos.botBack}>Back</button></Link> */}
        </div>
    )
};

export default NavBar;