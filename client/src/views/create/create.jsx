import React, { useState } from "react";
import Estilos from "../create/create.module.css"

import { Link } from "react-router-dom";

function Create () {
    const [input, setInput] = useState({
        name: "",
        image: "",
        description: "",
        released: "",
        rating: [],
        platforms:[]
    })

    const [error, setError] = useState({
        name: "",
        image: "",
        description: "",
        released: "",
        rating: [],
        platforms:[]
    })

    const validate = (input) => {
        if(/^\s+$/.test(input.name)){
            console.log('No puede ser null');
            return
        }
        console.log('Puedes seguir');
    }

    function handleChange(e){
        
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })

        validate({
            ...input,
            [e.target.name]: e.target.value
        })
        
    }





    return (
        <div>
            <Link to={'/home'}><button className={Estilos.btnHome}>HOME</button></Link>
            <form className={Estilos.formulario}>

                <div className={Estilos.opciones}>
                    <label>Name:</label>
                    <input className={Estilos.Input} name="name" value={input.value} onChange={handleChange}/>
                </div> <br />
                
                <div className={Estilos.opciones}>
                    <label>Image:</label>
                    <input className={Estilos.Input} name="image" value={input.value} onChange={handleChange}/>
                </div> <br />
                
                <div className={Estilos.opciones}>
                    <label>Description:</label>
                    <input className={Estilos.Input} name="description" value={input.value} onChange={handleChange}/>
                </div> <br />
                
                <div className={Estilos.opciones}>
                    <label>Platform:</label>
                    <input className={Estilos.Input} name="platforms" value={input.value} onChange={handleChange}/>
                </div> <br />
                
                <div className={Estilos.opciones}>
                    <label>Released:</label>
                    <input className={Estilos.Input} name="released" value={input.value} onChange={handleChange}/>
                </div> <br />
                
                <div className={Estilos.opciones}>
                    <label>Rating:</label>
                    <input className={Estilos.Input} name="rating" value={input.value} onChange={handleChange}/>
                </div> <br />

            </form>
                
                <button className={Estilos.btn_create}>Create Game!</button>
        </div>
    )
};

export default Create;