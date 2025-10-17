import React, { useState, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CartContext } from "./CartPage";

const BuyNowPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { tempCart } = location.state || {}; // temp cart array
  const { clearCart } = useContext(CartContext); // clear main cart

  const [form, setForm] = useState({ name: "", email: "", address: "", phone: "" });

  if (!tempCart || tempCart.length === 0) return <p>No products selected</p>;

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handlePlaceOrder = () => {
    if (!form.name || !form.email || !form.address || !form.phone) {
      alert("Please fill all details");
      return;
    }
  // Only clear cart if order came from CartPage (not from Buy Now)
if (!location.state?.fromBuyNow) {
  clearCart();
}

navigate("/success", { state: { cart: tempCart, form } });

  };

  const grandTotal = tempCart.reduce(
    (acc, item) => acc + (item.price * (item.quantity || 1)),
    0
  );

  return (
    <div style={{ maxWidth: "900px", margin: "20px auto", display: "flex", gap: "20px" }}>
      
      {/* Left: Product Summary */}
      <div style={{ flex: 1, border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
        <h2>Products Summary</h2>
        {tempCart.map(item => (
          <div key={item.id} style={{ display: "flex", marginBottom: "15px", alignItems: "center" }}>
            <img src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt={item.title || item.name} width="80" />
            <div style={{ marginLeft: "10px" }}>
              <p><strong>{item.title || item.name}</strong></p>
              <p>Quantity: {item.quantity || 1}</p>
              <p>Total: {item.price * (item.quantity || 1)}</p>
            </div>
          </div>
        ))}
        <h3 style={{ borderTop: "1px solid #ccc", paddingTop: "10px" }}>Grand Total: {grandTotal}</h3>
      </div>

      {/* Right: User Form */}
      <div style={{ flex: 1, border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
        <h2>Enter Your Information</h2>
        <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} style={{ width: "100%", padding: "10px", marginBottom: "15px" }} />
        <input type="text" name="email" placeholder="Email" value={form.email} onChange={handleChange} style={{ width: "100%", padding: "10px", marginBottom: "15px" }} />
        <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} style={{ width: "100%", padding: "10px", marginBottom: "15px" }} />
        <input type="text" name="phone" placeholder="Phone Number" value={form.phone} onChange={handleChange} style={{ width: "100%", padding: "10px", marginBottom: "15px" }} />

        <button onClick={handlePlaceOrder} style={{ padding: "10px 20px", marginTop: "10px", width: "100%", backgroundColor: "#ff69b4", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
          Place Order
        </button>
      </div>

    </div>
  );
};

export default BuyNowPage; 