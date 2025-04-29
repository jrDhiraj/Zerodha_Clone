import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa"; // Importing icons
import './Signup.css'; // Importing a CSS file for styles

function Signup() {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await axios.post(
        "http://localhost:3000/signup",
        { ...inputValue },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (data.success) {
        alert("Signup successful!");
        setInputValue({ username: "", email: "", password: "" });
        navigate("/login");
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (e) {
      console.error("Error:", e);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="row">
      <div className="col-6">
        <div className="signup-container mt-5 mb-5">


          <div className="signup-form mb-t">
            <h2>Create Your Trading Account</h2>
            <p>Join us and start trading with confidence!</p>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <FaUser className="icon" />
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your username"
                  value={inputValue.username}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="input-group">
                <FaEnvelope className="icon" />
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={inputValue.email}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <div className="input-group">
                <FaLock className="icon" />
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={inputValue.password}
                  onChange={handleOnChange}
                  required
                />
              </div>

              <button type="submit">Sign Up</button>
            </form>

            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="col secure mt-5">
        <img src="../assets/secure-logo-2024.png" alt=""/>

        <p className="gap-2">Congratulations on taking the first step toward financial freedom!  By signing up, you've joined a community of traders who are passionate about market opportunities, strategic investments, and achieving financial growth. Whether you're a beginner or an experienced trader, our platform provides the tools,  insights, and real-time data to help you make informed decisions.

          Stay ahead of the markets, explore different  trading strategies, and take control of your financial future. Your journey to smarter trading starts now!</p>
      </div>
      <div className="col-2"></div>
    </div>

  );
}

export default Signup;