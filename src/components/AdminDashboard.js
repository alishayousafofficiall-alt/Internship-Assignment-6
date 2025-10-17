import React from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("email");
    Cookies.remove("role");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}> Admin Panel</h1>
      <p style={styles.text}>Welcome, Admin! You have full access.</p>
      <button onClick={handleLogout} style={styles.button}>Logout</button>
    </div>
  );
};

export default AdminDashboard;

const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
  },
  heading: {
    fontSize: "2rem",
    color: "#ff69b4",
  },
  text: {
    margin: "20px 0",
    fontSize: "1.2rem",
  },
  button: {
    padding: "10px 20px",
    background: "#ff69b4",
    border: "none",
    borderRadius: "6px",
    color: "white",
    cursor: "pointer",
    fontSize: "1rem",
  },
};
