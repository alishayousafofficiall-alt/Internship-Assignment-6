import React, { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ✅ 1. Create CartContext
export const CartContext = createContext();

// ✅ 2. CartProvider with localStorage persistence
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (!exists) {
      setCart([...cart, { ...product, quantity: 1, selected: true }]);
      alert(`${product.title || product.name} added to cart!`);
    } else {
      alert("Product already in cart!");
    }
  };

  const removeFromCart = (id) => setCart(cart.filter(item => item.id !== id));

  const clearCart = () => setCart([]);

  const updateQuantity = (id, quantity) => {
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const toggleSelect = (id) => {
    setCart(cart.map(item => item.id === id ? { ...item, selected: !(item.selected !== false) } : item));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity, toggleSelect }}>
      {children}
    </CartContext.Provider>
  );
};

//  3. CartPage Component
export const CartPage = () => {
  const { cart, removeFromCart, clearCart, updateQuantity, toggleSelect } = useContext(CartContext);
  const navigate = useNavigate();

  if (!cart || cart.length === 0) return <p style={{ textAlign: "center", marginTop: "50px" }}>Your cart is empty.</p>;

  const handleCheckout = () => {
    const selectedItems = cart.filter(item => item.selected !== false);
    if (selectedItems.length === 0) {
      alert("Please select at least one item to proceed.");
      return;
    }
    navigate("/buy-now", { state: { tempCart: selectedItems } });
  };

  const grandTotal = cart.filter(item => item.selected !== false)
                         .reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);

  return (
    <div style={{ maxWidth: "900px", margin: "20px auto", display: "flex", gap: "20px" }}>
      {/* Cart Items */}
      <div style={{ flex: 2, border: "1px solid #ccc", padding: "20px", borderRadius: "8px" }}>
        <h2>Your Cart</h2>
        {cart.map(item => (
          <div key={item.id} style={{ display: "flex", marginBottom: "15px", alignItems: "center", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
            <input type="checkbox" checked={item.selected !== false} onChange={() => toggleSelect(item.id)} style={{ marginRight: "10px" }} />
            <img src={`/images/${item.image}`} alt={item.title || item.name} width="80" />
            <div style={{ marginLeft: "15px", flex: 1 }}>
              <p style={{ fontWeight: "bold" }}>{item.title || item.name}</p>
              <p>Price: {item.price}</p>
              <p>
                Quantity: 
                <button onClick={() => updateQuantity(item.id, Math.max(1, (item.quantity || 1) - 1))} style={{ margin: "0 5px" }}>-</button>
                {item.quantity || 1}
                <button onClick={() => updateQuantity(item.id, (item.quantity || 1) + 1)} style={{ margin: "0 5px" }}>+</button>
              </p>
              <p>Total: {item.price * (item.quantity || 1)}</p>
            </div>
            <button onClick={() => removeFromCart(item.id)} style={{ padding: "5px 10px", backgroundColor: "#ff4d4f", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Remove</button>
          </div>
        ))}
        <h3 style={{ borderTop: "1px solid #ccc", paddingTop: "15px", textAlign: "right" }}>Grand Total: {grandTotal}</h3>
      </div>

      {/* Actions */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "10px" }}>
        <button onClick={handleCheckout} style={{ padding: "15px", backgroundColor: "#ff69b4", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
          Proceed to Checkout
        </button>
        <button onClick={clearCart} style={{ padding: "15px", backgroundColor: "#f0f0f0", color: "#333", border: "1px solid #ccc", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

