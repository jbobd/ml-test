import React, { useContext, useEffect } from "react";

import AppContext from "../../contexts/appContext";

import { getProduct } from "../../utils/apiCalls";

import BreadCrumb from "../BreadCrumb/BreadCrumb";

import { useHistory } from "react-router-dom";

import "./ProductDetail.styles.scss";

const ProductDetail = ({ item }) => {
  //Realizo el ID de producto desde la url, para cumplir el requerimiento de poder ingresar a ver un producto directamente
  let urlPathId = useHistory().location.pathname;
  urlPathId = urlPathId.slice(urlPathId.lastIndexOf("/") + 1);

  const [state, setState] = useContext(AppContext);

  //Al montarse el componente realizo la llamada a mi api para obtener los datos del producto
  const detailProduct = async () => {
    let product = await getProduct(urlPathId);
    setState({ ...state, currentItem: product.data });
  };

  useEffect(() => detailProduct(), []);

  /* 
  Aquí estuve haciendo pruebas con useEffect para hacer funcionar la busqueda
  desde la vista de detalle de producto
  */

  // useEffect(
  //   () => async () => {
  //     console.log("mounted");
  //     let product = await getProduct(urlPathId);
  //     setState({
  //       ...state,
  //       currentItem: product.data,
  //     });
  //   },
  //   []
  // );

  // useEffect(() => {
  //   return () => {
  //     setState({
  //       ...state,
  //       currentItem: { items: { price: {} }, categories: [] },
  //     });
  //     console.log("cleaned up");
  //     console.log(state);
  //   };
  // }, []);

  if (!state.currentItem.items.picture) {
    return <div>Cargando..</div>;
  } else {
    return (
      <>
        {/* Hago el map de categories para generar los breadcrumbs */}
        <div className="results_container">
          <ul className="breadcrumb_container">
            {state.currentItem.categories.map((cat, index) => (
              <BreadCrumb key={index} element={cat} />
            ))}
          </ul>
          {/* Muestro todos los datos del producto */}
          <div className="product_container">
            <section className="product_header">
              <div className="image_container">
                <img
                  className="product_image"
                  src={state.currentItem.items.picture}
                  alt="product"
                />
              </div>
              <section className="product_data">
                <div className="product_data_header">
                  <h4 className="product_condition_qty">
                    <span className="product_condition">
                      {state.currentItem.items.condition}
                    </span>
                    <span className="product_qty">
                      {state.currentItem.items.sold_quantity}
                    </span>
                  </h4>
                  <h2 className="product_title">
                    {state.currentItem.items.title}
                  </h2>
                  <h3 className="product_price">
                    {state.currentItem.items.price.amount}
                  </h3>
                </div>
                <input
                  className="product_buy_btn"
                  type="button"
                  value="comprar"
                />
              </section>
            </section>
            <section className="product_description">
              <h2 className="product_description_title">
                Descripci&oacute;n del producto
              </h2>
              <article className="product_description_text">
                {state.currentItem.items.description}
              </article>
            </section>
          </div>
        </div>
      </>
    );
  }
};

export default ProductDetail;
