require("dotenv").config();
const { Router } = require("express");
const axios = require("axios");
const { YOUR_API_KEY } = process.env;

const { Videogame, Genre } = require("../db.js");

const router = Router();

router.get("/", async (req, res) => { 

  const { name } = req.query;

  try {
    if (name) {
      name = name.toLowerCase(); // Convertir la palabra a minúsculas

      let gamesDB = await Videogame.findOne({
        where: { name: name },//Se busca un videojuego cuyo nombre coincida con el valor de name
        include: [Genre],//se incluye también el modelo Genre para obtener los géneros asociados al videojuego
      });

      if (gamesDB) {
//Se verifica si se encontró algún juego en la base de datos, se crea un objeto gamesDBFull
        let X = gamesDB;
        gamesDBFull = {
          id: X.id,
          name: X.name,
          image: X.image,
          rating: X.rating,
          source: "Created",
          genres: X.genres.map((p) => p.name).join(", "),//se encarga de crear una cadena de texto que representa los géneros del videojuego, por ejemplo, si X.genres es [{ name: "Action" }, { name: "Adventure" }, { name: "RPG" }], la línea de código generaría la cadena de texto "Action, Adventure, RPG".
        };
        let gamesAPI = await axios(
          `https://api.rawg.io/api/games?search=${name}&key=${YOUR_API_KEY}&page_size=15`
        );
        let gamesAPIFull = gamesAPI.data.results
          .map((X) => {
            var game = {
              id: X.id,
              name: X.name,
              rating: X.rating,
              source: "API",
              image: X.background_image,
              genres: X.genres
                .map((p) => p.name)
                .filter((p) => p != null)
                .join(", "),
            };
            return game;
          })
          .slice(0, 15); // Limitar a los primeros 15 juegos encontrados
        res.json(gamesAPIFull.concat(gamesDBFull));//.concat(). Esto combina los juegos encontrados en la base de datos y los de la API en una sola lista.
      } else {
        let gamesAPI = await axios(
          `https://api.rawg.io/api/games?search=${name}&key=${YOUR_API_KEY}&page_size=15`
        );
        let gamesAPIFull = gamesAPI.data.results
          .map((X) => {
            let game = {
              id: X.id,
              name: X.name,
              rating: X.rating,
              source: "API",
              image: X.background_image,
              genres: X.genres
                .map((p) => p.name)
                .filter((p) => p != null)
                .join(", "),
            };
            return game;
          })
          .slice(0, 15); // Limitar a los primeros 15 juegos encontrados
        res.json(gamesAPIFull);
      }
    } else {
      res.status(400).json({ message: "Debe proporcionar una palabra de búsqueda" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error interno del servidor" });
  }
});

module.exports = router;













// require ("dotenv").config();
// const {Router} = require('express');
// const axios = require('axios');
// const { YOUR_API_KEY } = process.env;

// const { Videogame, Genre } = require('../db.js');

// const router = Router();

// router.get('/', async (req, res) => {
//     const { name } = req.query;

//     try {
//         if (name) {
//             name = name.toLowerCase();

//             let gamesDB = await Videogame.findOne({where: {name: name}, include: [Genre]});
//             if (gamesDB){
//                 let X = gamesDB
//                 gamesDBFull = {
//                     id: X.id,
//                     name: X.name,
//                     image: X.image,
//                     rating: X.rating,
//                     source: "Created",
//                     genres: X.genres.map(p => p.name).join(', '),
//                 }
//               let gamesAPI = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${YOUR_API_KEY}&page_size=15`) 
//               let gamesAPIFull = gamesAPI.data.results.map((X) => {
//                 var game = {
//                   id: X.id,
//                   name: X.name,
//                   rating: X.rating,
//                   source: 'Api',
//                   image: X.background_image,
//                   genres: X.genres && X.genres.map((p) => p.name).filter(p => p != null).join(', '),
//                 };
//                 return game;
//               })
//               res.json(gamesAPIFull.concat(gamesDBFull))
//             } else {
//               let gamesAPI = await axios.get(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}&page_size=15`) 
//               let gamesAPIFull = gamesAPI.data.results.map((X) => {
//                 var game = {
//                   id: X.id,
//                   name: X.name,
//                   rating: X.rating,
//                   source: 'Api',
//                   image: X.background_image,
//                   genres: X.genres && X.genres.map((p) => p.name).filter(p => p != null).join(', '),
//                 };
//                 return game;
//               })
//               res.json(gamesAPIFull)
//             }
//           }
//     } catch (error) {
//         res.status(404).json({message: error})
        
//     }
// })

// module.exports = router;