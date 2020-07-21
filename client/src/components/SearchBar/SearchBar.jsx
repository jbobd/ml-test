import React, { useState, useContext } from "react";
import SearchBarButton from "../SearchBarButton/SearchBarButton";

import { useHistory } from "react-router-dom";

import { searchProduct } from "../../utils/apiCalls";

import AppContext from "../../contexts/appContext";

import "./SearchBar.styles.scss";

const SearchBar = () => {
  const history = useHistory();
  const [searchField, setSearchField] = useState("");
  const [state, setState] = useContext(AppContext);

  const handleChange = (event) => {
    setSearchField(event.target.value);
  };

  //al submitear realizo un push, llamo a mi api para buscar los productos con la query y los guardo en el state
  const handleSubmit = async (event) => {
    event.preventDefault();
    let searchResult = await searchProduct(searchField);
    setState({ ...state, searchResults: searchResult.data });
    history.push(`/items/q=${searchField}`);
    return null;
  };

  return (
    <form className="searchbar_container" onSubmit={handleSubmit}>
      <input
        type="text"
        className="searchbar_input"
        onChange={handleChange}
        placeholder="Nunca dejes de buscar"
      />
      <SearchBarButton onClick={handleSubmit} />
    </form>
  );
};

export default SearchBar;
