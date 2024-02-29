import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./ProductDetails.css";

const ProductDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const products = useSelector((state) => state.reducer.data);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const selectedProduct = products.find((item) => item.id === parseInt(id));
    setProduct(selectedProduct);
  }, [id, products]);

  const handleGoBack = () => {
    navigate("/");
  };

  const renderRatingEmojis = (rating) => {
    const roundedRating = Math.round(rating * 10) / 10;
    console.log(`Rating: ${roundedRating}`);
    const fullStars = Math.floor(roundedRating);
    const halfStar = roundedRating - fullStars === 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    const emojis = [];
    for (let i = 0; i < fullStars; i++) {
      emojis.push("⭐️");
    }
    if (halfStar) {
      emojis.push("⭐️");
    }
    for (let i = 0; i < emptyStars; i++) {
      emojis.push("");
    }
    return emojis.join(" ");
  };

  return (
    <div>
      <h2>Product Details</h2>
      {product ? (
        <div className="product-details">
          <p>Title: {product.title}</p>
          <p>Category: {product.category}</p>
          <p>Description: {product.description}</p>
          <img src={product.image} alt={product.title} />
          <p>Price: ${product.price}</p>
          <p>Rating: {renderRatingEmojis(product.rating.rate)}</p>
          <p>({product.rating.count} reviews)</p>
          <button onClick={handleGoBack}>Go Back</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default ProductDetailsPage;
