// Categories.js
import React from "react";
import { Link } from "react-router-dom";
import { categoriesData } from "../data";
import "./style.css";

const Categories = () => {
  const mainCategories = categoriesData.filter(cat => cat.parent_id === null);

  return (
    <div className="categories-container">
      <h2>Main Categories</h2>
      <div className="categories-grid">
        {mainCategories.map(cat => (
          <div key={cat.id} className="category-card">
            <Link to={`/category/${cat.id}`}>
              <img src={`/images/${cat.image}`} alt={cat.title} className="category-img"/>
              <div className="overlay">
                <span className="category-title">{cat.title}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
