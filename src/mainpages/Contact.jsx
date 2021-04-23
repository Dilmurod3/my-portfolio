import React from "react";
import "./Contact.css";
import Telegram from "../assets/social-icons/Telegram.svg";
import Gmail from "../assets/social-icons/Gmail.svg";
import Github from "../assets/social-icons/Github.svg";
import Facebook from "../assets/social-icons/Facebook.svg";
import Instagram from "../assets/social-icons/Instagram.svg";

function Contact() {
  return (
    <div className="ContactPage">
      <h1>Contact with me</h1>
      <div className="socialIcons">
        <a href="https://www.instagram.com/dilmurod__rahimov/" target="_blank">
          <img src={Instagram} />
        </a>
        <a href="#" target="_blank">
          <img src={Telegram} />
        </a>
        <a href="#" target="_blank">
          <img src={Facebook} />
        </a>
        <a href="#" target="_blank">
          <img src={Github} />
        </a>
        <a href="#" target="_blank">
          <img src={Gmail} />
        </a>
      </div>
    </div>
  );
}

export default Contact;
