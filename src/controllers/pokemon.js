const PokemonModel = require("../dbmodels/pokemon");

const pokemonController = {
  findAll(req, res) {
    PokemonModel.find({})
    .then(pokemons=>{
      // console.log("POKEMONS", )
      res.send(pokemons);
    })  
    .catch(err => {
      res.status(500).send(err);
    });
    
  },

  findById(req, res) {
    const id = req.params.id;
    
    PokemonModel.findById(id)
    .then(pokemon=>{
      res.send(pokemon);
    })
    .catch(err=>{
      res.status(404).send(err)
    })
    
  },
  
};

module.exports = pokemonController;
