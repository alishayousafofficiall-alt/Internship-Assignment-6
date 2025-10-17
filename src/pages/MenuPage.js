import React from "react";
import "./style.css";

const MenuPage = () => {
  return (
    <div className="menu-page-container">
      <h2 className="menu-title">Our Menu</h2>

      <div className="menu-images">
        <div className="menu-item">
          <img src="/images/me1.jpg" alt="Menu 1" />
        </div>

        <div className="menu-item">
          <img src="/images/me2.jpg" alt="Menu 2" />
        </div>
      </div>
    </div>
  );
};

export default MenuPage;
