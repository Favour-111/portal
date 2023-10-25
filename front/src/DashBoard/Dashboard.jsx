import React from "react";
import { Link } from "react-router-dom";
import profile from "./DashBoardImg/icons8-administrator-male-24.png";
import student from "./DashBoardImg/icons8-student-24.png";
import classroom from "./DashBoardImg/icons8-google-classroom-24.png";
import { useNavigate } from "react-router-dom";
import book from "./DashBoardImg/icons8-book-and-pencil-24.png";
import attendance from "./DashBoardImg/icons8-attendance-30.png";
import user from "./DashBoardImg/icons8-admin-50.png";
import fee from "./DashBoardImg/icons8-money-50.png";
import calender from "./DashBoardImg/icons8-calender-64.png";
function Dashboard() {
  const User = JSON.parse(localStorage.getItem("admin"));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/");
  };
  return (
    <div className="w-100">
      <div className="Bg w-100 Bgfont">
        <div className="d-flex align-items-center justify-content-between mt-1">
          <div>
            <p className="fs-6 fw-light fw-bold ms-1 text-uppercase text-dark ps-3 p-3">
              <img src={profile} alt="" />
              {User.User.school} portal
            </p>
          </div>
          <div>
            <Link
              type="button"
              class=" mx-4 d-flex"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              <span className="bg-light p-2 rounded-circle shadow-lg">
                <img src={profile} alt="" height={30} />
              </span>
            </Link>
          </div>
        </div>
        <div className="MainContainer mt-4">
          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1
                    class="modal-title fs-5 w-100 text-center"
                    id="exampleModalLabel "
                  >
                    <p>Admin Profile</p>
                    <img src={profile} alt="" />
                  </h1>
                </div>
                <div class="modal-body">
                  <p className="text-capitalize  ">
                    Admin Name : {User.User.name}
                  </p>
                  {/* <p>User id : {User.User._id}</p> */}
                  <p>Admin School Name : {User.User.school}</p>
                  <p>gender : {User.User.gender} </p>
                  <p>Account creation Date: {User.User.updatedAt}</p>
                  {/* <span className="mx-4 text-capitalize"> {User.User.name}</span> */}
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  <button onClick={logout} className="btn btn-danger">
                    logout
                  </button>
                </div>
              </div>
            </div>
          </div>
          <Link className="btn landingBtn shadow mx-4" to="/registerstud">
            <p>Manage Student</p>
            <img src={student} alt="" />
          </Link>
          <Link className="btn landingBtn shadow mx-4" to="/classForm">
            <p>Class management</p>
            <img src={classroom} alt="" />
          </Link>
          <Link className="btn landingBtn shadow mx-4" to="/subjectform">
            <p>subject management</p>
            <img src={book} alt="" />
          </Link>
          <Link className="btn landingBtn shadow mx-4">
            <p>attendance</p>
            <img src={attendance} alt="" />
          </Link>
          <Link className="btn landingBtn shadow mx-4">
            <p>staff management</p>
            <img src={user} alt="" width={30} />
          </Link>
          <Link className="btn landingBtn shadow mx-4">
            <p>Fees</p>
            <img src={fee} alt="" width={30} />
          </Link>
          <Link className="btn landingBtn shadow mx-4">
            <p>School finance</p>
            <img src={fee} alt="" width={30} />
          </Link>
          <Link className="btn landingBtn shadow mx-4">
            <p>School calender</p>
            <img src={calender} alt="" width={30} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
