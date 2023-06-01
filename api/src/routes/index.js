const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const genres = require('./genres');
const videogamesID = require('./videogamesID');
const videogames = require('./videogames');
const videogamesName = require('./videogamesName');
const createVideogames = require('./createVideogame')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/videogames', videogames);
router.use('/videogamesID', videogamesID);
router.use('/videogamesName', videogamesName)
router.use('/createVideogames', createVideogames);
router.use('/genres', genres);

module.exports = router;
