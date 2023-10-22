
//estoy cogiendo objeto Schema y objeto model de mongoose
const { Schema, model } = require('mongoose');

//utilizo el método Schema, con esta estructura se guardarán dato en las colecciones
const ArticuloSchema = Schema({
    
    titulo: { type:String ,required:true},
        contenido:{type:String, required:true},
    fecha:{type:Date, required:true, default: Date.now},
        imagen:{type:String, required:false, default:"default.png" }
})


//aqui se conecta el modelo a la base de datos, para llamarlo, utilizamos su nombre(Articulo)

module.exports = model("Articulo", ArticuloSchema, "articles");