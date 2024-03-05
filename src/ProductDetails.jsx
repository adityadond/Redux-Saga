import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductDetails } from "./action";
import { useParams } from "react-router-dom";

function ProductDetails() {
  const dispatch = useDispatch();
  const { id } = useParams(); // Extracting the 'id' parameter from the URL
  const state = useSelector((state) => state.productDetailsReducer);
  console.log(state, "state");

  useEffect(() => {
    // Dispatching the action with the 'id' extracted from the URL
    dispatch(fetchProductDetails(id));
  }, []); // Adding 'id' to the dependency array to trigger useEffect when it changes

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
