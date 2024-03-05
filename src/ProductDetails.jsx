import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "./action";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const state = useSelector((state) => state.productDetailsReducer);
  console.log(state, "state");
  const error = useSelector((state) => state.productDetailsReducer.error);
  const loading = useSelector((state) => state.productDetailsReducer.loading);
  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, []);

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
