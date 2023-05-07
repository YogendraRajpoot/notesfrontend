import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Notes1 from "../assets/notes1.jpg";
import Notes2 from "../assets/notes2.jpg";
import Notes3 from "../assets/notes3.avif";
import Notes4 from "../assets/notes4.jpg";

const Signup = () => {
  const HEIGHT = window.innerHeight;

  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = credentials;
    const response = await fetch(
      "https://notesbackend-qr9l.onrender.com/api/auth/signup",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );
    const json = await response.json();
    if (json.success) {
      // Save the auth token and redirect
      localStorage.setItem("token", json.authToken);
      navigate("/");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div
      className=" py-5"
      style={{
        height: `${HEIGHT - 0.075 * HEIGHT}px`,
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        backgroundColor: "black",
        backgroundImage: `url(${Notes2}) `,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "50%",
          gap: "30px",
          fontWeight: "800",
        }}
      >
        {/* <img
          src={Notes1}
          style={{
            maxWidth: "100%",
            maxHeight: "100%",
            // objectFit: "cover",
            borderRadius: "10px",
          }}
        /> */}
        <h2
          style={{
            textAlign: "center",
            fontWeight: "800",
            textShadow: "2px 2px 8px grey",
          }}
        >
          Capture, Organize, and Secure Your Thoughts
        </h2>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "800",
            textShadow: "2px 2px 8px grey",
          }}
        >
          Keep Your Ideas Safe
        </h2>
        <h2
          style={{
            textAlign: "center",
            fontWeight: "800",
            textShadow: "2px 2px 8px grey",
          }}
        >
          Unlock Your Creativity
        </h2>
      </div>
      <form
        onSubmit={handleSubmit}
        style={{
          minWidth: "20%",
          borderRadius: "10px",
          boxShadow: "11px 20px 15px grey",
          padding: "4%",
          // backgroundColor: "#c5ece9",
          // backgroundColor: "#f0967e",
          backgroundColor: "#ecdaa4",
        }}
      >
        <h3 className="text-center">User Signup</h3>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="string"
            className="form-control"
            value={credentials.name}
            onChange={onChange}
            id="name"
            name="name"
            aria-describedby="emailHelp"
          />
          {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            value={credentials.email}
            onChange={onChange}
            id="email"
            name="email"
            aria-describedby="emailHelp"
          />
          {/* <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div> */}
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.password}
            onChange={onChange}
            name="password"
            id="password"
            minLength={5}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cpassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            value={credentials.cpassword}
            onChange={onChange}
            name="cpassword"
            id="cpassword"
            minLength={5}
            required
          />
        </div>

        <button
          type="submit"
          className="btn w-100 mt-5"
          style={{ backgroundColor: "black", color: "white" }}
        >
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
