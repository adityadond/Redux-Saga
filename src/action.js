import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  ADD_TO_CART,
  FETCH_DATA,
  REMOVE_CART,
  CLEAR_CART,
} from "./constants";
import { SET_SELECTED_ITEM, CLEAR_SELECTED_ITEM } from "./constants";

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

export const clickAction = (itemName) => ({
  type: itemName, // Use itemName as the action type
});

export const clearCart = () => ({
  type: CLEAR_CART,
});
