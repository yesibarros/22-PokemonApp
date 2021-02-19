const AtaquesModel = require("../dbmodels/ataques");

const ataquesController = {
  
  findAll(req, res) {
      AtaquesModel.find({})
      .then(ataques=>{
        // console.log("POKEMONS", )
        res.send(ataques);
      })  
      .catch(err => {
        res.status(500).send(err);
      })
     
},
create(req, res) {
  const body = req.body
  AtaquesModel.create(body)
  .then((ataques)=>res.status(201).send(ataques))
  .catch (()=> res.sendStatus(400))
  
}
}


module.exports = ataquesController;
