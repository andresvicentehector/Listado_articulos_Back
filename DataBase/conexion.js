const mongoose = require("mongoose");

const conexion = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/my_blog");
    console.log("Conexión exitosa");
  } catch (error) {
    console.log(error);
    throw new error("No se pudo conectar a la BBDD");
  }
};
module.exports = { conexion };
