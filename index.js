const {conexion}  = require("./DataBase/conexion.js");

const { app } = require("./app/app.js");

const port = 3900;

//conectar a la BBDD
conexion();

console.log('App iniciada');


//crear servidor y escuchar peticiones
app.listen(port, () => {
    console.log(`Server running in port ${port}`);
});



