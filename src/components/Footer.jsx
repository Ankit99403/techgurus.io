import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/techguruslogo.png";
const Footer = () => {
  return (
    <>
      <footer>
        <div>
          <HashLink HashLink to="/#home">
            <img src={logo} alt="techgurus.io" />
          </HashLink>

          <p>@all right reserverd</p>
        </div>
        <div>
          <h5>Follow Us</h5>
          <div>
            <Link to="https://www.youtube.com" target="_blank">
              Youtube
            </Link>
            <Link to="https://www.instagram.com" target="_blank">
              Instagram
            </Link>
            <Link to="https://www.facebook.com" target="_blank">
              Facebook
            </Link>
            <Link to="https://www.github.com" target="_blank">
              Github
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
