import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import NavBar from "./NavBar";
function Home() {
  //importing used state from react router dom
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUser({ ...user, [name]: value });
  };

  const FormHandler = async (e) => {
    e.preventDefault();
    if ((user.email === "", user.password === "")) {
      toast.error("please input field");
    } else {
      const Response = await axios.post("http://localhost:4000/login", user);
      console.log(Response);
      if (Response.data.success) {
        toast.success(Response.data.msg);
        navigate("/landingpage");
        localStorage.setItem("admin", JSON.stringify(Response.data));
        console.log(Response);
      } else {
        toast.error(Response.data.msg);
      }
    }
  };
  const navigate = useNavigate();
  return (
    <div className="HomePage h-100">
      <NavBar />

      <div className="HomeBg ">
        <div className="container h-100 Bgfont">
          <div className="row h-100 Bgfont">
            <div className="sections col-md-6 text-light">
              <div className="contents text-light ms-5">
                <h1 class="text-white home-title mb-0">
                  Welcome to SchoolsPortal
                </h1>
                <p className=" text fw-light fs-6 my-3 ">
                  A robust and feature rich cloud based school management
                  aplication that allows school managers effectively manage
                  their schools remotely from anywhere with tools for teachers
                  to teach and students to learn online anywhere.
                </p>
                <Link
                  to="/signup"
                  className="landingBtn1 mt-4 text-decoration-none"
                >
                  get started
                </Link>
              </div>
            </div>
            <div className="formBody col-md-6 mt-4 text-light">
              <div className="contents text-dark bg-light w-100 m-sm-auto rounded p-3">
                <p className="fs-5 fw-bold">
                  sign into your dashBoard already have an account
                </p>

                {/* login form */}
                <form onSubmit={FormHandler}>
                  <div class="mb-3 w-100">
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
                  </div>
                  <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      class="form-control"
                      id="exampleInputPassword1"
                      name="password"
                      onChange={handleForm}
                    />
                  </div>

                  <br />
                  <button type="submit" class="btn btn-primary text-uppercase">
                    get access
                  </button>
                  <Link className="btn btn-link mx-3" to="/signup">
                    don't have an account Sign-up
                  </Link>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
