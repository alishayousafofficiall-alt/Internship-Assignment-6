import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { eidSpecialProducts } from "../data";

const EidSpecial = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center", color: "#ff1493", marginBottom: "25px" }}>
         Eid Special Collection 
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {eidSpecialProducts.map((prod) => (
          <div
            key={prod.id}
            style={{
              position: "relative",
              width: "100%",
              aspectRatio: "1/1",
              borderRadius: "12px",
              overflow: "hidden",
              background: "#fff",
              boxShadow:
                hoveredCard === prod.id
                  ? "0 6px 20px rgba(255,105,180,0.4)"
                  : "0 2px 8px rgba(0,0,0,0.1)",
              transform:
                hoveredCard === prod.id ? "translateY(-5px)" : "translateY(0)",
              transition: "transform 0.3s, box-shadow 0.3s",
              cursor: "pointer",
            }}
            onMouseEnter={() => setHoveredCard(prod.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/${prod.image}`}
              alt={prod.name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />

            {/* Overlay same as Products.js */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: "rgba(255,105,180,0.5)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                opacity: hoveredCard === prod.id ? 1 : 0,
                transition: "opacity 0.3s",
              }}
            >
              <p
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                  textAlign: "center",
                  marginBottom: "10px",
                }}
              >
                {prod.name}
              </p>
              <button
                onClick={() => navigate(`/product-detail/${prod.id}/eid-special`)}
                style={{
                  padding: "6px 12px",
                  background: "#ff69b4",
                  color: "#fff",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                  transition: "background 0.3s",
                }}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EidSpecial;
