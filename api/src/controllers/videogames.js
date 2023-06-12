require("dotenv").config();
const axios = require('axios');
const { Videogame } = require('../db.js')
const { YOUR_API_KEY } = process.env
const URL = 'https://api.rawg.io/api/games?key='

async function videogames (req, res) {
const response = (await axios.get(URL + YOUR_API_KEY))
const gamesApi = response.data.results
const gamesDB = await Videogame.findAll()
res.status(200).json(gamesApi.concat(gamesDB))


};

module.exports =  videogames;