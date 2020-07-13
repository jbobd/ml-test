//Modelo los datos que voy a proveer con mi api

const productModel = (data, itemDetails, categories) => {
  return {
    author: {
      name: "Juan",
      lastname: "Bobadilla",
    },
    items: {
      id: data.id,
      title: data.title,
      price: {
        currency: data.currency_id,
        amount: Math.round(data.price),
        decimals: parseInt(data.price.toString().slice(-2)),
      },
      picture: data.thumbnail,
      condition: data.condition,
      free_shipping: data.shipping.free_shipping,
      sold_quantity: data.sold_quantity,
      description: itemDetails,
    },
    categories: categories.path_from_root.map((e) => e.name),
  };
};

module.exports = productModel;
