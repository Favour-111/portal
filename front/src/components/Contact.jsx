import React from "react";
import headset from "./images/headset.png";
import NavBar from "./NavBar";
function Contact() {
  return (
    <div>
      <NavBar />

      <div className="text-center mt-5 Bgfont">
        <img src={headset} alt="" width={40} />
        <p className="text-uppercase fs-4 fw-light">
          get in <b>touch</b>
        </p>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <p className="text-muted fw-bold text-capitalize text-muted fw-light">
              customer care
            </p>
            <p>+2348069989705</p>
            <p className="text-muted fw-bold text-capitalize text-muted fw-light">
              office address
            </p>
            <p>No 80 igba-otun sango ota ogun state</p>
            <p className="text-muted fw-bold text-capitalize text-muted fw-light">
              email address
            </p>
            <p>omojolaobaloluwa@gmail.com</p>
            <p className="text-muted fw-bold text-capitalize text-muted fw-light">
              office time
            </p>
            9:00 AM - 6:00 PM
          </div>
          <div className="col-md-8  col-sm-12 ">
            <div className="d-flex justify-content-md-between">
              <input
                type="text"
                width={50}
                className="form-control me-4 p-3"
                placeholder="your name*"
              />
              <input
                width={50}
                type="email"
                className="form-control"
                placeholder="your email*"
              />
            </div>
            <div className="d-flex justify-content-md-between my-3">
              <input
                type="text"
                width={50}
                className="form-control me-4 p-3"
                placeholder="your subject*"
              />
              <input
                width={50}
                type="email"
                className="form-control"
                placeholder="phone number*"
              />
            </div>
            <textarea className="col-12 textarea"></textarea>
            <button className="send p-2" placeholder="send message...">
              send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
