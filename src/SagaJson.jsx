import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaProduct, postSagaProduct } from "./action";

const SagaJson = () => {
  const dispatch = useDispatch();
  const sagaProductData = useSelector(
    (state) => state.sagaReducer.postSagaProduct
  );
  console.log(sagaProductData, "saga product");

  const clickHandler = () => {
    dispatch(postSagaProduct());
  };

  console.log(sagaProductData, "json");
  return (
    <div>
      SagaJson
      <ul>
        {Object.entries(sagaProductData).map(([key, value]) => (
          <li key={key}>
            <strong>{key}: </strong>
            {value}
          </li>
        ))}
      </ul>
      <button onClick={clickHandler}>Click Me</button>
    </div>
  );
};

export default SagaJson;
