const chalk = require("chalk");
const Pokemon = require("../dbmodels/Pokemon");
require("../config/index");
console.log("POKEMON", Pokemon)
const log = (...args) => console.log(chalk.yellow.bgBlue(...args));

const charmander = {
  nombre: "Charmander",
  tipo: "Fuego",
  level: 6,
  imgURI: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
};

const bulbasaur = {
  nombre: "Bulbasaur",
  tipo: "Planta",
  level: 5,
  imgURI:
    "https://vignette.wikia.nocookie.net/es.pokemon/images/4/43/Bulbasaur.png/revision/latest?cb=20170120032346",
};

const squirtle = {
  nombre: "Squirtle",
  tipo: "Agua",
  level: 6,
  imgURI:
    "https://vignette.wikia.nocookie.net/es.pokemon/images/e/e3/Squirtle.png/revision/latest?cb=20160309230820",
};

log("Seeding pokemon collection...");

Pokemon.insertMany([charmander, bulbasaur, squirtle]).then((pokemons) => {
  pokemons.forEach((poke) => {
    log(`${poke.nombre} I choose you!`);
    console.log(poke);
  });

  log("Ready to go!");

  process.exit();
});
