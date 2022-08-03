import React from "react";
import Myphoto from "../images/photo.png";
import MyEmail from "../images/mail-icon.png";
import MyLinkedin from "../images/linkedin-icon.png";

export default function Info() {
  return (
    <nav className="info">
      <img className="my-photo" src={Myphoto} alt="My photo" />
      <main>
        <h1>Sunniva Nguyen</h1>
        <h3>Frontend Developer</h3>
        <a href="sunnivanguyen@gmail.com">sunnivanguyen@gmail.com</a>
      </main>
      <div className="links-btn">
        <button id="email-btn" className="button">
          <img src={MyEmail} className="mail-icon" />
          Email
        </button>
        <button id="linkedin-btn" className="button">
          <img src={MyLinkedin} className="linkedin-icon" />
          LinkedIn
        </button>
      </div>
    </nav>
  );
}
