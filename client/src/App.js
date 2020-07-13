import React, { useState } from "react";
import Navbar from "./components/Containers/Navbar/Navbar";
import PageContent from "./components/Containers/PageContent/PageContent";

import AppContext from "./contexts/appContext";

import { BrowserRouter } from "react-router-dom";

import "./App.css";

const docTitle = "Mercado Libre - Test"

const AppContextInit = {
  searchResults: { categories: [], items: [] },
  currentItem: { items: { price: {} }, categories: [] }
};

const App = () => {
  const [state, setState] = useState(AppContextInit);
  //console.log(state);

  document.title = docTitle;

  return (
    <BrowserRouter>
      <AppContext.Provider value={[state, setState]}>
        <Navbar />
        <PageContent />
      </AppContext.Provider>
    </BrowserRouter>
  );
};

export default App;
