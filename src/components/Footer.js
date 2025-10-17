import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#ff69b4", color: "#fff", padding: "40px 20px", marginTop: "50px" }}>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", maxWidth: "1200px", margin: "0 auto", gap: "20px" }}>
        <div style={{ flex: "1 1 250px" }}>
          <h3 style={{ marginBottom: "15px" }}>Sweet Delights</h3>
          <p>
            Treat yourself to our <strong>handcrafted cakes</strong> made with love and the finest ingredients. Perfect for birthdays, anniversaries, or simply to add a little sweetness to your day!
          </p>
        </div>
        <div style={{ flex: "1 1 150px" }}>
          <h4 style={{ marginBottom: "15px" }}>Quick Links</h4>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li><Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link></li>
            <li><Link to="/special-cakes" style={{ color: "#fff", textDecoration: "none" }}>Special Cakes</Link></li>
            <li><Link to="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</Link></li>
          </ul>
        </div>
        <div style={{ flex: "1 1 150px" }}>
          <h4 style={{ marginBottom: "15px" }}>Follow Us</h4>
          <div style={{ display: "flex", gap: "10px", fontSize: "20px" }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}><FaTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}><FaYoutube /></a>
          </div>
        </div>
      </div>
      <div style={{ textAlign: "center", marginTop: "30px", fontSize: "14px" }}>
        &copy; {new Date().getFullYear()} The Desert Den. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
