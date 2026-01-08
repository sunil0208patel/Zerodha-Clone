import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";

const initialData = { username: "", email: "", password: "" };

const Signup = () => {
  const [userData, setUserData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // clear error on typing
  };

  const validate = () => {
    const newErrors = {};

    if (!userData.username.trim()) newErrors.username = "Username is required";
    if (!userData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email))
      newErrors.email = "Invalid email format";

    if (!userData.password.trim()) newErrors.password = "Password is required";
    else if (userData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignupBtn = (e) => {
    e.preventDefault();
    if (!validate()) return;

    // ✅ Save to localStorage
    localStorage.setItem("user", JSON.stringify(userData));

    setUserData(initialData);
    navigate("/login");
  };

  return (
    <div className="container d-flex justify-content-center mt-5">
      <div className="card" style={{ width: "24rem" }}>
        <div className="card-body">
          <h3 className="text-center">Sign Up</h3>

          <form onSubmit={handleSignupBtn}>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className={`form-control mb-3 ${errors.username ? "is-invalid" : ""}`}
              value={userData.username}
              onChange={handleInputData}
            />
            <div className="invalid-feedback">{errors.username}</div>

            <input
              type="email"
              name="email"
              placeholder="Email"
              className={`form-control mb-3 ${errors.email ? "is-invalid" : ""}`}
              value={userData.email}
              onChange={handleInputData}
            />
            <div className="invalid-feedback">{errors.email}</div>

            <input
              type="password"
              name="password"
              placeholder="Password"
              className={`form-control mb-3 ${errors.password ? "is-invalid" : ""}`}
              value={userData.password}
              onChange={handleInputData}
            />
            <div className="invalid-feedback">{errors.password}</div>

            <button className="btn btn-primary w-100">Create Account</button>
          </form>

          <div className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
