import React from "react";
import NavBar from "../components/NavBar";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import profile from "./DashBoardImg/icons8-manager-24.png";
import dash from "./DashBoardImg/icons8-dashboard-30.png";
import clas from "./DashBoardImg/icons8-class-50.png";
import stud from "./DashBoardImg/icons8-student-100.png";
import att from "./DashBoardImg/icons8-attendance-50.png";
import menuebar from "../components/images/icons8-menu-bar-50.png";
import { useNavigate } from "react-router-dom";
import book from "./DashBoardImg/icons8-book-100.png";
import school from "./DashBoardImg/icons8-school-64.png";
function SideBar() {
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("admin");
    navigate("/");
  };
  const User = JSON.parse(localStorage.getItem("admin"));
  return (
    <div>
      <div className="w-100 bg-light">
        <Link
          className="btn"
          type="Link"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasExample"
          aria-controls="offcanvasExample"
        >
          <img src={menuebar} width={20} alt="" />
        </Link>
      </div>

      <div
        className="offcanvas bg-dark text-light offcanvas-start"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            <img src={school} alt="" width={50} />
            <span className="mx-4">{User.User.school}</span>
          </h5>
          <Link
            type="Link"
            className="btn bg-light btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></Link>
        </div>
        <div className="offcanvas-body">
          <div>
            <ul className="sideBar ">
              <Link
                className="list text-light text-capitalize fw-light fs-6 my-3 "
                to="/landingpage "
              >
                <img src={dash} alt="" className="mx-2" />
                dash board
              </Link>
              <Link
                className="list text-light text-capitalize fw-light fs-6 my-3"
                to="/attendance"
              >
                <img src={att} alt="" width={30} className="mx-2" /> Attendance
                record
              </Link>
              <Link
                className="list text-light text-capitalize fw-light fs-6 my-3"
                to="/administrativemanager"
              >
                <img src={profile} alt="" className="mx-2" />
                staff manager
              </Link>
              <Link
                className="list text-light text-capitalize fw-light fs-6 my-3"
                to="/classForm"
              >
                <img src={clas} alt="" width={30} className="mx-2" />
                class manager
              </Link>
              <Link
                className="list text-light text-capitalize fw-light fs-6 my-3"
                to="/studentmanager"
              >
                <img src={stud} alt="" width={30} className="mx-2" />
                StudentManager
              </Link>
              <Link
                className="list text-light text-capitalize fw-light fs-6 my-3"
                to="/subjectform"
              >
                <img src={book} alt="" width={30} className="mx-2" />
                subject manager
              </Link>
            </ul>
            <button onClick={logout} className="btn btn-danger ms-4">
              logout
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SideBar;
