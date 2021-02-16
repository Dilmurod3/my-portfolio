import React from "react";
import "./GoRight.css";
import { Link } from "react-router-dom";
import RightArrow from "../assets/RightArrow.svg";

function GoRight({ pathname, handleGoRightClicked }) {
  return (
    <div className="Right__Button">
      <Link onClick={handleGoRightClicked} to={pathname}>
        <img src={RightArrow} />
      </Link>
    </div>
  );
}

export default GoRight;
