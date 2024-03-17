import React from "react";
import useProductDetail from "./useProductDetail";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const { id } = useParams();
  const { state, error, loading } = useProductDetail(id);
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {" "}
      <div>
        <h2>Product Details</h2>
        <ul>
          {Object.entries(state.productdetails).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong>{" "}
              {typeof value === "object" ? JSON.stringify(value) : value}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default ProductDetails;
