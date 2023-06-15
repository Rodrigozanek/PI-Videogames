require("dotenv").config();
const axios = require('axios');
const { YOUR_API_KEY } = process.env;
const { Genre } = require('../db.js');

// Obtengo los genres desde la API y los guardo en la DB

async function Genres (req, res) {

    try{
        const response = await axios.get(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`)
        const genresAPI = response.data.results;
        
        for(const elemnt of genresAPI){
            await Genre.create({
                id: elemnt.id,
                name: elemnt.name,
            })
        }
        res.status(200).json(genresAPI)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

module.exports = Genres;