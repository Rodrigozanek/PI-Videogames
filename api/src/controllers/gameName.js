require('dotenv').config();
const axios = require("axios");
const { YOUR_API_KEY } = process.env;
const { Genre, Videogame } = require('../db.js');

async function gameName (req, res){
    const {name} = req.query;
    
    const gamesDB = await Videogame.findAll({
        where: { name: name },
        include: [Genre],
      });

      if (gamesDB) {
        var gamesDBFull = gamesDB.map((game) => {
          const { id, name, image, rating, genres } = game;
          const gameGenres = genres.map((genre) => genre.name).join(", ");
          return { id, name, image, rating, genres: gameGenres };
        }); 
        res.json(gamesDBFull)
      }

      const response = await axios(`https://api.rawg.io/api/games?search=${name}&key=${YOUR_API_KEY}&page_size=15`);
    const gamesAPIResults = response.data.results;
    res.json(gamesAPIResults.concat(gamesDBFull));
    }

module.exports = gameName;