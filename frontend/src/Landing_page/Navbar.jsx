import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();
  const [cookies, setCookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        return;
      }

      try {
        const { data } = await axios.post(
          "http://localhost:3000",
          {},
          { withCredentials: true }
        );

        if (data.status) {
          setUsername(data.user);
          toast.success(`Hello ${data.user}`, { position: "top-right" });
        } else {
          removeCookie("token");
          navigate("/login");
        }
      } catch (error) {
        console.error("Error verifying cookie:", error);
        removeCookie("token");
        navigate("/login");
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  // Logout Function
  const Logout = () => {
    removeCookie("token");
    setUsername(""); // Reset username state
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom border-2" style={{ backgroundColor: "#fff" }}>
      <div className="container p-2">
        <Link className="navbar-brand" to={"/"}>
          <img src="../assets/logo.svg" alt="Logo" style={{ width: "25%" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            {cookies.token ? (
              <>
                <li className="nav-item mx-3">
                  <span className="nav-link active">Welcome, {username}</span>
                </li>
                <li className="nav-item mx-3">  
                  <Link className="nav-link" to={"http://localhost:5174"}>Dashboard</Link>
                </li>
                <li className="nav-item mx-3">
                  <button className="btn btn-outline" onClick={Logout}>Logout</button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item mx-3">
                  <Link className="nav-link active" to={"/signup"}>Signup</Link>
                </li>
                <li className="nav-item mx-3">
                  <Link className="nav-link active" to={"/login"}>Login</Link>
                </li>
              </>
            )}
            <li className="nav-item mx-3">
              <Link className="nav-link active" to={"/about"}>About</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link active" to={"/products"}>Products</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link active" to={"/pricing"}>Pricing</Link>
            </li>
            <li className="nav-item mx-3">
              <Link className="nav-link active" to={"/support"}>Support</Link>
            </li>
          </ul>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
}

export default Navbar;
