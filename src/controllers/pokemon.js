const PokemonModel = require("../dbmodels/pokemon");

const pokemonController = {
  findAll(req, res) {
    PokemonModel.find({})
    .then(pokemons=>{
      // console.log("POKEMONS", )
      res.send(pokemons);
      return pokemons
    })  
    .then((x)=>{
      console.log("PAPAPAPAA",x)
    })
    .catch(err => {
      res.status(500).send(err);
    });
    
  },

  findById(req, res) {
    const id = req.params.id;
    
    PokemonModel.findById(id)
    .populate('ataques')
    
    .then(pokemon=>{
      res.send(pokemon);
      return pokemon
    })
    .then((y)=>{
      console.log("LALALALLAALALALA",y)
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
      const {nombre,tipo,level} = req.body
      PokemonModel.findByIdAndUpdate({ _id :req.params.id},{nombre,tipo,level})
      .then((pokemon)=>res.status(201).send(pokemon))
      .catch (()=> res.sendStatus(400))
      
    },
    
    // update(req, res) {
    //   const pokemonId = req.params.id
    //   const pokemonbBody = req.body
    //   PokemonModel.findByIdAndUpdate(pokemonId,pokemonbBody)
    //   .then((pokemon)=>res.status(201).send(pokemon))
    //   .catch (()=> res.sendStatus(400))
      
    // },

    // delete(req, res) {
    //   console.log("REQ", req.path)

    //   const pokemonId = req.params.id
    //   const pokemonbBody = req.body
    //   PokemonModel.deleteOne(pokemonId,pokemonbBody)
    //   .then((pokemon)=>res.status(201).send(pokemon))
    //   .catch (()=> res.sendStatus(404))
      
    // },
    delete(req, res) {
      const {nombre,tipo,level} = req.body
      PokemonModel.deleteOne({ _id :req.params.id},{nombre,tipo,level})
      .then((pokemon)=>res.status(201).send(pokemon))
      .catch (()=> res.sendStatus(400))
      
    },
  
};

module.exports = pokemonController;
