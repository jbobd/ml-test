import React from "react";

import {Link} from "react-router-dom";

import meliLogo from "../../assets/PNG/Logo.png";
import "./Logo.styles.scss";

const Logo = () => (
  <div className="logo-container">
    <Link to="/">
      <img className="logo-image" src={meliLogo} alt="Logo de Mercadolibre" />
    </Link>
  </div>
);

export default Logo;
