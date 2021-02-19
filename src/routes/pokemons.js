const express = require("express");
const router = express.Router();
const PokemonController = require("../controllers/pokemon");

router.get("/", PokemonController.findAll);
router.get("/:id", PokemonController.findById);
router.post("/",PokemonController.create)
router.put("/:id", PokemonController.update)
router.delete("/:id", PokemonController.delete)

module.exports = router;
