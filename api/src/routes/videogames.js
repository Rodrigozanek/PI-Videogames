require("dotenv").config();
const { Router } = require('express');
const axios = require('axios');
const { YOUR_API_KEY } = process.env;

const router = Router();

router.get('/', async (req, res) => {
  try {
    const juego = await axios(`https://api.rawg.io/api/games?key=${YOUR_API_KEY}`);
    const games = juego.data.results;

    const filteredGames = games.map(game => {
      const { id, name, rating, background_image } = game;
      return { id, name, rating, background_image };
    });

    res.status(200).json(filteredGames);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
