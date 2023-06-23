import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import Estilos from "../create/create.module.css"
import { genresDB } from "../../redux/actions";


import { Link } from "react-router-dom";

function Create () {
    const genres = useSelector(state => state.genres)
    const dispatch = useDispatch()

    const [selected, setSelected] = useState("");

    const [input, setInput] = useState({
        name: "",
        image: "",
        description: "",
        released: "",
        rating: [],
        platforms:[],
        genres: []
    })
//----------------------------------------------------------------------
    const [error, setError] = useState({
        name: "",
        image: "",
        description: "",
        released: "",
        rating: [],
        platforms:[],
        genres: []
    })
//----------------------------------------------------------------------
    const validate = (input) => {
        if(!/^[A-Z]\w{5,12}$/.test(input.name)){
            setError({...error, name: ""})
            return
        }
        setError({...error, name: ""})
    }
//----------------------------------------------------------------------

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

    function handleGenres(event){
        if(event.target.value && input.genres.includes(event.target.value)){
            setInput({
                ...input,
                genres: [...input.genres, event.target.value]
            })
        }
    }

    

    useEffect(() => {
        dispatch(genresDB())
    }, [dispatch])

    function handleSubmit(){
        
    }




return (
    <div>
        <Link to={'/home'}><button className={Estilos.btnHome}>HOME</button></Link>
        <form className={Estilos.formulario}>

            <div className={Estilos.opciones}>
                <label>Name:</label>
                <input className={Estilos.Input} name="name" value={input.name} onChange={handleChange}/> <br />
                <span>{error.name}</span>
            </div> <br />
            
            <div className={Estilos.opciones}>
                <label>Image:</label>
                <input className={Estilos.Input} name="image" value={input.image} onChange={handleChange}/>
            </div> <br />
            
            <div className={Estilos.opciones}>
                <label>Description:</label>
                <input className={Estilos.Input} name="description" value={input.description} onChange={handleChange}/>
            </div> <br />
            
            <div className={Estilos.opciones}>
                <label>Platform:</label>
                <input className={Estilos.Input} name="platforms" value={input.platforms} onChange={handleChange}/>
            </div> <br />
            
            <div className={Estilos.opciones}>
                <label>Released:</label>
                <input className={Estilos.Input} name="released" value={input.released} onChange={handleChange}/>
            </div> <br />
            
            <div className={Estilos.opciones}>
                <label>Rating:</label>
                <input className={Estilos.Input} name="rating" value={input.rating} onChange={handleChange}/>
            </div> <br />

            <select value={selected} onChange={event => [handleGenres(event), setSelected(event)]}>
            {genres.map((genre)=>(
                <option key={genre.name}>{genre.name}</option>
            ))}
            <div>
                {input.genres.map((g)=>{
                    return(
                        <div key={g}>
                            <p>{g}</p>
                        </div>
                    )
                })}
            </div>
            </select>

        </form>
            <button className={Estilos.btn_create} type="submit" onClick={handleSubmit}>Create Game!</button>

    </div>
)
};

export default Create;