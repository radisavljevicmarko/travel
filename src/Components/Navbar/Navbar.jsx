import React from "react";
import { useState } from "react";
import "./navbar.css";
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { PiDotsNineBold } from "react-icons/pi";

const Navbar = () => {
  const [active, setActive] = useState("navBar");
  const showNavbar = () => {
    setActive("navBar activeNavbar");
  };
  const removeNavbar = () => {
    setActive("navBar");
  };

  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#Home" className="logo flex">
            <h1>
              <MdOutlineTravelExplore className="icon" />
              Travel.
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navList flex">
            <li className="navItem">
              <a href="#Home" className="navLink">
                Home
              </a>
            </li>

            <li className="navItem">
              <a href="#Home" className="navLink">
                Package
              </a>
            </li>

            <li className="navItem">
              <a href="#Home" className="navLink">
                Shop
              </a>
            </li>

            <li className="navItem">
              <a href="#Home" className="navLink">
                About
              </a>
            </li>

            <li className="navItem">
              <a href="#Home" className="navLink">
                Pages
              </a>
            </li>

            <li className="navItem">
              <a href="#Home" className="navLink">
                News
              </a>
            </li>

            <li className="navItem">
              <a href="#Home" className="navLink">
                Contact
              </a>
            </li>

            <button className="btn">
              <a href="#Home" className="navLink">
                BOOK NOW
              </a>
            </button>
          </ul>

          <div onClick={removeNavbar} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNavbar} className="toggleNavbar">
          <PiDotsNineBold className="icon" />
        </div>
      </header>
    </section>
  );
};

export default Navbar;
