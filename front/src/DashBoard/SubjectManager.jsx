import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import del from "./DashBoardImg/icons8-delete-24.png";
import { Link } from "react-router-dom";
import school from "./DashBoardImg/icons8-school-64.png";
import add from "./DashBoardImg/icons8-add-50.png";
function SubjectManager() {
  const [course, setCourse] = useState([]);
  const User = JSON.parse(localStorage.getItem("admin"));
  const getCourse = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/getCourse");
      setCourse(response.data.msg);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getCourse();
  }, []);
  return (
    <div className="">
      <SideBar />
      <div className="fs-5 fw-light fw-light text-light bg-dark p-1">
        <marquee>
          <img src={school} width={40} alt="" /> {User.User.school} portal
        </marquee>
      </div>

      <div className="Bg2 ">
        <div className="container-fluid h-100">
          <div className="col-12">
            <p className=" fw-light fs-3 text-light">Courses List</p>
            <Link
              className="btn btn-primary  text-capitalize me-2  pb-2"
              to="/subjectform"
            >
              <img src={add} width={15} alt="" />
              Add
            </Link>
            <div className="section mt-3">
              <table class="table">
                <thead class="table-light">
                  <th>s/n</th>
                  <th>course title</th>
                  <th>course code</th>
                  <th>level</th>
                  <th>actions</th>
                </thead>
                <tbody>
                  {course.map((courses, index) => {
                    const deleteCourse = async (id) => {
                      if (window.confirm("Are you sure you want to delete")) {
                        const response = await axios.delete(
                          `http://localhost:4000/api/deleteCourse/${courses._id}`
                        );
                        toast.info(
                          `${courses.courseTitle} deleted successfully`
                        );
                        getCourse();
                      }
                    };
                    return (
                      <tr>
                        <th scope="row">{index + 1}</th>
                        <td className="text-capitalize">
                          {courses.courseTitle}
                        </td>
                        <td className="text-capitalize">
                          {courses.courseCode}
                        </td>
                        <td className="text-capitalize">{courses.Level}</td>

                        <td>
                          <Link
                            className="btn btn-danger"
                            onClick={() => {
                              deleteCourse(courses._id);
                            }}
                          >
                            <img src={del} alt="" width={20} />
                          </Link>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SubjectManager;
