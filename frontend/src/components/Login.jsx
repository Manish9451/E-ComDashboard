import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import './SignUp.css'; // Reusing the same styles

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      navigate("/");
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }

    try {
      let response = await fetch("http://localhost:5000/login", {
        method: "POST",
        body: JSON.stringify({ email, password }),
        headers: {
          "Content-Type": "application/json"
        }
      });

      let result = await response.json();
      console.log("Login result:", result);

      if (result && result._id) {
        localStorage.setItem("user", JSON.stringify(result));
        navigate("/");
      } else {
        alert("Invalid email or password.");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleLogin}>
        <h2>Login</h2>
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
        <button type="submit">Login</button>

        {/* 👉 Redirect to Signup */}
        <button
          type="button"
          className="login-redirect"
          onClick={() => navigate("/signup")}
        >
          Don't have an account? Sign Up
        </button>
      </form>
    </div>
  );
};

export default Login;
