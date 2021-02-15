import React from "react";
import "./About.css";
import "../components/Animations.css";
import ReactIcon from "../assets/language-icons/ReactIcon.svg";
import ReactNative from "../assets/language-icons/ReactNative.svg";
import Html from "../assets/language-icons/Html.svg";
import Figma from "../assets/language-icons/Figma.svg";
import Js from "../assets/language-icons/Js.svg";
import Css from "../assets/language-icons/Css.svg";

function About() {
  return (
    <div className="AboutPage">
      <div className="OwnerPhoto__Name__Logos">
        <div className="OwnerPhoto__Name">
          <div className="OwnerPhoto"></div>
          <div className="OwnerName">
            <h1>Dilmurod Rahimov</h1>
            <h1>Front End Developer and UX/UI Designer</h1>
          </div>
        </div>
        <div className="Logos">
          <img src={ReactIcon} />
          <img src={ReactNative} />
          <img src={Html} />
          <img src={Figma} />
          <img src={Js} />
          <img src={Css} />
        </div>
      </div>
      <div className="AboutOwner">
        <h2>About Me</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus vero
          voluptatem praesentium, libero ex saepe voluptatum veritatis, tempora
          laboriosam quod quia aperiam eius in rerum magnam repellendus, dolorum
          nostrum deleniti et harum ea doloremque non quisquam. Aspernatur
          exercitationem quidem unde.
        </p>
      </div>
    </div>
  );
}

export default About;
