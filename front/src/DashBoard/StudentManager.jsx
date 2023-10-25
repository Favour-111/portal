import React, { useEffect, useState } from "react";
import SideBar from "./SideBar";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import school from "./DashBoardImg/icons8-school-64.png";
import del from "./DashBoardImg/icons8-delete-24.png";
import add from "./DashBoardImg/icons8-add-50.png";
function StudentManager() {
  const User = JSON.parse(localStorage.getItem("admin"));
  const [students, setStudents] = useState([]);

  const getAllStudent = async () => {
    try {
      const response = await axios.get("http://localhost:4000/api/fetch");
      setStudents(response.data.msg);
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };
  useEffect(() => {
    getAllStudent();
  }, []);

  return (
    <div className="Bgfont ">
      <SideBar />
      <p className="fs-5 fw-light fw-light text-light bg-dark ps-3 p-3">
        <marquee>
          <img src={school} width={40} alt="" /> {User.User.school} portal
        </marquee>
      </p>
      <div className="Bg3">
        <p className="text-uppercase w-100 fs-2 pt-5 ms-2 fw-ligth text-light">
          student manager
        </p>
        <Link
          className="btn btn-primary text-capitalize ms-1 mb-2"
          to="/registerstud"
        >
          <img src={add} width={15} alt="" />
          Add
        </Link>

        <table class="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col">s/n</th>
              <th scope="col">student name</th>
              <th scope="col">Matric No</th>
              <th scope="col">department</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((user, index) => {
              const deleteUser = async (id) => {
                if (window.confirm("Are you sure you want to delete")) {
                  const response = await axios.delete(
                    `http://localhost:4000/api/delete/${user._id}`
                  );
                  toast.info("student deleted successfully");
                  getAllStudent();
                }
              };
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td className="text-capitalize">{user.name}</td>
                  <td className="text-capitalize">{user.Matric}</td>
                  <td className="text-capitalize">{user.department}</td>
                  <td>
                    <button
                      className="btn btn-danger mx-1 mt-1"
                      onClick={() => {
                        deleteUser(user._id);
                      }}
                    >
                      <img src={del} width={20} alt="" />
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <ToastContainer />
      </div>
    </div>
  );
}

export default StudentManager;
