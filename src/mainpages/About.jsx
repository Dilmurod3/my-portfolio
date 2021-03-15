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
          I have been working on Figma to design beautiful, creative, and unique
          UX/UI design for applications, that will be catchy and leaves a trace
          in your heart. And right after finishing my design, I will jump on the
          fun coding part to make sure to build attractive, easy to use,
          scalable, and of course identical to my mockups and UI/UX designs with
          React, React-Native, and other frontend tools, so that makes you feel
          as comfortable as home.
        </p>
      </div>
    </div>
  );
}

export default About;
