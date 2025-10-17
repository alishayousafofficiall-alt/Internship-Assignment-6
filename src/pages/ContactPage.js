import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });

    setTimeout(() => setSubmitted(false), 4000); // Success message 4s ke liye
  };

  return (
    <div style={{ width: "100%", margin: 0, padding: 0, background: "#fffaf5" }}>
      {/* Top Banner */}
      <div style={{ width: "100%", margin: 0, padding: 0, overflow: "hidden", lineHeight: 0 }}>
        <img
          src={`${process.env.PUBLIC_URL}/images/cu.jpg`}
          alt="Contact Banner"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </div>

      {/* Contact Section */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          padding: "60px 5%",
          backgroundColor: "#fffaf5",
        }}
      >
        {/* Left Info Cards + Map */}
        <div style={{ flex: "1 1 48%", display: "flex", flexDirection: "column", gap: "20px" }}>
          {/* 2x2 Info Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
            <div style={infoCardStyle}>
              <i className="fas fa-phone-alt" style={iconStyle}></i>
              <h4>Phone</h4>
              <p>207-8767-452</p>
            </div>

            <div style={infoCardStyle}>
              <i className="fab fa-whatsapp" style={iconStyle}></i>
              <h4>WhatsApp</h4>
              <p>092-123-456-789</p>
            </div>

            <div style={infoCardStyle}>
              <i className="fas fa-envelope" style={iconStyle}></i>
              <h4>Email</h4>
              <p>support@thedesertden.com</p>
            </div>

            <div style={infoCardStyle}>
              <i className="fas fa-store" style={iconStyle}></i>
              <h4>Our Shop</h4>
              <p>-------------</p>
            </div>
          </div>

          {/* Map */}
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9941.53770615756!2d-0.1262364!3d51.5032979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604ce10a1cb29%3A0x7d93eeb4f548891c!2sLondon%20Eye!5e0!3m2!1sen!2suk!4v1679323491739!5m2!1sen!2suk"
            width="100%"
            height="250"
            style={{ border: 0, borderRadius: "10px", marginTop: "20px" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div
          style={{
            flex: "1 1 45%",
            background: "#ffffff",
            borderRadius: "12px",
            padding: "35px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
            marginLeft: "40px",
          }}
        >
          <h3 style={{ color: "#333", fontSize: "24px", marginBottom: "10px" }}>Get In Touch</h3>
          <p style={{ marginBottom: "20px", color: "#555" }}>We usually reply within a few hours. Let’s talk!</p>

          {submitted && (
            <div
              style={{
                backgroundColor: "#d4edda",
                color: "#155724",
                padding: "10px",
                borderRadius: "5px",
                textAlign: "center",
                marginBottom: "15px",
              }}
            >
              Thank you! Your message has been sent.
            </div>
          )}

          <form style={{ display: "flex", flexDirection: "column", gap: "15px" }} onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              style={inputStyle}
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              style={inputStyle}
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
              style={{ ...inputStyle, height: "120px" }}
            />
            <button
              type="submit"
              style={{
                padding: "12px",
                backgroundColor: "#ff69b4",
                color: "#fff",
                border: "none",
                borderRadius: "6px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              Send Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

// Styles
const infoCardStyle = {
  background: "#fff",
  padding: "20px 25px",
  borderRadius: "10px",
  textAlign: "center",
  boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
};

const iconStyle = {
  fontSize: "28px",
  color: "#ff69b4", // pink color
  marginBottom: "10px",
};

const inputStyle = {
  padding: "12px",
  border: "1px solid #ddd",
  borderRadius: "6px",
  outline: "none",
  fontSize: "15px",
};

// Export
export default ContactPage; 