const validator = require("validator");
const Articulo = require("../models/Articles");

const create = async (req, res) => {
  //take params from post req
  let param = req.body;
  let errormsg = "Something went wrong";

  //valido los datos
  try {
    let validate_tittle =
      !validator.isEmpty(param.titulo) &&
      validator.isLength(param.titulo, { min: 2, max: 40 });
    let validate_cont =
      !validator.isEmpty(param.contenido) &&
      validator.isLength(param.contenido, { min: 2, max: 40000000 });

    if (!validate_tittle || !validate_cont) {
      errormsg = "Info no validada";
      throw new Error("info no validada");
    }

    //creamos objeto para guardar
    const articulo = new Articulo(param);

    await articulo.save();

    return res.status(200).json({
      status: "success",
      message: "Articulo guardado",
      articulo: param,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: errormsg,
    });
  }
};

module.exports = { create };
