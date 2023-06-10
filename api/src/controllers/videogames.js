require("dotenv").config();
const axios = require('axios');
const URL = 'https://api.rawg.io/api/games?key=c935b0e1cb634ca5827bd707a1e3e85b'

async function videogames (req, res) {
const response = (await axios.get(URL))
const gamesApi = response.data.results
res.status(200).json(gamesApi)


};

module.exports =  videogames;