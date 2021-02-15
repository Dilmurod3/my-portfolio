import React from "react";
import "./GoLeft.css";
import { Link } from "react-router-dom";
import LeftArrow from "../assets/LeftArrow.svg";

function GoLeft({ pathname, handleGoLeftClicked }) {
  return (
    <div className="Left__Button">
      <Link to={pathname} onClick={handleGoLeftClicked}>
        <img src={LeftArrow} />
      </Link>
    </div>
  );
}

export default GoLeft;
