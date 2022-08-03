import React from "react";
import FacebookIcon from "../images/Facebook-icon.png";
import TwitterIcon from "../images/Twitter-icon.png";
import InstaIcon from "../images/Instagram-icon.png";
import GithubIcon from "../images/GitHub-icon.png";

export default function Footer() {
  return (
    <ul className="contact-logos">
      <li>
        <img src={TwitterIcon} />
      </li>
      <li>
        <img src={FacebookIcon} />
      </li>

      <li>
        <img src={InstaIcon} />
      </li>
      <li>
        <img src={GithubIcon} />
      </li>
    </ul>
  );
}
