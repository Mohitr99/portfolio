import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import register from "../images/register.png";
import { useNavigate, NavLink } from "react-router-dom";
const Registeration = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name : "",email : "",profession : "", pass : "", cpass : ""
  });
  let name, value;
  const handleinputs = (e)=>{
    console.log(e);
    name = e.target.name;
    value = e.target.value
    setuser({...user,[name]:value})
  }
  const postdata = async(e)=>{
    e.preventDefault();
    const {name,email,profession,pass,cpass} = user;
    const res = await fetch("/signup",{
      method: "POST",
      headers :{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        name,email,profession,pass,cpass
      })
    })
    const data = await res.json()
    console.log(data);
    if(data.err === "user already exist"){
      window.alert("user already exist")
    }
    else if(data.err === "confirm password does not match"){
      window.alert("confirm password does not match")
    }
    else if(data.err === "filled properly"){
      window.alert("all filled required")
    }
    else if(data.err === "sr"){
      window.alert("sucessfully register")
      navigate("/login")
    }
  }





  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center ">
        <div
          className="col-md-10 col-11 register"
          style={{ backgroundColor: "#fff" }}
        >
          <h1 className="d-flex justify-content-center mt-4">Registeration</h1>
          <div className="row justify-content-center immg">
            <div className="col-md-6 d-flex align-items-center justify-content-center flex-column ">
              <img src={register} alt="" />
            </div>

            <div className="col-md-6 d-flex justify-content-center">
              <form className="d-flex justify-content-center flex-column mt-4" method="POST">
                <div className="form-group mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Name"
                    name="name"
                    value={user.name}
                    onChange={handleinputs}
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    value={user.email}
                    onChange={handleinputs}
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter Profession"
                    name="profession"
                    value={user.profession}
                    onChange={handleinputs}
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="pass"
                    value={user.pass}
                    onChange={handleinputs}
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="password"
                    className="form-control"
                    id="exampleInputPassword1"
                    placeholder="Confirm Password"
                    name="cpass"
                    value={user.cpass}
                    onChange={handleinputs}
                  />
                </div>
                <button type="submit" className="btn mb-5" onClick={postdata}>
                  Register
                </button>
                <NavLink className="rdlink mb-4" to="/login">
                  I am already register
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registeration;
