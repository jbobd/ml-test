import React from "react";
import meliLogo from "../../assets/PNG/Logo.png";
import "./Logo.styles.scss";

const Logo = () => (
  <div className="logo-container">
    <a href="/">
      <img className="logo-image" src={meliLogo} alt="Logo de Mercadolibre"/>
    </a>
  </div>
);

export default Logo;
