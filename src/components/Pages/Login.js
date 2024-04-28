import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [loginDetails, setloginDetails] = useState({
    username: "",
    password: "",
  });

  // Get the list of Users to compare with data enter by the user
  const [users, setusers] = useState();


  const navigate = useNavigate()
  useEffect(() => {
    axios
      .get(`https://my-json-server.typicode.com/pankkap/PankajDB/users`)
      .then((res) => {
        setusers(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  function loginProcess() {
    // console.log("Entered Details and API users details will be matched");
    // console.log(users);
    // console.log(loginDetails);

    let foundUser = users.find((u)=>u.email === loginDetails.username)
    if(foundUser)
    {
        if(foundUser.password === loginDetails.password)
        {
            // console.log("Credentials Matched")
            if(foundUser.role === "Author")
            {
                sessionStorage.setItem("role", "Author")
                navigate('/home')
            }
            else
            {
                sessionStorage.setItem("role", "Visitor")
                navigate('/home')
            }
        }
        else
        {
            alert("Password Not Matched")
        }
    }
    else
    {
        alert("User not exixt")
    }
    

  }
  return (
    <div>
      <div className="row mt-4">
        <div className="col-md-12">
          <h4 className="text-center  h2 text-primary">Login User</h4>
        </div>
      </div>
      <div className="row mt-4">
        <div className="offset-md-4 col-md-5">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          onChange={(e) =>
            setloginDetails({ ...loginDetails, username: e.target.value })
          }
        />
     
      
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="exampleInputPassword1"
          onChange={(e) =>
            setloginDetails({ ...loginDetails, password: e.target.value })
          }
        />
      </div>

      
    </div>
    <div className="row mt-4">
        <div className="offset-md-4 col-md-5">
    <button type="submit" className="btn btn-primary" onClick={loginProcess}>
        Submit
      </button>
      <Link className="btn btn-info mx-3" to="/register">Register</Link>
      </div>
      </div>
    </div>
  );
}
