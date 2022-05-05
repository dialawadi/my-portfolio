import React from "react";
import { FaBars } from "react-icons/fa";
import { ImSun } from "react-icons/im";
import { BsMoonStars } from "react-icons/bs";
import { Link } from "react-router-dom";
import './NavBar.css';

export default function NavBar({ theme, switchTheme }) {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top bg-light" data-theme={theme}>
        <div className="container">
          <Link className="navbar-brand logo" to="/">
            Diala Wadi
          </Link>
          {theme === 'light' ? <button className="btn navbar-brand fs-3" onClick={() => switchTheme()}> <BsMoonStars /> </button> : <button className="btn navbar-brand fs-3" onClick={() => switchTheme()}> <ImSun /> </button>}
          <button
            className="btn d-lg-none"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FaBars className="fa-bars fs-4" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex gap-lg-4">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">
                  home
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-capitalize" href="#about">
                  about
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-capitalize" href="#work">
                  work
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
