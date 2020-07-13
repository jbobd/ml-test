import React from "react";

import Logo from "../../Logo/Logo";
import SearchBar from "../../SearchBar/SearchBar";

import "./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar_meli">
      <Logo/>
      <SearchBar />
    </nav>
  );
};

export default Navbar;
