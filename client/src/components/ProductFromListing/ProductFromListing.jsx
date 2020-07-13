import React from "react";

import { useHistory } from "react-router-dom";

import { getProduct } from "../../utils/apiCalls";

import ShippingIcon from "../../assets/PNG/ic_shipping.png";

import "./ProductFromListing.scss";

const ProductFromListing = ({
  id,
  price,
  title,
  free_shipping,
  picture,
  location,
}) => {
  const history = useHistory();

  /* Al ser llamada mediante un click en la imagen o en el título, la función redirecciona a /items/$id, 
  y realiza la petición a mi api de producto */

  const itemDetail = async (id) => {
    history.push(`/items/${id}`);
    await getProduct(id);
  };

  return (
    <div className="container">
      <div className="image_container product_link">
        <img
          src={picture}
          className="product_image"
          alt="product"
          onClick={() => itemDetail(id)}
        />
      </div>
      <section className="product_data">
        <div className="main_title">
          <h3 className="price">
            <span className="price_amount">{price.amount}</span>
          </h3>
          {free_shipping && (
            <img src={ShippingIcon} className="shipping_icon" />
          )}
          <div className="filler"></div>
          <h5 className="location">{location}</h5>
        </div>
        <div className="sub_title">
          <h4 onClick={() => itemDetail(id)} className="product_link">
            {title}
          </h4>
        </div>
      </section>
    </div>
  );
};

export default ProductFromListing;
