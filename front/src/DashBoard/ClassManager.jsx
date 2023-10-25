import React, { useEffect, useState } from "react";
import SubjectManager from "./SubjectManager";
import SideBar from "./SideBar";
import del from "./DashBoardImg/icons8-delete-24.png";
import { Link } from "react-router-dom";
import add from "./DashBoardImg/icons8-add-50.png";
import refresh from "./DashBoardImg/icons8-refresh-30.png";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
function ClassManager() {
  const [classes, setClass] = useState([]);
  const getClass = async () => {
    const Response = await axios.get("http://localhost:4000/api/classes");
    setClass(Response.data.msg);
    console.log(Response);
  };
  useEffect(() => {
    getClass();
  }, []);
  return (
    <div>
      <SideBar />
      <div className="mt-1 Bg2">
        <p className="w-100 text-dark fs-3 text-capitalize ps-3 fw-light">
          class-room list
        </p>
        <Link className="btn btn-primary mx-1 text-capitalize" to="/classForm">
          <img src={add} width={15} alt="" className="pb-1" />
          Add class
        </Link>
        <Link
          className="btn btn-primary mx-1 text-capitalize "
          to="/classmanager"
        >
          <img src={refresh} width={15} alt="" className="me-1 pb-1" />
          Refresh
        </Link>

        <p className="mt-5  text-light w-100 text-center fs-2  fw-bold">
          Classes
        </p>
        <table class="table table-dark table-striped">
          <thead>
            <tr>
              <th scope="col">s/n</th>
              <th scope="col">Class Name</th>
              <th scope="col">BUilding</th>
              <th scope="col">Status</th>
              <th scope="col">Capacity</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cont, index) => {
              const deleteClass = async (id) => {
                if (window.confirm("Are you sure you want to delete")) {
                  const response = await axios.delete(
                    `http://localhost:4000/api/delclass/${cont._id}`
                  );
                  toast.info(`${cont.className} deleted successfully`);
                  getClass();
                }
              };
              return (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td className="text-capitalize">{cont.className}</td>
                  <td className="text-capitalize">{cont.Building}</td>
                  <td className="text-capitalize">{cont.status}</td>
                  <td className="text-capitalize">{cont.Capacity}</td>
                  <td>
                    <Link
                      className="btn btn-danger mx-1 mt-1"
                      onClick={() => {
                        deleteClass(cont._id);
                      }}
                    >
                      <img src={del} width={20} alt="" />
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ClassManager;
