import React from "react";
import "./Contact.css";
import Telegram from "../assets/social-icons/Telegram.svg";
import Gmail from "../assets/social-icons/Gmail.svg";
import Figma from "../assets/social-icons/Figma.svg";
import Github from "../assets/social-icons/Github.svg";
import Facebook from "../assets/social-icons/Facebook.svg";
import Instagram from "../assets/social-icons/Instagram.svg";

function Contact() {
  return (
    <div className="ContactPage">
      <h1>Contact with me</h1>
      <div className="Inputs__Container">
        <div className="Name__Email__Inputs">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
        </div>
        <textarea
          className="TextArea"
          name="text"
          placeholder="Message..."
        ></textarea>
      </div>
      <div className="SocialIcons__SendButton__Container">
        <div className="Social__Icons">
          <a href="https://t.me/DilmurodRahimov" target="_blank">
            <img src={Telegram} />
          </a>
          <a href="https://t.me/DilmurodRahimov" target="_blank">
            <img src={Gmail} />
          </a>
          <a
            href="https://www.facebook.com/settings?tab=account&section=username"
            target="_blank"
          >
            <img src={Facebook} />
          </a>
          <a
            href="https://www.figma.com/file/nErQiD4fgUF41NWff0o1VA/Qadaa-Calculator?node-id=0%3A1"
            target="_blank"
          >
            <img src={Instagram} />
          </a>
          <a href="https://t.me/DilmurodRahimov" target="_blank">
            <img src={Figma} />
          </a>
          <a href="https://t.me/DilmurodRahimov" target="_blank">
            <img src={Github} />
          </a>
        </div>
        <div className="Send__Button">
          <p>Send</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
