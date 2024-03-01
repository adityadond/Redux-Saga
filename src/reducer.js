import {
  FETCH_DATA_SUCCESS,
  ADD_TO_CART,
  REMOVE_CART,
  CLEAR_CART,
  CHANGE_QTY,
} from "./constants";

import { combineReducers } from "redux";
import { SET_SELECTED_ITEM, CLEAR_SELECTED_ITEM } from "./constants";

const initialCheck = {
  selectedItem: false,
};

const initialState = {
  num: 0,
  data: [],
  loading: false,

  error: null,
};

const cartState = {
  cartItems: [],
};

const clickSelection = {
  click: [],
  allItems: [], // Initialize all items
};

const check = {
  selectedItem1: false,
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        num: state.num + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        num: state.num - 1,
      };

    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload, // Assuming action.payload is an array of todos
        loading: false,
        error: null,
      };

    default:
      return state;
  }
};
export const cartReducer = (state = cartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Check if the item is already in the cart
      const existingItemIndex = state.cartItems.findIndex(
        (item) => item.id === action.item.id
      );

      if (existingItemIndex !== -1) {
        // If the item is already in the cart, increment its quantity
        const updatedCartItems = [...state.cartItems];
        updatedCartItems[existingItemIndex].quantity++;
        return {
          ...state,
          cartItems: updatedCartItems,
        };
      } else {
        // If the item is not in the cart, add it
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.item, quantity: 1 }],
        };
      }
    case REMOVE_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.itemId),
      };
    case CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };
    case CHANGE_QTY:
      console.log("CHANGE_QTY action dispatched");
      console.log("Action ID:", action.id);
      console.log("Action Quantity:", action.qty);
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          console.log(item.id, action.id, "ids");
          if (item.id === action.id) {
            console.log("Updating quantity for item with ID:", action.id);
            return {
              ...item,
              quantity: action.qty,
            };
          } else {
            return item;
          }
        }),
      };
    default:
      return state;
  }
};

export const clickReducer = (state = clickSelection, action) => {
  switch (action.type) {
    case "All":
      return {
        ...state,
        allItems: action.item, // Set all items to action.item
        click: [...action.item], // Copy action.item to click
      };
    case "men's clothing":
      const mensClothing = state.allItems.filter(
        (item) => item.category === "men's clothing"
      );
      return {
        ...state,
        click: mensClothing, // Set items filtered by men's clothing
      };
    case "electronics":
      const electronics = state.allItems.filter(
        (item) => item.category === "electronics"
      );
      return {
        ...state,
        click: electronics, // Set items filtered by electronics
      };
    case "jewelery":
      const jewelry = state.allItems.filter(
        (item) => item.category === "jewelery"
      );
      return {
        ...state,
        click: jewelry, // Set items filtered by jewelry
      };
    case "women's clothing":
      const womensClothing = state.allItems.filter(
        (item) => item.category === "women's clothing"
      );
      return {
        ...state,
        click: womensClothing, // Set items filtered by women's clothing
      };

    default:
      return state;
  }
};
export const selectionReducer = (state = initialCheck, action) => {
  switch (action.type) {
    case SET_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: true,
      };
    case CLEAR_SELECTED_ITEM:
      return {
        ...state,
        selectedItem: false,
      };
    default:
      return state;
  }
};

export const clearCheckboxReducer = (state = check, action) => {
  switch (action.type) {
    case CLEAR_SELECTED_ITEM:
      return {
        ...state,
        selectedItem1: !false,
      };
    default:
      return state;
  }
};

export default clickReducer;

export const rootreducer = combineReducers({
  reducer,
  cartReducer,
  clickReducer,
  selectionReducer,
});
