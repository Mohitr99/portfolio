import React from "react";
import { NavLink } from "react-router-dom";
import error from "../images/error.png";
const Error = () => {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center">
        <div className="col-11 d-flex align-items-center flex-column mt-5">
          <img className="img-fluid" src={error} alt="" />
          <NavLink className="errlink" to="/">
            Back to Home Page
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Error;
