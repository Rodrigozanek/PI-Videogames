import React from "react";
import Estilos from "../landingPage/landingPage.module.css"
import { Link } from "react-router-dom";

function LandingPage () {
    return (
        <div className={Estilos.divGeneral}>
            <Link to={'home'}>
                <button className={Estilos.boton_home}>HOME</button>
                </Link>
        </div>
    )
};

export default LandingPage;