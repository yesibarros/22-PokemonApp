const express = require("express");
const router = express.Router();
const pokemonsRoutes = require("./pokemons");
const ataquesRoutes = require("./ataques");


router.use("/pokemons", pokemonsRoutes);
router.use("/ataques", ataquesRoutes);


module.exports = router;
