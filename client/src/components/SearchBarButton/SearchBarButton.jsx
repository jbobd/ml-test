import React from "react";
import SearchIcon from "../../assets/PNG/searchicon_x2.png";
import "./SearchBarButton.styles.scss";

const SearchBarButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} value="" className="SearchButton">
      <div className="search_icon_container">
        <img className="search_icon" src={SearchIcon} alt="Search" />
      </div>
    </button>
  );
};

export default SearchBarButton;
