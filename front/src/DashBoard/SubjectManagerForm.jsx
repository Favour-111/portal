import React, { useState } from "react";
import SideBar from "./SideBar";
import axios from "axios";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

function SubjectManagerForm() {
  const navigate = useNavigate();
  const [course, setCourse] = useState({
    courseTitle: "",
    courseCode: "",
    Level: "",
  });
  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setCourse({ ...course, [name]: value });
  };
  const submitForm = async (e) => {
    try {
      e.preventDefault();
      if (
        course.courseTitle === "" ||
        course.courseCode === "" ||
        course.Level === ""
      ) {
        toast.error("input fields must not be empty");
      } else {
        const response = await axios.post(
          "http://localhost:4000/api/subject",
          course
        );
        if (response.data.success) {
          toast.success(response.data.msg);
          console.log(response);
          navigate("/subjectmanager");
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
      <div className="formBody m-auto shadow-lg p-3 mt-5 rounded">
        <form action="" onSubmit={submitForm}>
          <p className="w-100 text-center fw-light fs-3">Add Courses</p>
          <label className="form-label">Course title</label>
          <input
            type="text"
            className="form-control"
            placeholder="course title"
            onChange={handleForm}
            name="courseTitle"
          />
          <label for="exampleInputEmail1" class="form-label">
            level
          </label>
          <select
            name="Level"
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

          <label className="form-label">Course code</label>
          <input
            type="text"
            className="form-control"
            placeholder="course code"
            onChange={handleForm}
            name="courseCode"
          />
          <div>
            <button type="submit" className="btn btn-primary mt-3">
              add Course
            </button>
            <Link
              to="/subjectmanager"
              type="submit"
              className="btn btn-success mx-2 mt-3"
            >
              view courses
            </Link>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default SubjectManagerForm;
