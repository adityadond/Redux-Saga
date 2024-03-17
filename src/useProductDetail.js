import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductDetails } from "./action";

function useProductDetails(id) {
  const dispatch = useDispatch();

  const state = useSelector((state) => state.productDetailsReducer);
  console.log(state, "state");
  const error = useSelector((state) => state.productDetailsReducer.error);
  const loading = useSelector((state) => state.productDetailsReducer.loading);

  useEffect(() => {
    dispatch(fetchProductDetails(id));
  }, []);

  return { state, error, loading };
}
export default useProductDetails;
