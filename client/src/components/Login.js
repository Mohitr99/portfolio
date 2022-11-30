import React, { useState } from "react";
import login from "../images/login.png";
import { NavLink,useNavigate} from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("")
  const [pass,setPass] = useState("")
  const loginuser = async (e)=>{
    e.preventDefault();
    const res = await fetch("/login",{
      method: "POST",
      headers :{
        "Content-Type" : "application/json"
      },
      body:JSON.stringify({
        email,pass
      })
    })
    const data = await res.json()
    if(data.err === "please fil data"){
      window.alert("please fil data")
    }
    else if(data.err === "invalid credential"){
      window.alert("invalid credential")
    }
    else if(data.msg === "lgs"){
      window.alert("login successfully")
      navigate("/")
    }
  }

  return (
    <div className="container-fluid mt-5">
      <div className="row justify-content-center">
        <div
          className="col-md-10 col-11 login"
          style={{ backgroundColor: "#fff" }}
        >
          <h1 className="d-flex justify-content-center mt-4">Login</h1>
          <div className="row">
            <div className="col-md-6 d-flex justify-content-center">
              <img src={login} alt="" />
            </div>

            <div className="col-md-6 d-flex justify-content-center">
              <form className="d-flex justify-content-center flex-column">
                <div class="form-group mb-4">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                  />
                </div>
                <div class="form-group mb-4">
                  <input
                    type="password"
                    class="form-control"
                    id="exampleInputPassword1"
                    placeholder="Password"
                    name="pass"
                    value={pass}
                    onChange={(e)=>setPass(e.target.value)}
                  />
                </div>
                <button type="submit" class="btn" onClick={loginuser}>
                  Log In
                </button>
                <NavLink className="rdlink mt-5 " to="/register">
                  New Registration
                </NavLink>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
