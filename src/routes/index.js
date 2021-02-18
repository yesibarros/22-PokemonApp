const express = require("express");
const router = express.Router();
const pokemonsRoutes = require("./pokemons");
const ataquesRoutes = require("./ataques");
const pokemonRoutes= require("./pokemon")

router.use("/pokemons", pokemonsRoutes);
router.use("/ataques", ataquesRoutes);
router.use("/pokemon", pokemonRoutes);

module.exports = router;
