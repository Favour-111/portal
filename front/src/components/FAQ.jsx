import React from "react";
import chat from "./images/chat.png";
import NavBar from "./NavBar";
function FAQ() {
  return (
    <div className="Bgfont">
      <NavBar />

      <div className=" mt-4 section3 ">
        <div className="text-center ">
          <img src={chat} alt="" />
          <h3 class="title ">
            Our <span class="fw-bold">Support</span> Center
          </h3>
        </div>
        <p class="text-muted mt-3 title-subtitle mx-auto w-50 text-center">
          It is a long established fact that a reader will be of a page when
          established fact looking at its layout.
        </p>
        <div class="row mt-5">
          <div class="col-lg-6">
            <div class="pl-4 pr-4">
              <div class="mt-4">
                <div class="">
                  <h5 class="mb-0 f-18 font-weight-600">
                    Classroom Management:
                  </h5>
                </div>
                <div class="mt-3">
                  <p class="text-muted">
                    Manage your classes effectively with increased access to
                    class timetable, students reports, records and attendance
                    for parents online.
                  </p>
                </div>
              </div>
              <div class="mt-5">
                <div class="">
                  <h5 class="mb-0 f-18 font-weight-600">
                    School Bus Management:
                  </h5>
                </div>
                <div class="mt-3">
                  <p class="text-muted">
                    Now you can manage school buses and communicate with parents
                    of students using your buses alone via SMS or Email when you
                    need to.
                  </p>
                </div>
              </div>
              <div class="mt-5">
                <div class="">
                  <h5 class="mb-0 f-18 font-weight-600">Hostel Management: </h5>
                </div>
                <div class="mt-3">
                  <p class="text-muted">
                    Hotels can now be managed remotely with easy communication
                    with parents via free SMS and email
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="pl-4 pr-4">
              <div class="mt-4">
                <div class="">
                  <h5 class="mb-0 f-18 font-weight-600">Library Management:</h5>
                </div>
                <div class="mt-3">
                  <p class="text-muted">
                    Get access to over 500GB of books online and you can create
                    your virtual library for your school.
                  </p>
                </div>
              </div>
              <div class="mt-5">
                <div class="">
                  <h5 class="mb-0 f-18 font-weight-600">School Calendar:</h5>
                </div>
                <div class="mt-3">
                  <p class="text-muted">
                    it allows parents and students to plan and prepare for
                    programs and events coming up in the school.
                  </p>
                </div>
              </div>
              <div class="mt-5">
                <div class="">
                  <h5 class="mb-0 f-18 font-weight-600">Birthday Alerts:</h5>
                </div>
                <div class="mt-3">
                  <p class="text-muted">
                    Our system will alert you when any of your students have a
                    birthday so you can celebrate with them and send out
                    birthday greetings
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

export default FAQ;
