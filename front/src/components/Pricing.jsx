import React from "react";
import cube from "./images/cube.png";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import swal from "sweetalert";
function Pricing() {
  const swalBOX = () => {
    swal("Oops!", " PLEASE SIGN IN TO BOOK AN ORDER!", "error");
  };

  return (
    <div className="Bgfont">
      <NavBar />

      <div className="text-center">
        <p className="fw-light fs-3  mt-5">
          you have other question or need help
        </p>
        <Link
          to="/contact"
          className="readBtn text-capitalize text-decoration-none"
        >
          contact us
        </Link>
      </div>
      <div className="pricingSection">
        <div className="text-center mt-5">
          <img src={cube} alt="" />
          <p className="text-uppercase fs-4 mt-2">
            our <b>pricing</b>
          </p>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-4 col-sm-12 bg-light text-center">
              <h2 class="mb-0 fw-bold p-3 rounded"> ₦1,500</h2>
              <p class="mb-0">Per Child/Per Term</p>
              <div class="plan-features text-muted mt-5 mb-5">
                <p>
                  School Management Module{" "}
                  <b class="text-primary">
                    <i class="ti-check text-muted"></i>
                  </b>
                </p>
                <p>
                  Online Payment Module{" "}
                  <b class="text-primary">
                    <i class="ti-check text-muted"></i>
                  </b>
                </p>
                <p>
                  E-Learning Module{" "}
                  <b class="text-primary">
                    <i class="ti-close text-muted"></i>
                  </b>
                </p>
                <p>
                  CBT Module{" "}
                  <b class="text-primary">
                    <i class="ti-close text-muted"></i>
                  </b>
                </p>
                <p class="mb-0">No Hidden Fees</p>
                <button
                  className="readBtn text-capitalize mt-5"
                  onClick={swalBOX}
                >
                  order now
                </button>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 text-center">
              <h2 class="mb-0 fw-bold p-3 rounded"> ₦2,500</h2>
              <p class="mb-0">Per Child/Per Term</p>
              <div class="plan-features text-muted mt-5 mb-5">
                <p>
                  School Management Module{" "}
                  <b class="text-primary">
                    <i class="ti-check text-muted"></i>
                  </b>
                </p>
                <p>
                  Online Payment Module{" "}
                  <b class="text-primary">
                    <i class="ti-check text-muted"></i>
                  </b>
                </p>
                <p>
                  E-Learning Module{" "}
                  <b class="text-primary">
                    <i class="ti-close text-muted"></i>
                  </b>
                </p>
                <p>
                  CBT Module{" "}
                  <b class="text-primary">
                    <i class="ti-close text-muted"></i>
                  </b>
                </p>
                <p class="mb-0">No Hidden Fees</p>
                <button
                  className="readBtn text-capitalize mt-5"
                  onClick={swalBOX}
                >
                  order now
                </button>
              </div>
            </div>
            <div className="col-md-4 col-sm-12 text-center bg-light">
              <h2 class="mb-0 fw-bold p-3 rounded"> ₦3,500</h2>
              <p class="mb-0">Per Child/Per Term</p>
              <div class="plan-features text-muted mt-5 mb-5">
                <p>
                  School Management Module{" "}
                  <b class="text-primary">
                    <i class="ti-check text-muted"></i>
                  </b>
                </p>
                <p>
                  Online Payment Module{" "}
                  <b class="text-primary">
                    <i class="ti-check text-muted"></i>
                  </b>
                </p>
                <p>
                  E-Learning Module{" "}
                  <b class="text-primary">
                    <i class="ti-close text-muted"></i>
                  </b>
                </p>
                <p>
                  CBT Module{" "}
                  <b class="text-primary">
                    <i class="ti-close text-muted"></i>
                  </b>
                </p>
                <p class="mb-0">No Hidden Fees</p>
                <button
                  className="readBtn text-capitalize mt-5"
                  onClick={swalBOX}
                >
                  order now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
