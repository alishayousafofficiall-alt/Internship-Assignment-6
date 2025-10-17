import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { productsData, specialCakesData } from "../data";
import { eidSpecialProducts } from "../data";
import { CartContext } from "./CartPage";
import "./style.css";

const ProductDetail = () => {
  const { id, slug } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  let product = null;

  if (slug?.includes("eid")) {
    product = eidSpecialProducts.find(p => p.id === parseInt(id));
  } else if (slug) {
    product = specialCakesData.find(p => p.id === parseInt(id));
  } else {
    product = productsData.find(p => p.id === parseInt(id));
  }

  if (!product) return <p>Product not found</p>;

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = () => addToCart({ ...product, quantity });
   const buyNow = () =>
  navigate("/buy-now", {
    state: { tempCart: [{ ...product, quantity }], fromBuyNow: true },
  });



  return (
    <div className="product-detail-container">
      <div className="product-card">
        <img
          src={`${process.env.PUBLIC_URL}/images/${product.image}`}
          alt={product.title || product.name}
          className="product-image"
        />
        <div className="product-info">
          <h2 className="product-title">{product.title || product.name}</h2>
          <p className="product-description">
            {product.description || "Delicious product"}
          </p>
         <div className="product-price">
  {product.oldPrice ? (
    <>
      <span className="old-price">Rs {product.oldPrice}</span>
      <span className="new-price"> Rs {product.price}</span>
    </>
  ) : (
    <span className="new-price">Rs {product.price}</span>
  )}
</div>




          <div className="action-buttons">
            <button className="add-cart-btn" onClick={handleAddToCart}>Add to Cart 🛒</button>
            <button className="buy-now-btn" onClick={buyNow}>Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
