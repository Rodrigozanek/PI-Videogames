import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import Estilos from "../create/create.module.css"
import { genresDB, createGame } from "../../redux/actions";
import NavBar from "../../components/navBar/navBar.jsx"




function Create () {
  const dispatch = useDispatch();
    const genres = useSelector((store) => store.genres);
    const genres1 = Array.isArray(genres) ? genres.slice(0, 5) : [];
    const genres2 = Array.isArray(genres) ? genres.slice(5, 10) : [];
    const genres3 = Array.isArray(genres) ? genres.slice(10, 15) : [];
    const genres4 = Array.isArray(genres) ? genres.slice(15, 20) : [];
    

    const [game, setGame] = useState({
        name: "",
        description: "",
        image: "",
        released: "",
        rating: 0,
        genres: [],
        platforms: [],
    });

    //---------------------------------------------------------
    const [errorN, setErrorN] = useState({
        name: "Requerido",
    });
    const [errorD, setErrorD] = useState({
        description: "Requerido"
    })
    const [errorI, setErrorI] = useState({
        image: "Requerido"
    })
    const [errorF, setErrorF] = useState({
        released: "Requerido"
    })
    const [errorR, setErrorR] = useState({
        rating: "Requerido"
    })

    const [platformsError, setPlatformsError] = useState("");

    //---------------------------------------------------------

    //----------------------------------------------------------
    const validateName = (value) => {
        if (/[-'/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g.test(value)) {
          setErrorN((prevError) => ({ ...prevError, name: "formato invalido" }));
        } else {
          setErrorN((prevError) => ({ ...prevError, name: "" }));
        }
      };
    
      const validateDescription = (value) => {
        if (/[-'/`~!#*$@_%+=.,^&(){}[\]|;:”<>?\\]/g.test(value)) {
          setErrorD((prevError) => ({ ...prevError, description: "formato invalido" }));
        } else {
          setErrorD((prevError) => ({ ...prevError, description: "" }));
        }
      };
    
      const validateReleased = (value) => {
        if (!value) {
          setErrorF((prevError) => ({ ...prevError, released: "Llenar campo" }));
        } else {
          setErrorF((prevError) => ({ ...prevError, released: "" }));
        }
      };

      const validateImage = (value) => {
        if (!value) {
          setErrorI((prevError) => ({ ...prevError, image: "Llenar campo" }));
        } else {
          setErrorI((prevError) => ({ ...prevError, image: "" }));
        }
      };
    
      const validateRating = (value) => {
        if (isNaN(value) || value < 0 || value > 5) {
          setErrorR((prevError) => ({
            ...prevError,
            rating: "El campo debe ser un número entre 0 y 5",
          }));
        } else {
          setErrorR((prevError) => ({ ...prevError, rating: "" }));
        }
      };

      const validatePlatforms = () => {
        if (game.platforms.length === 0) {
          setPlatformsError("Selecciona al menos una plataforma.");
        } else {
          setPlatformsError("");
        }
      };
    //------------------------------------------------------------

    useEffect(() => {
        dispatch(genresDB());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps



    const randomPlatforms = ["PC", "iOS", "Android", "macOS",  "PlayStation 4", "PlayStation 5", "Xbox", "PS Vita"]



    const ChangeInput = (e) => {
        setGame({
            ...game,
            [e.target.name]: e.target.value,
        });

    //---------------------------------------------------
    if (e.target.name === "name") {
        validateName(e.target.value);
      } else if (e.target.name === "description") {
        validateDescription(e.target.value);
      } else if (e.target.name === "image") {
        validateImage(e.target.value);
      } else if (e.target.name === "released") {
        validateReleased(e.target.value);
      } else if (e.target.name === "rating") {
        validateRating(e.target.value);
      } else if (e.target.name === "genres" || e.target.name === "platforms") {
        const arr = game[e.target.name];
        setGame({
          ...game,
          [e.target.name]: arr.concat(e.target.value),
        });
        if (e.target.name === "platforms") {
          validatePlatforms();
        }
      }
    //---------------------------------------------------

    //     if (e.target.name === "genres" || e.target.name === "platforms") {
    //     const arr = game[e.target.name];
    //     setGame({
    //         ...game,
    //         [e.target.name]: arr.concat(e.target.value),
    //     });
    // } else {
    //     setGame({
    //         ...game,
    //         [e.target.name]: e.target.value,
    //     });
    // }
    };

    

    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = {
        name: game.name,
        description: game.description,
        image: game.image,
        released: game.released,
        rating: game.rating,
        genres: game.genres,
        platforms: game.platforms,
        };

        // Validaciones
        // if (!obj.name) {
        //     alert("El campo nombre no puede estar vacio")
        //     return
        // }
        // if (!obj.description) {
        //     alert("El campo nombre no puede estar vacio")
        //     return
        // }if (!obj.released) {
        //     alert("La fecha no puede estar vacio")
        //     return
        // }if (obj.rating > 5 || obj.rating < 0) {
        //     alert("El campo rating debe ser un numero entre 0 a 5")
        //     return
        // }if (!obj.image) {
        //     alert("El campo image URL no puede estar vacio")
        //     return
        // }

        dispatch(createGame(obj));
        e.target.reset();
        alert("Videogame created successfully!");
        setGame({
            name: "",
            description: "",
            image: "",
            released: "",
            rating: 0,
            genres: [],
            platforms: [],
        });
    };

return (
<div>
<NavBar/>

    <div className={Estilos.divTitulo}>
    <h1 className={Estilos.Titulo}>!CREATE GAME¡</h1>
    </div>

    <form className={Estilos.formulario}
        noValidate
        onChange={(e) => ChangeInput(e)}
        onSubmit={(e) => handleSubmit(e)}>
        <div className={Estilos.div_general}>
        <div>
            <div >
                <div>
                    <h4 className={Estilos.h4_options_title}>NAME:</h4>
                    <input
                    className={Estilos.Input}
                    type="text"
                    name="name"
                    value={game.name}>
                    </input>
                    <span>{errorN.name}</span>
                </div> <br />

                <div>
                    <h4 className={Estilos.h4_options_title}>DESCRIPTION:</h4>
                    <input
                    className={Estilos.Input}
                    type="text"
                    name="description"
                    value={game.description}>
                    </input>
                    <span>{errorD.description}</span>
                </div> <br />

                <div>
                    <h4 className={Estilos.h4_options_title}>RELEASED:</h4>
                    <input
                    className={Estilos.Input}
                    type="date"
                    name="released"
                    value={game.released}>
                    </input>
                    <span>{errorF.released}</span>
                </div> <br />

                <div>
                    <h4 className={Estilos.h4_options_title}>RATING:</h4>
                    <input
                    className={Estilos.Input}
                    type="number"
                    name="rating"
                    value={game.rating}>
                    </input>
                    <span>{errorR.rating}</span>
                </div>
            </div> <br />

            <div >
                <h4 className={Estilos.h4_options_title}>Image URL:</h4>
                <input
                className={Estilos.Input}
                type="text"
                name="image"
                value={game.image}>
                </input>
                <span>{errorI.image}</span>
            </div>
        </div>

        
        <div >
            <div>


                <h4 className={Estilos.h4_options_title}>Options GENRES</h4>
                <div className={Estilos.opciones}>
                    <div>
                        {genres1.map((gen) => (
                        <div key={gen.name}>
                            <h4 name={gen}>{gen.name}</h4>
                            <input
                            type="checkbox"
                            name="genres"
                            value={gen.name}
                            ></input>
                        </div>
                        ))}
                    </div>
                    <div>
                        {genres2.map((gen) => (
                        <div key={gen.name}>
                            <h4 name={gen}>{gen.name}</h4>
                            <input
                            type="checkbox"
                            name="genres"
                            value={gen.name}
                            ></input>
                        </div>
                        ))}
                    </div>
                    <div>
                        {genres3.map((gen) => (
                        <div key={gen.name}>
                            <h4 name={gen}>{gen.name}</h4>
                            <input
                            type="checkbox"
                            name="genres"
                            value={gen.name}
                            ></input>
                        </div>
                        ))}
                    </div>
                    <div>
                        {genres4.map((gen) => (
                        <div key={gen.name}>
                            <h4 name={gen}>{gen.name}</h4>
                            <input
                            type="checkbox"
                            name="genres"
                            value={gen.name}
                            ></input>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            <div > <br />

                <h4 className={Estilos.h4_options_title}>Options PLATFORMS</h4>
                <div className={Estilos.opciones}>
                    {randomPlatforms.map((P) => (
                    <div key={P}>
                        <h4 name={P}>{P}</h4>
                        <input
                        type="checkbox"
                        name="platforms"
                        value={P}>
                        </input>
                        <span>{platformsError.platforms}</span>
                    </div>
                    ))}
                </div>
            </div>
            
        </div>

        <div className={Estilos.div_botonCreate}>
            {!platformsError || !errorN || !errorD || !errorI || !errorF || !errorR ? null : <button className={Estilos.btn_create} type="submit">GO!</button>}
            
        </div>
    </div>
</form>
</div>
);


};

export default Create;
