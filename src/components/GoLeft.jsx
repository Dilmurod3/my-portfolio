import React from "react";
import "./GoLeft.css";
import { Link } from "react-router-dom";
import LeftArrow from "../assets/LeftArrow.svg";

function GoLeft({ pathname, handleGoLeftClicked }) {
  return (
    <Link to={pathname} onClick={handleGoLeftClicked} className="Left__Button">
      <img src={LeftArrow} />
    </Link>
  );
}

export default GoLeft;
