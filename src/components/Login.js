import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notes1 from "../assets/notes1.jpg";
import Notes2 from "../assets/notes2.jpg";
import Notes3 from "../assets/notes3.avif";

const Login = (props) => {
  const HEIGHT = window.innerHeight;
  const WIDTH = window.innerWidth;

  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://notesbackend-qr9l.onrender.com/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: credentials.email,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    console.log(json);
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.token);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };
  console.log(HEIGHT);

  return (
    <div
      className=" my-5"
      style={{
        height: `${HEIGHT - 0.2 * HEIGHT}px`,
        width: "95%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
      }}
    >
      <div className="w-50 ">
        <img
          src={Notes1}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            // objectFit: "cover",
            borderRadius: "10px",
          }}
        />
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          height: `${HEIGHT - 0.5 * HEIGHT}`,
          minWidth: "25%",
          // minHeight: "30vw",
          // minWidth: "35vw",
          borderRadius: "10px",
          boxShadow: "11px 20px 15px grey",
          padding: "2%",
          backgroundColor: "#c5ece9",
        }}
      >
        <h3 className="text-center">User Login</h3>
        <div className="mt-4">
          <label for="email" class="form-label">
            Email ID
          </label>
          <input
            placeholder="Email ID"
            type="email"
            className="form-control mt-2"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mt-4">
          <label for="password" class="form-label">
            Password
          </label>
          <input
            placeholder="Password"
            type="password"
            className="form-control mt-2"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
          />
        </div>

        <button
          type="submit"
          className="btn w-100 mt-5"
          style={{ backgroundColor: "black", color: "white" }}
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
