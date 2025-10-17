import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css"; // same rainbow style

const RegisterPage = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();

    if (!username || !email || !password) {
      setError("All fields are required");
      return;
    }

    // Save user in localStorage
    const newUser = { username, email, password };
    localStorage.setItem("user", JSON.stringify(newUser));

    setSuccess(" Account created successfully! Please login.");
    setError("");
    setUsername("");
    setEmail("");
    setPassword("");

    // 2 sec baad login page par bhejo
    setTimeout(() => {
      navigate("/login");
    }, 2000);
  };

  return (
    <div className="rp-page">
      <form onSubmit={handleRegister} className="rainbow-form">
        <h2 className="title">Register</h2>
        {error && <p className="error">{error}</p>}
        {success && <p style={{ color: "lightgreen", textAlign: "center" }}>{success}</p>}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="input"
          required
        />

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
          Register
        </button>

        <p className="small">
          Already have an account?{" "}
          <span className="link" onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
