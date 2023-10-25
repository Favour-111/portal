import React from "react";
import features from "./images/features.png";
import Desktop from "./images/desktop.png";
import NavBar from "./NavBar";
function Features() {
  return (
    <div className="w-100 Bgfont">
      <NavBar />

      <div className="text-center mt-4">
        <div class="cnt">
          <img src={features} alt="" width={50} />

          <h3 class="title">
            Our <span class="fw-bold">Features</span>
          </h3>
          <p class="text-muted mt-3 w-50 title-subtitle mx-auto">
            Other features on SchoolsPortal includes School Bus management,
            Hostel management, classroom management, library management etc.
          </p>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row w-100">
          <div className="col-md-6 col-sm-12 text-center">
            <img src={Desktop} alt="" width={400} />
          </div>
          <div className="col-md-6 col-sm-12 my-md-0 my-sm-4">
            <div class="features-desc">
              <h2>All you need, in one place</h2>
              <p class="text-muted mt-3">
                Access all your data and information on your students, staff and
                parents in one place. SchoolsPortal is a feature rich web
                application for school management and online learning. Our
                features cover all the physical processes involved in running a
                school physically.
              </p>
              <button className="readBtn text-capitalize mt-3">
                read more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row w-100">
          <div className="col-md-6 col-sm-12 my-md-0 my-sm-4">
            <div class="features-desc">
              <h2>A feature rich software that puts you in charge</h2>
              <p class="text-muted mt-3">
                SchoolsPortal is loaded with numerous features that puts you in
                charge and allow you to manage your school from anywhere. Our
                features includes School fees payment online, CBT, E-learning,
                school accounting amongst, staff payroll system and many others.
              </p>
              <button className="readBtn text-capitalize mt-3">
                read more
              </button>
            </div>
          </div>
          <div className="col-md-6 col-sm-12 text-center">
            <img src={Desktop} alt="" width={400} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
