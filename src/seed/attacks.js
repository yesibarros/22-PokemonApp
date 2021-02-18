const chalk = require("chalk");
const Attack = require("../dbmodels/Ataques");
require("../config/index");

const log = (...args) => console.log(chalk.yellow.bgBlue(...args));

const tackle = {
  nombre: "Tackle",
  daño: 80,
  tipo: "Normal",
};

const ember = {
  nombre: "Ember",
  daño: 120,
  tipo: "Fuego",
};

const thunder = {
  nombre: "Thunder",
  daño: 180,
  tipo: "Electrico",
};

const surf = {
  nombre: "Surf",
  daño: 100,
  tipo: "Agua",
};

log("Seeding attacks collection...");

Attack.insertMany([tackle, ember, thunder, surf]).then((attacks) => {
  attacks.forEach((atk) => {
    log(
      `Your pokemon used ${atk.nombre}...
      It's super effective!`
    );
    console.log(atk);
  });
  log("Ready to go!");
  process.exit();
});
