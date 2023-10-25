import React from "react";
import { NavLink } from "react-router-dom";
import cruLogo from "./images/download.png";
import PhoneImg from "../components/images/phone.png";
import faceBook from "../components/images/fscebook.png";
import Twitter from "../components/images/twitter.png";
function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <NavLink className="navbar-brand fw-bold fs-3" to={"/"}>
            <img src={cruLogo} width={28} /> CrawfordPortal
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ">
              <li className="nav-item ">
                <NavLink
                  className="nav-link navItm"
                  aria-current="page"
                  to={"/"}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navItm" to={"/features"}>
                  Features
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navItm" to={"/Faq"}>
                  FAQ
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navItm" to={"/pricing"}>
                  Pricing
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navItm" to={"/contact"}>
                  contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link navItm" to={"/service"}>
                  services
                </NavLink>
              </li>
            </ul>

            <div className="d-flex justify-content-md-center align-items-center">
              <img src={PhoneImg} width={30} alt="" />
              <div>+2348069989705</div>
              <img src={faceBook} width={30} className="mx-2 icons" alt="" />
              <img src={Twitter} width={30} className=" icons" alt="" />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
