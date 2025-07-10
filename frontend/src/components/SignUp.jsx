import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.css';

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  // Redirect to home if user is already logged in
  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const collectData = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      let response = await fetch("http://localhost:5000/register", {
        method: "POST",
        body: JSON.stringify({ name, email, password }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      let result = await response.json();
      console.warn("Server Response:", result);

      if (result && result._id) {
        alert("Registration successful! Please login.");
        navigate("/login"); // ✅ Redirect to login page
      } else {
        alert("Registration failed.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={collectData}>
        <h2>Register Here</h2>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full Name"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Sign Up</button>

        {/* 👉 Redirect to login page */}
        <button
          type="button"
          className="login-redirect"
          onClick={() => navigate("/login")}
        >
          Already have an account? Login
        </button>
      </form>
    </div>
  );
};

export default SignUp;
