import React, { useState, useEffect } from "react";
import Categories from "./Categories";
import SpecialCakes from "./SpecialCakes";
import { Carousel, Modal, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate(); 
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    // ✅ Timer to show popup after 2 seconds
    const timer = setTimeout(() => setShowModal(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => setShowModal(false);

  const handleNavigate = () => {
    setShowModal(false);
    navigate("/eidspecial"); 
  };

  return (
    <div>
      {/*  Slider Section */}
      <Carousel fade interval={3000}>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/1.jpg" alt="Slide 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/2.jpg" alt="Slide 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="/images/3.jpg" alt="Slide 3" />
        </Carousel.Item>
      </Carousel>

      {/* Categories Section */}
      <Categories />

      {/* Video + About Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "40px 0",
          flexWrap: "wrap",
          gap: "20px",
          background: "#f0fff0",
          padding: "40px 20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {/* Video Left */}
        <div style={{ flex: "1 1 400px", textAlign: "center" }}>
          <video width="100%" controls>
            <source src="/images/4.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        {/* Text Right */}
        <div style={{ flex: "1 1 400px", padding: "20px" }}>
          <h2> Indulge in Our Delectable Cakes </h2>
          <p>
            At Sweet Delights, every cake is a masterpiece crafted with love and
            the finest ingredients. From rich chocolate to creamy vanilla, fruity
            delights to custom celebration cakes, we make every bite a moment of joy.
          </p>
          <p>
            Perfect for birthdays, anniversaries, or just treating yourself, our
            cakes are baked fresh daily and decorated to delight your senses.
            Experience the magic of sweetness with every slice!
          </p>
        </div>
      </div>

      {/* Special Cakes Section */}
      <SpecialCakes />

      {/*  Our Mission Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          margin: "60px 0",
          flexWrap: "wrap",
          gap: "30px",
          background: "#f0fff0",
          padding: "40px 20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        }}
      >
        {/* Mission Text */}
        <div style={{ flex: "1 1 400px", padding: "20px" }}>
          <h2> Our Mission</h2>
          <p>
            Our mission is to spread happiness through delicious and beautifully
            crafted cakes. We believe every celebration deserves a special touch
            of sweetness, made with love, care, and passion.
          </p>
          <button
            style={{
              marginTop: "20px",
              padding: "12px 24px",
              backgroundColor: "#ff69b4",
              border: "none",
              borderRadius: "6px",
              color: "white",
              fontSize: "16px",
              cursor: "pointer",
              boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
            }}
            onClick={() => navigate("/contact")}
          >
            Contact Us
          </button>
        </div>

        {/* 3 Images */}
        <div
          style={{
            flex: "1 1 400px",
            display: "flex",
            gap: "15px",
            justifyContent: "center",
          }}
        >
          <img
            src="/images/sd3.jpg"
            alt="Mission 1"
            style={{
              width: "32%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
          <img
            src="/images/cc8.jpg"
            alt="Mission 2"
            style={{
              width: "32%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
          <img
            src="/images/sj3.jpg"
            alt="Mission 3"
            style={{
              width: "32%",
              height: "220px",
              objectFit: "cover",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            }}
          />
        </div>
      </div>

    <Modal
  show={showModal}
  onHide={handleClose}
  centered
  size="md"
  backdrop="static"
  keyboard={false}
>
  <Modal.Body
    style={{
      textAlign: "center",
      background: "linear-gradient(145deg, #fff5f8, #ffe6f0)",
      borderRadius: "20px",
      padding: "25px",
      position: "relative",
      boxShadow: "0 4px 20px rgba(255,105,180,0.3)",
    }}
  >
    {/* Close Button (Top Right) */}
    <button
      onClick={handleClose}
      style={{
        position: "absolute",
        top: "12px",
        right: "15px",
        background: "transparent",
        border: "none",
        fontSize: "22px",
        color: "#ff69b4",
        cursor: "pointer",
      }}
    >
      ×
    </button>

    {/*  Heading */}
    <h2 style={{ color: "#ff69b4", marginBottom: "10px", fontWeight: "bold" }}>
      Eid Special Offer!
    </h2>

    {/* Description */}
    <p style={{ fontSize: "16px", color: "#444", marginBottom: "15px" }}>
      Celebrate Eid with sweetness  — explore our exclusive cakes, donuts, and drinks made for the festive season!
    </p>

    {/*  Image */}
    <img
  src="/images/eid.jpg"
  alt="Eid Special"
  style={{
    width: "75%",
    borderRadius: "12px",
    marginTop: "5px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease",
  }}
  onMouseOver={(e) => (e.target.style.transform = "scale(1.05)")}
  onMouseOut={(e) => (e.target.style.transform = "scale(1.0)")}
/>

{/*  Action Button */}
<div style={{ marginTop: "20px" }}>
  <button
    style={{
      backgroundColor: "#ff69b4",
      color: "#fff",
      border: "none",
      padding: "10px 24px",
      borderRadius: "8px",
      fontSize: "15px",
      fontWeight: "bold",
      boxShadow: "0 3px 6px rgba(0,0,0,0.1)",
      transition: "background 0.3s",
      cursor: "pointer",
    }}
    onClick={handleNavigate} 
    onMouseOver={(e) => (e.target.style.backgroundColor = "#ff4fa0")}
    onMouseOut={(e) => (e.target.style.backgroundColor = "#ff69b4")}
  >
    View Eid Specials
  </button>
</div>
  </Modal.Body>
</Modal>


    </div>
  );
};

export default Home;
