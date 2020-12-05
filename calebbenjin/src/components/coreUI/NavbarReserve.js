import React, {useEffect, useState} from "react";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {

  return (
    <nav className="nav" id="navbar">
      <div className="nav-content">
        <h1 className="nav-logo" onClick={scrollToTop} >Cale<span>bb</span>enjin</h1>
        <ul className="nav-items">
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Articles
            </Link>
          </li>
          <li className="nav-item">
            <Link
              activeClass="active"
              to="section6"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Reach me!
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;