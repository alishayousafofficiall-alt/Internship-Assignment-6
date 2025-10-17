import React from "react";
import { useLocation, Link } from "react-router-dom";

const SuccessPage = () => {
  const location = useLocation();
  const { cart, form } = location.state || {};

  if (!cart || cart.length === 0 || !form) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>No order details found!</h2>
        <Link to="/">Go to Home</Link>
      </div>
    );
  }

  const totalPrice = cart.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", textAlign: "center" }}>
      <h1>🎉 Thank You for Your Order! 🎉</h1>
      <p>Hi <strong>{form.name}</strong>, your order has been placed successfully.</p>

      <div style={{ border: "1px solid #ccc", padding: "10px", marginTop: "20px" }}>
        <h3>Order Summary</h3>
        {cart.map(item => (
          <div key={item.id} style={{ display: "flex", marginBottom: "10px" }}>
            <img src={`${process.env.PUBLIC_URL}/images/${item.image}`} alt={item.title || item.name} width="80" />
            <div style={{ marginLeft: "10px", textAlign: "left" }}>
              <p><strong>{item.title || item.name}</strong></p>
              <p>Quantity: {item.quantity || 1}</p>
              <p>Price: {item.price * (item.quantity || 1)}</p>
            </div>
          </div>
        ))}
        <h3>Total: {totalPrice}</h3>
      </div>

      <div style={{ marginTop: "20px" }}>
        <Link to="/">
          <button style={{ padding: "10px 20px" }}>Back to Home</button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
