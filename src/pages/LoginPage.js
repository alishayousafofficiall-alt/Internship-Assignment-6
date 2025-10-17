import React, { useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./style.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // --- ADMIN login ---
    if (email === "admin@example.com" && password === "12345") {
      Cookies.set("email", email, { expires: 1 });
      Cookies.set("role", "admin", { expires: 1 });
      navigate("/dashboard"); // admin panel
      return;
    }

    // --- USER login (check registered user in localStorage) ---
    const savedUser = JSON.parse(localStorage.getItem("user"));
    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      Cookies.set("email", savedUser.email, { expires: 1 });
      Cookies.set("role", "user", { expires: 1 });
      navigate("/user-dashboard"); // user panel
      return;
    }

    setError("Invalid email or password");
  };

  return (
    <div className="rp-page">
      <form onSubmit={handleLogin} className="rainbow-form">
        <h2 className="title">Login</h2>
        {error && <p className="error">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input"
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input"
          required
        />

        <button type="submit" className="btn">
          Login
        </button>

        <p className="small">
          New to The Dessert Den?{" "}
          <span className="link" onClick={() => navigate("/register")}>
            Create Account
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
