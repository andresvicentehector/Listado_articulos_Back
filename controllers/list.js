const Articulo = require("../models/Articles");

const listar = async (req, res) => {
  let errormsg = "something went wrong";
  const endpoint = req.query.limitar;
  let consulta;
  try {
    if (endpoint) {
      console.log(endpoint);
      console.log(parseInt(endpoint, 10));
      consulta = await Articulo.find({})
        .limit(parseInt(endpoint))
        .sort({ fecha: -1 });
    } else {
      consulta = await Articulo.find({}).sort({ fecha: -1 });
    }

    if (consulta.length === 0) {
      errormsg = "no Articles found";

      throw404(errormsg);
    }

    return res.status(200).json({
      status: "success",
      numero: consulta.length,
      articulos: consulta,
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: errormsg,
    });
  }
};

module.exports = { listar };

const throw404 = (errormsg) => {
  return res.status(404).json({
    status: "error",
    message: errormsg,
  });
};
