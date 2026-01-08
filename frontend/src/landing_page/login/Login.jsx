import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "./Login.css";

const initialData = { email: "", password: "" };

const Login = () => {
  const [userData, setUserData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setUserData({
        email: location.state.email || "",
        password: location.state.password || "",
      });
    }
  }, [location.state]);

  const handleInputData = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    
    if (!userData.email.trim()) newErrors.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email))
      newErrors.email = "Invalid email format";

    if (!userData.password.trim()) newErrors.password = "Password is required";
    else if (userData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginBtn = (e) => {
    e.preventDefault();
    if (!validate()) return;

  
    navigate("/dash");
  };

  return (
    <div className="container d-flex justify-content-center mt-4">
      <div className="card mt-5 mb-5" style={{ width: "24rem" }}>
        <div className="card-body">
          <h3 className="text-center mb-3">Login</h3>

          <form onSubmit={handleLoginBtn}>
            <div className="mb-4">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={userData.email}
                className={`form-control ${errors.email ? "is-invalid" : ""}`}
                onChange={handleInputData}
              />
              <div className="invalid-feedback">{errors.email}</div>
            </div>

            <div className="mb-4">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={userData.password}
                className={`form-control ${errors.password ? "is-invalid" : ""}`}
                onChange={handleInputData}
              />
              <div className="invalid-feedback">{errors.password}</div>
            </div>

            <button type="submit" className="btn btn-primary w-100 mb-4">
              Login
            </button>
          </form>

          <div className="text-center">
            Don&apos;t have an account? <Link to="/signup">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
