import React from "react";

import "./BreadCrumb.styles.scss";

const BreadCrumb = ({ element }) => {
  return <li className="breadcrumb">{element}</li>;
};

export default BreadCrumb;
