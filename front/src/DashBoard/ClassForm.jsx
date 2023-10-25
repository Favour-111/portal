import React, { useState } from "react";
import SideBar from "./SideBar";
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import add from "./DashBoardImg/icons8-add-50.png";

function ClassForm() {
  const navigate = useNavigate();
  const [classRoom, setClass] = useState({
    className: "",
    Building: "",
    status: "",
    Capacity: "",
  });
  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setClass({ ...classRoom, [name]: value });
  };
  const submitForm = async (e) => {
    try {
      e.preventDefault();
      if (
        classRoom.className === "" ||
        classRoom.Building === "" ||
        classRoom.Capacity === ""
      ) {
        toast.error("input fields must not be empty");
      } else {
        const response = await axios.post(
          "http://localhost:4000/api/class",
          classRoom
        );
        if (response.data.success) {
          toast.success(response.data.msg);
          console.log(response);
          navigate("/classmanager");
        } else {
          toast.error(response.data.msg);
        }
      }
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div>
      <SideBar />

      <p className="w-100 fw-light fs-3 fw-light text-center mt-3">
        Add class-Room
      </p>
      <div className="formBody m-auto shadow-lg p-3 mt-5 rounded">
        <form action="" onSubmit={submitForm}>
          <label className="form-label">Class Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Class room name"
            name="className"
            onChange={handleForm}
          />
          <label for="exampleInputEmail1" class="form-label">
            Building
          </label>
          <select
            name="Building"
            id=""
            onChange={handleForm}
            className="form-select"
          >
            <option value="none">none</option>
            <option value="first floor">first floor</option>
            <option value="second floor">second floor</option>
            <option value="third floor">third floor</option>
            <option value="last floor">last floor</option>
          </select>

          <label className="form-label">Capacity</label>
          <input
            type="text"
            className="form-control"
            placeholder="class room capacity"
            name="Capacity"
            onChange={handleForm}
          />
          <label className="form-label">Status</label>
          <select className="form-select" onChange={handleForm} name="status">
            <option value="none">none</option>
            <option value="active">active</option>
            <option value="inactive">inactive</option>
            <option value="pending">pending</option>
          </select>
          <div>
            <button type="submit" className="btn btn-primary mt-3">
              <img src={add} width={15} alt="" className="pb-1" /> Add Class
            </button>
            <Link
              to="/classmanager"
              type="button"
              className="btn btn-danger mx-2 mt-3"
            >
              <span className="text-light">X</span> Cancel
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default ClassForm;
