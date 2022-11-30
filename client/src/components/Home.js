import React from "react";
import home from "../images/home.jpg";
const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col hm">
          <h1>Welcome</h1>
          <h4>I am the Mern Developer</h4>
        </div>
      </div>
      <div className="row">
        <div className="col d-flex justify-content-center">
          <img src={home} alt="" className="hmimg" />
        </div>
      </div>
    </div>
  );
};

export default Home;
