const express = require("express");
const router = express.Router();
const PokemonController = require("../controllers/poke");

router.get ("/create", PokemonController.create);

module.exports = router;