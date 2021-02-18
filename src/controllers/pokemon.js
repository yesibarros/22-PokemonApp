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
  
  create(req, res) {
      const body = req.body
      PokemonModel.create(body)
      .then((pokemon)=>res.status(201).send(pokemon))
      .catch (()=> res.sendStatus(400))
      
    },

    
    update(req, res) {
      const pokemonId = req.params.id
      const pokemonbBody = req.body
      PokemonModel.findByIdAndUpdate(pokemonId,pokemonbBody)
      .then((pokemon)=>res.status(201).send(pokemon))
      .catch (()=> res.sendStatus(400))
      
    },

    delete(req, res) {
      
      const pokemonId = req.params.id
      const pokemonbBody = req.body
      PokemonModel.findByIdAndDelete(pokemonId,pokemonbBody)
      .then((pokemon)=>res.status(201).send(pokemon))
      .catch (()=> res.sendStatus(400))
      
    }
  
};

module.exports = pokemonController;
