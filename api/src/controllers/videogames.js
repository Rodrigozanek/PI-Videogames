require("dotenv").config();
const axios = require('axios');
const { Videogame, Genre } = require('../db.js')
const { YOUR_API_KEY } = process.env
const URL = 'https://api.rawg.io/api/games?key='

async function videogames (req, res) {
    try {
        const response = (await axios.get(URL + YOUR_API_KEY))
        const gamesApi = response.data.results.map((game) =>{
            return{
                id: game.id,
                name: game.name,
                image: game.background_image,
                rating: game.rating,
                genres: game.genres.map(genre=>genre.name).join(", "),
                released: game.released,
                platforms: game.platforms.map(p => p.platform.name).join(", "),
            }
        })



        
        let gamesDB = await Videogame.findAll({include: {
            model: Genre,
            attributes: ['name'],
            through: { attributes: [] }
        }})
            gamesDB = gamesDB.map(e => ({
            id: e.id, 
            name: e.name, 
            image: e.image, 
            rating: e.rating,
            platforms: e.platforms, 
            genres: e.genres.map(e => e.name).join(", "),
            released: e.released
        }))
        
        res.status(200).json(gamesApi.concat(gamesDB))
        
    } catch (error) {
        res.status(500).json({message: error.message});
    }


};

module.exports =  videogames;