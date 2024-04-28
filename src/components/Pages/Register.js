import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Register() {
  const [registerDetails, setregisterDetails] = useState({
    email: "",
    password: "",
    name: "",
    role: "Visitor",
  });

  const navigate = useNavigate();

  const registerProcess = () => {
    axios
      .post(
        "https://my-json-server.typicode.com/pankkap/PankajDB/users",
        registerDetails
      )
      .then(() => {
        alert("User Created Successfully");
        navigate("/login");
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="container mt-4 ">
      <div className="row mt-4">
        <div className="col-md-12">
          <h4 className="text-center  h2 text-primary">Register User</h4>
        </div>
      </div>

      <div className="row mt-4">
        <div className="offset-md-4 col-md-5">
          <label className="h6">Name</label>
          <input
            type="text"
            className="form-control mt-1"
            onChange={(e) =>
              setregisterDetails({ ...registerDetails, name: e.target.value })
            }
          />
          <br />
          <label className="h6">Email</label>
          <input
            type="text"
            className="form-control mt-1"
            onChange={(e) =>
              setregisterDetails({ ...registerDetails, email: e.target.value })
            }
          />
          <br />
          <label className="h6">Password</label>
          <input
            type="password"
            className="form-control mt-1"
            onChange={(e) =>
              setregisterDetails({
                ...registerDetails,
                password: e.target.value,
              })
            }
          />

          <button className="btn btn-primary my-4" onClick={registerProcess}>
            Register
          </button>
          <Link className="btn btn-info mx-4 " to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
}
