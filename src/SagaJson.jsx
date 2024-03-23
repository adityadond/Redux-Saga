import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sagaProduct } from "./action";

const SagaJson = () => {
  const dispatch = useDispatch();
  const sagaProductData = useSelector((state) => state.sagaReducer.sagaProduct);

  useEffect(() => {
    // Call sagaProduct action when the component is mounted
    dispatch(sagaProduct());
  }, [dispatch]);

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
    </div>
  );
};

export default SagaJson;
