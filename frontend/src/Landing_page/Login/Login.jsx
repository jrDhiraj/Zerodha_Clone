import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { FaEnvelope, FaLock } from "react-icons/fa";
import "../signup/Signup.css";

export default function Login() {
  const navigation = useNavigate();
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
  });

  const { email, password } = inputValue;
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const handleError = (err) =>
    toast.error(err, {
      position: "bottom-left",
    });

  const handleSuccess = (msg) =>
    toast.success(msg, {
      position: "bottom-left",
    });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "http://localhost:3000/login",
        {
          ...inputValue,
        },
        { withCredentials: true }
      );
      console.log(data);
      const { success, message } = data;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigation("/");
        }, 1000);
      } else {
        handleError(message);
      }
    } catch (error) {
      console.log("Error", error);
    }
    setInputValue({
      ...inputValue,
      email: "",
      password: "",
    });
  };

  return (
    <div className="row">
      <div className="col-6">
        <div className="signup-container mt-5 mb-5">
          <div className="signup-form mb-t">
            <h2>Login Account</h2>
            <p>Access your trading dashboard instantly!</p>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="Enter your email"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <div className="input-group">
                <FaLock className="icon" />
                <input
                  type="password"
                  name="password"
                  value={password}
                  placeholder="Enter your password"
                  onChange={handleOnChange}
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
            <p>
              Don't have an account? <Link to={'/signup'}>Signup</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="col secure mt-5">
        <img src="../assets/secure-logo-2024.png" alt="" />
        <p className="gap-2">
          Securely access your account and stay ahead in the trading world.
          Keep track of market trends and manage your investments with ease.
        </p>
      </div>
      <div className="col-2"></div>
      <ToastContainer />
    </div>
  );
}
