import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import logo from "../assets/techguruslogo.png";
const Header = () => {
  return (
    <>
      <nav>
        <HashLink HashLink to="/#home">
          <img src={logo} alt="techgurus.io" />
        </HashLink>

        <main>
          <HashLink to="/#home">Home</HashLink>
          <Link to="/contact">Contact</Link>
          <HashLink to="/#about">About</HashLink>
          <HashLink to="/#brands">Brands</HashLink>
          <Link to="/services">Services</Link>
        </main>
      </nav>
    </>
  );
};

export default Header;
