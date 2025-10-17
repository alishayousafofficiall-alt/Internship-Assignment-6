import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { productsData, specialCakesData } from "../data";

const Products = () => {
  const { id, slug } = useParams();
  let products = [];

  if (slug) {
    products = specialCakesData.filter(prod => prod.slug === slug);
  } else if (id) {
    products = productsData.filter(prod => prod.category_id === parseInt(id));
  }

  // Track hover state for each product
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Products</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
          gap: "20px",
        }}
      >
        {products.length === 0 ? (
          <p>No products found.</p>
        ) : (
          products.map(prod => (
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
                src={`/images/${prod.image}`}
                alt={prod.title || prod.name}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
              {/* Overlay */}
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
                  {prod.title || prod.name}
                </p>
                <Link
                  to={
                    slug
                      ? `/product-detail/${prod.id}/${slug}`
                      : `/product-detail/${prod.id}`
                  }
                  style={{
                    padding: "6px 12px",
                    background: "#ff69b4",
                    color: "#fff",
                    borderRadius: "6px",
                    textDecoration: "none",
                    fontSize: "0.9rem",
                    transition: "background 0.3s",
                  }}
                >
                  View Details
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Products;
