const express = require("express");
const cors = require("cors");

const listar_route = require("../routes/list");
const crear_route = require("../routes/create_article");

//crear servidor de node
const app = express();

//configurar el CORS; ejecutar el middleware del cors antes de que se ejecute una ruta

app.use(cors());

//Convertir body a objeto JS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//crear rutas
app.use(listar_route);
app.use(crear_route);

module.exports = { app };
