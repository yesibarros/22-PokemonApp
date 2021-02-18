const express = require("express");
const router = express.Router();
const PokemonController = require("../controllers/pokemon");

router.get("/", PokemonController.findAll);
router.get("/:id", PokemonController.findById);


module.exports = router;
