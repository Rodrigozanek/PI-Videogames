import React from "react";
import Estilos from "../create/create.module.css"

import { Link } from "react-router-dom";

function Create () {
    return (
        <div>
            <Link to={'/home'}><button className={Estilos.btnHome}>HOME</button></Link>
            <h1 className={Estilos.Titulo}>estamos en el Create</h1>
        </div>
    )
};

export default Create;