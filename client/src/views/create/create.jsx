import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Estilos from "../create/create.module.css";
import { genresDB, createGame } from "../../redux/actions";
import { Link } from "react-router-dom";

function Create() {
  const genres = useSelector((state) => state.genres);
  const dispatch = useDispatch();

  const [selectedGenres, setSelectedGenres] = useState([]);

  const [input, setInput] = useState({
    name: "",
    image: "",
    description: "",
    released: "",
    rating: "",
    platforms: "",
  });

  const [error, setError] = useState({
    name: "",
    image: "",
    description: "",
    released: "",
    rating: "",
    platforms: "",
  });

  const validate = (input) => {
    const errors = {};

    if (!/^[A-Z]\w{5,12}$/.test(input.name)) {
      errors.name = "Invalid name";
    }

    if (!input.image) {
      errors.image = "Image is required";
    }

    if (!input.description) {
      errors.description = "Description is required";
    }

    if (!input.released) {
      errors.released = "Release date is required";
    }

    if (!input.rating) {
      errors.rating = "Rating is required";
    }

    if (!input.platforms) {
      errors.platforms = "Platform is required";
    }

    setError(errors);
    return Object.keys(errors).length === 0;
  };

  function handleChange(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });

    validate({
      ...input,
      [e.target.name]: e.target.value,
    });
  }

  function handleGenres(event) {
    const selectedGenre = event.target.value;

    if (selectedGenre && !selectedGenres.includes(selectedGenre)) {
      setSelectedGenres([...selectedGenres, selectedGenre]);
    }
  }

  useEffect(() => {
    dispatch(genresDB());
  }, [dispatch]);

  function handleSubmit(e) {
    e.preventDefault();

    const isValid = validate(input);

    if (isValid) {
      const gameData = {
        ...input,
        genres: selectedGenres,
      };

    //   dispatch(createGame(gameData));
      // Aquí puedes hacer la solicitud HTTP al backend para guardar el juego
      // utilizando la función createGame del action creator.
      fetch("http://localhost:3001/videogames", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(gameData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Aquí puedes realizar acciones adicionales después de guardar el juego, si es necesario
          console.log("Game saved successfully:", data);
        })
        .catch((error) => {
          // Aquí puedes manejar los errores en caso de que la solicitud falle
          console.error("Error saving game:", error);
        });
    }
  }

  return (
    <div>
      <Link to={"/home"}>
        <button className={Estilos.btnHome}>HOME</button>
      </Link>
      <form className={Estilos.formulario} onSubmit={handleSubmit}>
        <div className={Estilos.opciones}>
          <label>Name:</label>
          <input
            className={Estilos.Input}
            name="name"
            value={input.name}
            onChange={handleChange}
          />
          <br />
          <span>{error.name}</span>
        </div>
        <br />

        <div className={Estilos.opciones}>
          <label>Image:</label>
          <input
            className={Estilos.Input}
            name="image"
            value={input.image}
            onChange={handleChange}
          />
          <span>{error.image}</span>
        </div>
        <br />

        <div className={Estilos.opciones}>
          <label>Description:</label>
          <input
            className={Estilos.Input}
            name="description"
            value={input.description}
            onChange={handleChange}
          />
          <span>{error.description}</span>
        </div>
        <br />

        <div className={Estilos.opciones}>
          <label>Platform:</label>
          <input
            className={Estilos.Input}
            name="platforms"
            value={input.platforms}
            onChange={handleChange}
          />
          <span>{error.platforms}</span>
        </div>
        <br />

        <div className={Estilos.opciones}>
          <label>Released:</label>
          <input
            className={Estilos.Input}
            name="released"
            value={input.released}
            onChange={handleChange}
          />
          <span>{error.released}</span>
        </div>
        <br />

        <div className={Estilos.opciones}>
          <label>Rating:</label>
          <input
            className={Estilos.Input}
            name="rating"
            value={input.rating}
            onChange={handleChange}
          />
          <span>{error.rating}</span>
        </div>
        <br />

        <select
          value={selectedGenres}
          onChange={handleGenres}
          multiple
        >
          {genres.map((genre) => (
            <option key={genre.name} value={genre.name}>
              {genre.name}
            </option>
          ))}
        </select>

        <div>
          {selectedGenres.map((g) => {
            return (
              <div key={g}>
                <p>{g}</p>
              </div>
            );
          })}
        </div>

        <button className={Estilos.btn_create} type="submit">
          Create Game!
        </button>
      </form>
    </div>
  );
}

export default Create;






// import React, { useEffect, useState } from "react";
// import {useDispatch, useSelector} from "react-redux"
// import Estilos from "../create/create.module.css"
// import { genresDB } from "../../redux/actions";


// import { Link } from "react-router-dom";

// function Create () {
//     const genres = useSelector(state => state.genres)
//     const dispatch = useDispatch()

//     const [selected, setSelected] = useState("");

//     const [input, setInput] = useState({
//         name: "",
//         image: "",
//         description: "",
//         released: "",
//         rating: 0,
//         platforms:[],
//         genres: []
//     })
// //----------------------------------------------------------------------
//     const [error, setError] = useState({
//         name: "",
//         image: "",
//         description: "",
//         released: "",
//         rating: [],
//         platforms:[],
//         genres: []
//     })
// //----------------------------------------------------------------------
//     const validate = (input) => {
//         if(!/^[A-Z]\w{5,12}$/.test(input.name)){
//             setError({...error, name: ""})
//             return
//         }
//         setError({...error, name: ""})
//     }
// //----------------------------------------------------------------------

//     function handleChange(e){
        
//         setInput({
//             ...input,
//             [e.target.name]: e.target.value
//         })

//         validate({
//             ...input,
//             [e.target.name]: e.target.value
//         })


        
//     }

//     function handleGenres(event){
//         if(event.target.value && input.genres.includes(event.target.value)){
//             setInput({
//                 ...input,
//                 genres: [...input.genres, event.target.value]
//             })
//         }
//     }

    

//     useEffect(() => {
//         dispatch(genresDB())
//     }, [dispatch])

//     function handleSubmit(){
        
//     }




// return (
//     <div>
//         <Link to={'/home'}><button className={Estilos.btnHome}>HOME</button></Link>
//         <form className={Estilos.formulario}>

//             <div className={Estilos.opciones}>
//                 <label>Name:</label>
//                 <input className={Estilos.Input} name="name" value={input.name} onChange={handleChange}/> <br />
//                 <span>{error.name}</span>
//             </div> <br />
            
//             <div className={Estilos.opciones}>
//                 <label>Image:</label>
//                 <input className={Estilos.Input} name="image" value={input.image} onChange={handleChange}/>
//             </div> <br />
            
//             <div className={Estilos.opciones}>
//                 <label>Description:</label>
//                 <input className={Estilos.Input} name="description" value={input.description} onChange={handleChange}/>
//             </div> <br />
            
//             <div className={Estilos.opciones}>
//                 <label>Platform:</label>
//                 <input className={Estilos.Input} name="platforms" value={input.platforms} onChange={handleChange}/>
//             </div> <br />
            
//             <div className={Estilos.opciones}>
//                 <label>Released:</label>
//                 <input className={Estilos.Input} name="released" value={input.released} onChange={handleChange}/>
//             </div> <br />
            
//             <div className={Estilos.opciones}>
//                 <label>Rating:</label>
//                 <input className={Estilos.Input} name="rating" value={input.rating} onChange={handleChange}/>
//             </div> <br />

//             <select value={selected} onChange={event => [handleGenres(event), setSelected(event)]}>
//             {genres.map((genre)=>(
//                 <option key={genre.name}>{genre.name}</option>
//             ))}
//             <div>
//                 {input.genres.map((g)=>{
//                     return(
//                         <div key={g}>
//                             <p>{g}</p>
//                         </div>
//                     )
//                 })}
//             </div>
//             </select>

//         </form>
//             <button className={Estilos.btn_create} type="submit" onClick={handleSubmit}>Create Game!</button>

//     </div>
// )
// };

// export default Create;