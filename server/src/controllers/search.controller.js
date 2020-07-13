const fetch = require("node-fetch");
const searchModel = require("../models/search.model");

const searchController = {};

//  Creo la funcion get search, que realiza la llamada a mercadolibre con la query que le llega por parametro,
//  y devuelve un json con la estructura definida en el modelo
searchController.getSearch = async (req, res) => {
  let query = req.params.query;
  
  let baseURL = `https://api.mercadolibre.com/sites/MLA/search?q=${query}&limit=4`;

  try {
    let response = await fetch(baseURL);
    let data = await response.json();
    res.json(
      //llamo a la funcion searchModel que se encarga de modelar toda la data
      await searchModel(data)
    );
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
};

module.exports = searchController;
