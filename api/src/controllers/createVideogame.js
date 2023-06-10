
const {Videogame, Genre} = require('../db.js')
//Recibe la data colectada desde el formulario por el body
// Creo el videojuego en la db

async function createVideogame (req, res)  {
  const { name, description, image, released, rating, platforms, genres } = req.body;
  console.log({ name, description, image, released, rating, platforms, genres });

  try {
    let platformString = platforms.join(', ')

  let gameCreated = await Videogame.create({
    name,
    description,
    image, 
    released,
    rating,
    platforms: platformString,
  })
  console.log(gameCreated);
    let genresGame = await Genre.findAll({
      where: {name: genres}
  })
 
  await gameCreated.addGenre(genresGame);    
    res.status(200).json(gameCreated)
  } catch (error) {
    res.status(400).json({error: error.message}) 
  }
  
};

module.exports = createVideogame;