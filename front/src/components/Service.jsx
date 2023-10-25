import React from "react";
import Stationary from "./images/stationary.png";
import paper from "./images/paper.png";
import paste from "./images/paste.png";
import report from "./images/report.png";
import wallet from "./images/wallet.png";
import chat from "./images/chat.png";
import manage from "./images/manage.png";
import NavBar from "./NavBar";
function Service() {
  return (
    <div>
      <NavBar />

      <div class="col-lg-12 mt-5 Bgfont">
        <div className="text-center">
          <img src={Stationary} alt="" className="mb-3" />
          <h3 class="title">
            Why choose <span class="fw-bold">SchoolsPortal</span>?
          </h3>
        </div>
        <p class="text-muted mt-6  title-subtitle mx-auto text-center w-50 ">
          You can’t manage what you can’t measure. SchoolPortal<sup>TM</sup>{" "}
          puts all your school's data within reach at all times, anywhere you
          are. Number of students per class, per term, per session. Number of
          staff, outstanding school fees, etc.
        </p>

        <div className="container mt-5">
          <div class="row mt-5">
            <div class="col-md-4">
              <div class="services-box">
                <div class="services-icon">
                  <img src={paper} alt="" />
                </div>
                <div class="mt-3">
                  <h5 class="services-title fw-bold mb-3">Student Erolment</h5>
                  <p class="services-subtitle text-muted">
                    Schools can easily enroll returning student. We adopt a once
                    and only policy. Once a piece of info has been recorded, it
                    can be re-used, making your workflow a lot easier and
                    smoother.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="services-box">
                <div class="services-icon">
                  <img src={paste} width="50px" alt="" />
                </div>
                <div class="mt-3">
                  <h5 class="services-title fw-bold mb-3">Staff Management</h5>
                  <p class="services-subtitle text-muted">
                    Now you can assign teachers to classes and monitor their
                    work virtually. Create staff groups for teachers, drivers,
                    cooks and assign duties easily with free SMS prompt.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="services-box">
                <div class="services-icon">
                  <img src={manage} width={70} alt="" />
                </div>
                <div class="mt-3">
                  <h5 class="services-title fw-bold mb-3">
                    Classroom Management
                  </h5>
                  <p class="services-subtitle text-muted">
                    Class Attendance, Timetable Management, Continuous
                    Assessment Management, Automatic computation of student
                    scores. Delivery of scores via SMS, etc
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container my-4">
          <div class="row">
            <div class="col-md-4">
              <div class="services-box">
                <div class="services-icon">
                  <img src={report} alt="" />
                </div>
                <div class="mt-3">
                  <h5 class="services-title fw-bold mb-3">
                    Student Report/Grading System
                  </h5>
                  <p class="services-subtitle text-muted">
                    Customized auto generated report system that collates
                    results, generate reports, and also sends results by email
                    and SMS.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="services-box">
                <div class="services-icon">
                  <img src={wallet} alt="" width={50} />
                </div>
                <div class="mt-3">
                  <h5 class="services-title fw-bold mb-3">
                    School Bill/Fees Management
                  </h5>
                  <p class="services-subtitle text-muted">
                    School Fees, PTA Levies and other bills managed effectively.
                    Easily notify parents on their installments via sms and
                    email.
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="services-box">
                <div class="services-icon">
                  <img src={chat} alt="" width={50} />
                </div>
                <div class="mt-3">
                  <h5 class="services-title fw-bold mb-3">Parents Forum</h5>
                  <p class="services-subtitle text-muted">
                    Easy communication between the school and parents via email
                    and free SMS with an online forum for parents discussions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
