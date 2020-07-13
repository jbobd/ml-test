//Modelo los datos que voy a proveer con mi api

const searchModel = (data) => {
  if (!data.results) {
    return {
      author: {
        name: "Juan",
        lastname: "Bobadilla",
      },
      items: "",
      categories: "",
    };
  }

  return {
    author: {
      name: "Juan",
      lastname: "Bobadilla",
    },
    items: data.results.map((item) => ({
      id: item.id,
      title: item.title,
      price: {
        currency: item.currency_id,
        amount: Math.round(item.price),
        decimals: parseInt(item.price.toString().slice(-2)),
      },
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping,
      location: item.address.state_name,
    })),
    categories: data.filters[0].values[0].path_from_root.map((cat) => cat.name),
  };
};

module.exports = searchModel;
