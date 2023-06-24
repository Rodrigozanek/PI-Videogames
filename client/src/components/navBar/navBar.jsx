import React from "react";
import Estilos from "../navBar/navBar.module.css";
import { Link } from "react-router-dom";

function NavBar ({handleChange, handleSubmit}) {
    return (
        <div className={Estilos.main}>
            <Link to={'/'}><button className={Estilos.botInicio}>Inicio</button></Link>
            <Link to={'/about'}><button className={Estilos.about}>ABOUT</button></Link>

            <form className={Estilos.formulario_nav} onChange={handleChange}>
            <input placeholder="Busqueda" type="search" className={Estilos.BarraBusqueda}/>
            <button type="submit" onClick={handleSubmit} className={Estilos.botSearch}>Buscar</button>
            </form>
            {console.log(handleSubmit)};
            
            <Link to={'/create'}><button className={Estilos.botCreate}>Create</button></Link>
        </div>
    )
};

export default NavBar;