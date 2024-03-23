import {
  ADD_TO_CART,
  FETCH_DATA,
  REMOVE_CART,
  CLEAR_CART,
  CHANGE_QTY,
  FETCH_PRODUCT_DETAILS,
  SET_SELECTED_ITEM,
  CLEAR_SELECTED_ITEM,
  FETCH_SAGA_PRODUCT,
} from "./constants";

export const increment = () => ({
  type: "INCREMENT",
  payload: "value",
});

export const decrement = () => ({
  type: "DECREMENT",
  payload: "value",
});

/*data fetching/*/
export const fetchData = (params) => ({
  type: FETCH_DATA,
  payload: params,
});

//product details
export const fetchProductDetails = (id) => ({
  type: FETCH_PRODUCT_DETAILS,
  payload: id,
});

export const addToCart = (item) => ({
  type: ADD_TO_CART,
  item,
});

export const removeCart = (itemId) => {
  return {
    type: REMOVE_CART,
    itemId,
  };
};

// action.js

export const setSelectedItem = () => ({
  type: SET_SELECTED_ITEM,
});

export const clearCheckBox = () => {
  return {
    type: CLEAR_SELECTED_ITEM,
  };
};

export const clickAction = (itemName, checkValue) => ({
  type: itemName,
  checkValue: checkValue, // Use itemName as the action type
});

export const clearCart = () => ({
  type: CLEAR_CART,
});

export const changeQty = (id, qty) => ({
  type: CHANGE_QTY,
  id: id,
  qty: qty,
});

export const formData = (info) => ({
  type: "FORM_DATA",
  payload: info,
});

export const sagaProduct = () => ({
  type: FETCH_SAGA_PRODUCT,
});
