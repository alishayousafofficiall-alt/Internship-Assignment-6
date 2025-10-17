import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { specialCakes } from "../data";

const SpecialCakesPage = () => {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) observer.observe(containerRef.current);
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Special Cakes</h2>

      <div
        ref={containerRef}
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
          justifyContent: "center",
          marginTop: "20px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(50px)",
          transition: "opacity 0.8s ease, transform 0.8s ease"
        }}
      >
        {specialCakes.map((cake) => (
          <div
            key={cake.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              width: "30%",   // 3 cards per row
              minWidth: "180px",
              textAlign: "center",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "10px"
            }}
          >
            <Link to={`/special-cakes/${cake.slug}`} style={{ textDecoration: "none", width: "100%" }}>
              <div
                style={{
                  width: "100%",
                  paddingTop: "100%", 
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "8px"
                }}
              >
                <img
                  src={`/images/${cake.image}`}
                  alt={cake.name}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "contain", 
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
              <p style={{ fontWeight: "bold", marginTop: "10px", color: "#333", fontSize: "16px" }}>
                {cake.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpecialCakesPage;
