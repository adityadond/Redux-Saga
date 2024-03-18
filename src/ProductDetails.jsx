import React from "react";
import useProductDetail from "./useProductDetail";
import { useParams } from "react-router-dom";
import "./ProductDetails.css"; // Import CSS file for styling

function ProductDetails() {
  const { id } = useParams();
  const { state, error, loading } = useProductDetail(id);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const { category, description, image, price, rating, title } =
    state.productdetails;

  return (
    <div className="product-details-container">
      <h2 className="product-details-title">{title}</h2>
      <div className="product-details-content">
        <div className="product-details-image">
          <img src={image} alt={title} />
        </div>
        <div className="product-details-info">
          <p>
            <strong>Category:</strong>{" "}
            <span className="category">{category}</span>
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Price:</strong> ${price}
          </p>
          <p></p>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
