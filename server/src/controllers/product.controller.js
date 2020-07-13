const fetch = require("node-fetch");
const productModel = require("../models/product.model");

const productController = {};

//  Creo la funcion get search, que realiza la llamada a mercadolibre con la query que le llega por parametro,
//  y devuelve un json con la estructura definida en el modelo

productController.getProduct = async (req, res) => {
  let id = req.params.id;

  let baseURL = `https://api.mercadolibre.com/items/${id}`;

  try {
    let response = await fetch(baseURL);
    let data = await response.json();
    let itemDetails = await getItemDetails(id);
    let categories = await getCategories(data.category_id);

    //llamo a la funcion productModel que se encarga de modelar toda la data
    res.json(productModel(data, itemDetails, categories));
  } catch (error) {
    console.log("Ocurrio un error: ", error);
  }
};

async function getItemDetails(id) {
  let baseURL = `https://api.mercadolibre.com/items/${id}/description`;
  let response = await fetch(baseURL);
  let data = await response.json();
  return data.plain_text;
}

//añadi esta funcion en la api para poder obtener las categorías del item
async function getCategories(id) {
  let baseURL = `https://api.mercadolibre.com/categories/${id}`;
  let response = await fetch(baseURL);
  let data = await response.json();
  return data;
}

module.exports = productController;
