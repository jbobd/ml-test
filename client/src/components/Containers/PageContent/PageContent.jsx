import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";

import ProductDetail from "../../ProductDetail/ProductDetail";
import SearchResults from "../../SearchResults/SearchResults";
import HomePage from "../../HomePage/Homepage";

import AppContext from "../../../contexts/appContext";

import "./PageContent.scss";

const PageContent = () => {
  const [state] = useContext(AppContext);

  //Este componente renderiza dependiendo la ruta
  if (!state) {
    return <div>Cargando..</div>;
  } else {
    return (
      <main className="pageContent">
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/items/q=*">
            <SearchResults data={state.searchResults} />
          </Route>
          <Route path="/items/*">
            <ProductDetail item={state.currentItem} />
          </Route>
        </Switch>
      </main>
    );
  }
};

export default PageContent;
