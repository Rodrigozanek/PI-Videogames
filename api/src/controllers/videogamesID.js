require("dotenv").config();
const axios = require('axios');
const { YOUR_API_KEY } = process.env;
const { Videogame, Genre } = require('../db.js')



// Obtengo el detalle de un videogame en particular por ID
async function videogamesID (req, res) {
    const { idVideogame } = req.params;
    
                
try { 
    if (idVideogame.toString().includes("-")) {
        //si incluye un guion pertenece a la base de datos
        const gameDB = await Videogame.findByPk(
             idVideogame,
            {include: {model: Genre, attributes: ['name']},})
            res.status(200).json(gameDB)
    } else {
        
    const response = await axios(`https://api.rawg.io/api/games/${idVideogame}?key=${YOUR_API_KEY}`)
               
        const gameAPI = response.data
        res.status(200).json(gameAPI)
    }
} catch (err) {
    res.status(404).json({ error: "ID not found" })
}
}


module.exports = videogamesID;