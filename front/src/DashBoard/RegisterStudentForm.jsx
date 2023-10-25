import React, { useState } from "react";

import SideBar from "./SideBar";
import { toast, ToastContainer } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function RegisterStudentForm() {
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    name: "",
    email: "",
    Matric: "",
    level: "",
    gender: "",
    department: "",
  });
  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setStudent({ ...student, [name]: value });
  };
  const formsubmit = async (e) => {
    e.preventDefault();
    const Response = await axios.post(
      "http://localhost:4000/api/student",
      student
    );
    if (
      (student.name === "",
      student.email === "",
      student.Matric === "",
      student.level === "",
      student.gender === "",
      student.department === "")
    ) {
      toast.error("input fields are required");
    } else {
      if (Response.data.success) {
        toast.success(Response.data.msg);
        navigate("/studentmanager");
      } else {
        toast.error(Response.data.msg);
      }
    }
  };
  return (
    <div className="">
      <SideBar />
      <div className="formBody m-auto shadow-lg p-3 mt-3 rounded ">
        <p className=" text-center fw-bold fs-3 text-uppercase">Add student</p>
        <form action="" onSubmit={formsubmit}>
          <div class="modal-body">
            <div class="mb-3">
              <label class="form-label">Student name</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                name="name"
                onChange={handleForm}
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                Matric number
              </label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                name="Matric"
                onChange={handleForm}
              />
              <label for="exampleInputEmail1" class="form-label">
                level
              </label>
              <select
                name="level"
                id=""
                className="form-select"
                onChange={handleForm}
              >
                <option value="none">none</option>
                <option value="100">100</option>
                <option value="200">200</option>
                <option value="300">300</option>
                <option value="400">400</option>
                <option value="500">500</option>
                <option value="600">600</option>
                <option value="700">700</option>
              </select>
            </div>

            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">
                Email address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                onChange={handleForm}
              />
              <div id="emailHelp" class="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">
                gender
              </label>
              <select
                className="form-select"
                name="gender"
                onChange={handleForm}
              >
                <option value="none">none</option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>

            <label>Department</label>
            <select
              className="form-select"
              name="department"
              onChange={handleForm}
            >
              <option value="none">none</option>
              <option value="accounting">accounting</option>
              <option value="agricultural science">agricultural science</option>
              <option value="boteny">boteny</option>
              <option value="bio chemistry">bio chemistry</option>
              <option value="computer science">computer science</option>
              <option value="chemistry">chemistry</option>
              <option value="dentition">dentition</option>
              <option value="electrical engineering">
                electrical engineering
              </option>
              <option value="economics">economics</option>
              <option value="finance">finance</option>
              <option value="mathematics">mathematics</option>
              <option value="philosophy">philosophy</option>
              <option value="physics">physics</option>
              <option value="political science">political science</option>
              <option value="law">law</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary w-100 mt-3">
            Register
          </button>
        </form>
        <Link
          type="submit"
          className="btn btn-success w-100 mt-3 text-capitalize"
          to="/studentmanager"
        >
          view all student
        </Link>
        <hr />
      </div>
      <ToastContainer />
    </div>
  );
}

export default RegisterStudentForm;
