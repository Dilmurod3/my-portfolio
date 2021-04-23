import React from "react";
import "./GoRight.css";
import { Link } from "react-router-dom";
import RightArrow from "../assets/RightArrow.svg";

function GoRight({ pathname, handleGoRightClicked }) {
  return (
    <Link
      onClick={handleGoRightClicked}
      to={pathname}
      className="Right__Button"
    >
      <img src={RightArrow} />
    </Link>
  );
}

export default GoRight;
