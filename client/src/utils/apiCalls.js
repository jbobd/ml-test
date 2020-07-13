import axios from "axios";

const url = "http://localhost:4000/api/";

//realiza la llamada a mi api de búsqueda de productos
export const searchProduct = async (req) => {
  try {
    let response = await axios.get(`${url}items/q=${req}`)
    return response;
  } catch (error) {
    console.log(error);
  }
}

//realiza la llamada a mi api de producto
export const getProduct = async (req) => {
    try {
      let response = await axios.get(`${url}items/${req}`)
      return response;
    } catch (error) {
      console.log(error);
    }
  }
