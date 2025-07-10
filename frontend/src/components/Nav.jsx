import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Nav.css";
import logo from "../assets/logo.jpg"; // Adjust the path as necessary

const Nav = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem("user");

  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };

  return (
    <nav className="navbar">
      {/* <h2 className="logo">E-Comm</h2> */}
      <div onClick={() => navigate("/")}> 
        <img className="logo" alt="logo" src={logo}></img>
      </div>
      <ul className="nav-links">
        {auth ? (
          <>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/add">Add Product</Link>
            </li>
            <li>
              <Link to="/update">Update Products</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>

            <li>
              <Link onClick={logout} to="/SignUp">
                Logout({JSON.parse(auth).name})
              </Link>
            </li>
          </>
        ) : (
          <>
            <li>
              {" "}
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Nav;
