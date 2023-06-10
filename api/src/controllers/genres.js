require("dotenv").config();
const axios = require('axios');
const { YOUR_API_KEY } = process.env;
const { Genre } = require('../db.js');

// Obtengo los genres desde la API y los guardo en la DB

async function genres (req, res) {
    // res.send("hola")
    try{
        const response = await axios(`https://api.rawg.io/api/genres?key=${YOUR_API_KEY}`)
        const genresAPI = response.data.results;
        
        for(const elemnt of genresAPI){
            await Genre.create({
                id: elemnt.id,
                name: elemnt.name,
            })
        }
        res.status(200).json(genresAPI)
    } catch (err) {
        res.status(404).json({ message: err.message })
    }
}

module.exports = genres;