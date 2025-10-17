import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { categoriesData, specialCakes } from "../data";
import { CartContext } from "../pages/CartPage";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const { cart } = useContext(CartContext);

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (!value.trim()) {
      setSearchResults([]);
      return;
    }

    const filteredCategories = categoriesData
      .filter(cat => cat.title.toLowerCase().includes(value.toLowerCase()))
      .map(cat => ({ ...cat, type: "category" }));

    const filteredSpecialCakes = specialCakes
      .filter(cake => cake.name.toLowerCase().includes(value.toLowerCase()))
      .map(cake => ({ ...cake, type: "special" }));

    setSearchResults([...filteredCategories, ...filteredSpecialCakes]);
  };

  const handleItemClick = (item) => {
    if (item.type === "category") navigate(`/products/${item.id}`);
    else if (item.type === "special") navigate(`/special-cakes/${item.slug}`);

    setSearchTerm("");
    setSearchResults([]);
  };

  return (
    <div>
      {/* ===== Top Navbar ===== */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#ff69b4",
        padding: "10px 20px",
        color: "white",
        flexWrap: "wrap"
      }}>
  
{/* Left: Logo */}
{/* Left: Logo with styled text */}
<div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
  <Link 
    to="/" 
    style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
  >
    {/* Circular Logo Image */}
    <img 
      src="/images/0.jpg" // your logo path
      alt="The Desert Den Logo"
      style={{ 
        width: "50px", 
        height: "50px", 
        borderRadius: "50%",  // makes image circular
        objectFit: "cover",
        border: "2px solid #fff", // optional border
        boxShadow: "0 2px 6px rgba(0,0,0,0.3)" // subtle shadow
      }}
    />
    
    {/* Styled Text */}
    <span style={{ 
      color: "#fff",          // white text
      fontWeight: "700",      // bold
      fontSize: "1.3rem",     // slightly bigger
      letterSpacing: "1px",   // spacing between letters
      textShadow: "1px 1px 2px rgba(0,0,0,0.5)" // subtle text shadow
    }}>
      The Desert Den
    </span>
  </Link>
</div>



        {/* Center: Search Bar */}
        <div style={{ position: "relative", flex: 1, maxWidth: "400px", margin: "0 20px" }}>
          <input
            type="text"
            placeholder="Search Categories & Special Cakes..."
            value={searchTerm}
            onChange={handleSearch}
            style={{
              width: "100%",
              padding: "8px 35px 8px 10px",
              borderRadius: "5px",
              border: "none",
              fontSize: "1rem",
              position: "relative",
              zIndex: 2
            }}
          />
          <span style={{
            position: "absolute",
            right: "10px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#fff",
            cursor: "pointer",
            zIndex: 2
          }}>🔍</span>

          {searchResults.length > 0 && (
            <ul style={{
              position: "absolute",
              top: "100%", // below input
              left: 0,
              width: "100%",
              background: "#ff69b4",       // ✅ pink background
              color: "#fff",               // ✅ white text
              boxShadow: "0 2px 5px rgba(0,0,0,0.2)",
              borderRadius: "5px",
              maxHeight: "200px",
              overflowY: "auto",
              zIndex: 999,
              padding: "5px",
              margin: 0,
              listStyle: "none"
            }}>
              {searchResults.map(item => (
                <li
                  key={item.id}
                  onClick={() => handleItemClick(item)}
                  style={{
                    padding: "5px",
                    cursor: "pointer",
                    borderBottom: "1px solid rgba(255,255,255,0.3)"
                  }}
                >
                  {item.type === "category" ? item.title : item.name} {item.type === "special" && "(Special)"}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Right Links */}
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
          <Link to="/about" style={{ color: "white", textDecoration: "none" }}>About</Link>
          <Link to="/menu" style={{ color: "white", textDecoration: "none" }}>Menu</Link>
        </div>
      </div>

      {/* ===== Second Navbar (Right aligned) ===== */}
      <div style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "#ff1493",
        padding: "6px 20px",
        color: "white",
        gap: "20px"
      }}>
        <Link to="/login" style={{ color: "white", textDecoration: "none" }}>Login</Link>
        <Link to="/cart" style={{ color: "white", position: "relative", textDecoration: "none" }}>
          Cart 🛒
          {cart.length > 0 && (
            <span style={{
              position: "absolute",
              top: "-5px",
              right: "-10px",
              background: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 6px",
              fontSize: "12px"
            }}>
              {cart.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
