import React from "react";

import BreadCrumb from "../BreadCrumb/BreadCrumb";

import ProductFromListing from "../ProductFromListing/ProductFromListing";

import "./searchResults.styles.scss";

const SearchResults = ({ data }) => {
  if (!data.items) {
    return <div>Cargando..</div>;
  } else {
    return (
      <>
        {/* Hago el map de categories para generar los breadcrumbs */}
        <div className="results_container">
          <ul className="breadcrumb_container">
            {data.categories.map((cat, index) => (
              <BreadCrumb key={index} element={cat} />
            ))}
          </ul>
          {/* Hago el map de la data para generar los breadcrumbs  */}
          {data.items.map((item) => (
            <ProductFromListing
              key={item.id}
              id={item.id}
              price={item.price}
              title={item.title}
              free_shipping={item.free_shipping}
              picture={item.picture}
              location={item.location}
              condition={item.condition}
            />
          ))}
        </div>
      </>
    );
  }
};

export default SearchResults;
