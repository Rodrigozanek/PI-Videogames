require("dotenv").config();
const { Router } = require('express');
const axios = require('axios');
const { YOUR_API_KEY } = process.env;
const { Videogame, Genre } = require('../db.js')

const router = Router();


// Obtengo el detalle de un videogame en particular por ID
router.get('/:id', async function (req, res) {
    const { id } = req.params;

try { 
    if (id.includes("-")) {
        //si incluye un guion pertenece a la base de datos
        const gameDB = await Videogame.findOne({ where: {id},
            include: {model: Genre, attributes: ['name'],
            through: {attributes: []}}})//no se incluyen otros atributos que no sea name
            let X = gameDB
            const information = {
                id: X.id,
                name: X.name,
                image: X.image,
                rating: X.rating,
                description: X.description,
                released: X.released,
                platforms: X.platforms,
                createdAt: X.createdAt,
                updateAt: X.updatedAt,
                genres: X.genres.map(p => p.name).join(', ')//esta línea de código crea una cadena de texto que representa los géneros del videojuego, donde los nombres de los géneros están separados por comas y espacios. Por ejemplo, si el videojuego tiene dos géneros llamados "Acción" y "Aventura", la cadena resultante sería "Acción, Aventura".
            }
            return res.json(information)
    } else {
        const gameAPI = await axios(`https://api.rawg.io/api/games/${id}?key=${YOUR_API_KEY}`)
                
            let X = gameAPI.data;
            const information = {
                name: X.name,
                image: X.background_image,
                genres: X.genres && X.genres.map((p) =>
                    p.name).filter(p => p != null).join(', '),//esta línea de código crea una cadena de texto que representa los géneros del videojuego, pero antes de realizar el mapeo y la unión, verifica si la propiedad genres existe y no es null ni undefined. Esto evita posibles errores al acceder a propiedades de un objeto nulo o indefinido.
                description: X.description_raw,
                released: X.released,
                rating: X.rating,
                platforms: X.platforms && X.platforms.map((p) =>
                    p.platform.name).filter(p => p != null).join(', ')
            }
            return res.json(information)
    }
} catch (err) {
    res.status(404).json({ error: "ID not found" })
}
})


module.exports = router;