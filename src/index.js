require("./config/index");
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const bodyParser = require("body-parser");
const rutas = require("./routes");
const cors = require("cors");
const app = express();

// Cors para poder dar acceso a otros puertos
app.use(cors());

// Ruta estatica para servir archivos
app.use(express.static(__dirname + "/public"));

// Body Parser para que se puedan enviar json en el body del request
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Logger para mostrar todos los request que llegan al servidor
app.use(morgan("dev"));

// Middleware de rutas
app.use("/api", rutas);

// Html que devolvera con el front de la aplicacion
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

app.listen(5000, () => console.log("listenning on port 5000"));
