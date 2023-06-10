const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genres = require('../controllers/genres');
const videogamesID = require('../controllers/videogamesID');
const videogames = require('../controllers/videogames');
const createVideogames = require('../controllers/createVideogame')
const gameName = require('../controllers/gameName')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.get('/videogames', videogames);
router.get('/videogames/name', gameName)
router.get('/videogames/:idVideogame', videogamesID);
router.post('/videogames', createVideogames);
router.get('/genres', genres);

module.exports = router;
