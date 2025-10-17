import React from "react";
import { useParams, Link } from "react-router-dom";
import { categoriesData } from "../data";
import "./style.css";

const SubCategories = () => {
  const { id } = useParams();
  const subCategories = categoriesData.filter(
    (cat) => cat.parent_id === parseInt(id)
  );

  if (subCategories.length === 0) return <p>No Subcategories Found</p>;

  return (
    <div className="subcategories-container">
      <h2 className="subcategories-heading">Choose Your Favourite </h2>
      <div className="subcategories-grid">
        {subCategories.map((cat) => (
          <div key={cat.id} className="subcategory-card">
            <Link to={`/products/${cat.id}`}>
              <img
                src={`${process.env.PUBLIC_URL}/images/${cat.image}`}
                alt={cat.title}
                className="subcategory-img"
              />
              <div className="overlay">
                <span className="subcategory-title">{cat.title}</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubCategories;
