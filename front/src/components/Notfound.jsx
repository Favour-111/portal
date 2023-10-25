import React from "react";
import frownImg from "./images/frownyFace.png";
import NavBar from "./NavBar";
function Notfound() {
  return (
    <div className="w-100">
      <div className="notFOundBody">
        <img src={frownImg} alt="" width={140} />
        <p className="fs-1 fw-light">404</p>
        <p className="text-capitalize fw-bold fs-3">not found</p>
        <p className="fw-light fs-5 text-center">
          the resource requested could not be found on this server
        </p>
      </div>
    </div>
  );
}

export default Notfound;
