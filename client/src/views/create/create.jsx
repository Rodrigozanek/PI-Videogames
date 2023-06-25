// // // import React, { useEffect, useState } from "react";
// // // import { useDispatch, useSelector } from "react-redux";
// // // import Estilos from "../create/create.module.css";
// // // import { genresDB, createGame } from "../../redux/actions";
// // // import NavBar from "../../components/navBar/navBar.jsx";

// // // function Create() {
// // //   const genres = useSelector((state) => state.genres);
// // //   const dispatch = useDispatch();

// // //   const [selectedGenres, setSelectedGenres] = useState([]);

// // //   const [input, setInput] = useState({
// // //     name: "",
// // //     image: "",
// // //     description: "",
// // //     released: "",
// // //     rating: "",
// // //     platforms: "",
// // //   });

// // //   const [error, setError] = useState({
// // //     name: "",
// // //     image: "",
// // //     description: "",
// // //     released: "",
// // //     rating: "",
// // //     platforms: "",
// // //   });

// // //   const validate = (input) => {
// // //     const errors = {};

// // //     if (!/^[A-Z]\w{5,12}$/.test(input.name)) {
// // //       errors.name = "Invalid name";
// // //     }

// // //     if (!input.image) {
// // //       errors.image = "Image is required";
// // //     }

// // //     if (!input.description) {
// // //       errors.description = "Description is required";
// // //     }

// // //     if (!input.released) {
// // //       errors.released = "Release date is required";
// // //     }

// // //     if (!input.rating) {
// // //       errors.rating = "Rating is required";
// // //     }

// // //     if (!input.platforms) {
// // //       errors.platforms = "Platform is required";
// // //     }

// // //     setError(errors);
// // //     return Object.keys(errors).length === 0;
// // //   };

// // //   function handleChange(e) {
// // //     setInput({
// // //       ...input,
// // //       [e.target.name]: e.target.value,
// // //     });

// // //     validate({
// // //       ...input,
// // //       [e.target.name]: e.target.value,
// // //     });
// // //   }

// // //   function handleGenres(event) {
// // //     const selectedGenre = event.target.value;

// // //     if (selectedGenre && !selectedGenres.includes(selectedGenre)) {
// // //       setSelectedGenres([...selectedGenres, selectedGenre]);
// // //     }
// // //   }

// // //   useEffect(() => {
// // //     dispatch(genresDB());
// // //   }, [dispatch]);



// // //   function handleSubmit(e) {
// // //     e.preventDefault();

// // //     const isValid = validate(input);

// // //     if (isValid) {
// // //       const gameData = {
// // //         ...input,
// // //         genres: selectedGenres,
// // //       };

// // //     //   dispatch(createGame(gameData));
// // //       // Aquí puedes hacer la solicitud HTTP al backend para guardar el juego
// // //       // utilizando la función createGame del action creator.
// // //       fetch("http://localhost:3001/videogames", {
// // //         method: "POST",
// // //         headers: {
// // //           "Content-Type": "application/json",
// // //         },
// // //         body: JSON.stringify(gameData),
// // //       })
// // //         .then((response) => response.json())
// // //         .then((data) => {
// // //           // Aquí puedes realizar acciones adicionales después de guardar el juego, si es necesario
// // //           console.log("Game saved successfully:", data);
// // //         })
// // //         .catch((error) => {
// // //           // Aquí puedes manejar los errores en caso de que la solicitud falle
// // //           console.error("Error saving game:", error);
// // //         });
// // //     }
// // //   }

// // //   return (
// // //     <div>
// // //       <NavBar/>
// // //       <form className={Estilos.formulario} onSubmit={handleSubmit}>
// // //         <div className={Estilos.opciones}>
// // //           <label>Name:</label>
// // //           <input
// // //             className={Estilos.Input}
// // //             name="name"
// // //             value={input.name}
// // //             onChange={handleChange}
// // //           />
// // //           <br />
// // //           <span>{error.name}</span>
// // //         </div>
// // //         <br />

// // //         <div className={Estilos.opciones}>
// // //           <label>Image:</label>
// // //           <input
// // //             className={Estilos.Input}
// // //             name="image"
// // //             value={input.image}
// // //             onChange={handleChange}
// // //           />
// // //           <span>{error.image}</span>
// // //         </div>
// // //         <br />

// // //         <div className={Estilos.opciones}>
// // //           <label>Description:</label>
// // //           <input
// // //             className={Estilos.Input}
// // //             name="description"
// // //             value={input.description}
// // //             onChange={handleChange}
// // //           />
// // //           <span>{error.description}</span>
// // //         </div>
// // //         <br />

// // //         <div className={Estilos.opciones}>
// // //           <label>Platform:</label>
// // //           <input
// // //             className={Estilos.Input}
// // //             name="platforms"
// // //             value={input.platforms}
// // //             onChange={handleChange}
// // //           />
// // //           <span>{error.platforms}</span>
// // //         </div>
// // //         <br />

// // //         <div className={Estilos.opciones}>
// // //           <label>Released:</label>
// // //           <input
// // //             className={Estilos.Input}
// // //             name="released"
// // //             value={input.released}
// // //             onChange={handleChange}
// // //           />
// // //           <span>{error.released}</span>
// // //         </div>
// // //         <br />

// // //         <div className={Estilos.opciones}>
// // //           <label>Rating:</label>
// // //           <input
// // //             className={Estilos.Input}
// // //             name="rating"
// // //             value={input.rating}
// // //             onChange={handleChange}
// // //           />
// // //           <span>{error.rating}</span>
// // //         </div>
// // //         <br />

// // //         <select
// // //           value={selectedGenres}
// // //           onChange={handleGenres}
// // //           multiple
// // //         >
// // //           {genres.map((genre) => (
// // //             <option key={genre.name} value={genre.name}>
// // //               {genre.name}
// // //             </option>
// // //           ))}
// // //         </select>

// // //         <div>
// // //           {selectedGenres.map((g) => {
// // //             return (
// // //               <div key={g}>
// // //                 <p>{g}</p>
// // //               </div>
// // //             );
// // //           })}
// // //         </div>

// // //         <button className={Estilos.btn_create} type="submit">
// // //           Create Game!
// // //         </button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default Create;
























import React, { useEffect, useState } from "react";
import {useDispatch, useSelector} from "react-redux"
import Estilos from "../create/create.module.css"
import { genresDB, createGame } from "../../redux/actions";
import NavBar from "../../components/navBar/navBar.jsx"




function Create () {
  const dispatch = useDispatch();
    const genres = useSelector((store) => store.genres);
    const genres1 = Array.isArray(genres) ? genres.slice(0, 10) : [];
    const genres2 = Array.isArray(genres) ? genres.slice(10, 20) : [];
    

    const [game, setGame] = useState({
        name: "",
        description: "",
        image: "",
        released: "",
        rating: 0,
        genres: [],
        platforms: [],
    });

    useEffect(() => {
        dispatch(genresDB());
    }, []); // eslint-disable-line react-hooks/exhaustive-deps

    const randomPlatforms = ["PC", "iOS", "Android", "macOS",  "PlayStation 4", "PlayStation 5", "Xbox", "PS Vita"]

    const ChangeInput = (e) => {
        if (e.target.name === "genres" || e.target.name === "platforms") {
        const arr = game[e.target.name];
        setGame({
            ...game,
            [e.target.name]: arr.concat(e.target.value),
        });
    } else {
        setGame({
            ...game,
            [e.target.name]: e.target.value,
        });
    }
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
        if (!obj.name) {
            alert("El campo nombre no puede estar vacio")
            return
        }
        if (!obj.description) {
            alert("El campo nombre no puede estar descripcion")
            return
        }if (!obj.released) {
            alert("La fecha no puede estar vacio")
            return
        }if (obj.rating > 5 || obj.rating < 0) {
            alert("El campo rating debe ser un numero entre 0 a 5")
            return
        }


        dispatch(createGame(obj));
        e.target.reset();
        alert("Videogame created successfully!");
        //  dispatch(getVideogames())

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
    <div >
      <NavBar/>
        <h1>Crear un videoGame</h1>
        <form className={Estilos.formulario}
            noValidate
            onChange={(e) => ChangeInput(e)}
            onSubmit={(e) => handleSubmit(e)}
        >
            <div>
            <div>
                <div >
                    <div>
                        <label>-Name-</label>
                        <input
                        
                        type="text"
                        name="name"
                        value={game.name}
                        ></input>
                    </div>
                    <div>
                        <label>-Description-</label>
                        <input
                        
                        type="text"
                        name="description"
                        value={game.description}
                        ></input>
                    </div>
                    <div>
                        <label>-Released-</label>
                        <input
                        
                        type="date"
                        name="released"
                        value={game.released}
                        ></input>
                    </div>
                    <div>
                        <label>-Rating-</label>
                        <input
                        
                        type="number"
                        name="rating"
                        value={game.rating}
                        ></input>
                    </div>
                </div>
                <div >
                    <label>-Image URL-</label>
                    <input
                    
                    type="text"
                    name="image"
                    value={game.image}
                    ></input>
                </div>
            </div>
                <div >
                    <div >
                        <label>-Genres-</label>
                        <div >
                            <div>
                                {genres1.map((gen) => (
                                <div key={gen.name}>
                                    <input
                                    type="checkbox"
                                    name="genres"
                                    value={gen.name}
                                    ></input>
                                    <label name={gen}>{gen.name}</label>
                                </div>
                                ))}
                            </div>
                            <div>
                                {genres2.map((gen) => (
                                <div key={gen.name}>
                                    <input
                                    type="checkbox"
                                    name="genres"
                                    value={gen.name}
                                    ></input>
                                    <label name={gen}>{gen.name}</label>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div >
                        <label>-Platforms-</label>
                        <div >
                            {randomPlatforms.map((P) => (
                            <div key={P}>
                                <input
                                type="checkbox"
                                name="platforms"
                                value={P}
                                ></input>
                                <label name={P}>{P}</label>
                            </div>
                            ))}
                        </div>
                    </div>
                    
                </div>
                <button  type="submit">
                    Create!
                </button>
            </div>
        </form>
    </div>
);


};

export default Create;
