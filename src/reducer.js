import {
  FETCH_DATA_SUCCESS,
  ADD_TO_CART,
  REMOVE_CART,
  CLEAR_CART,
  CHANGE_QTY,
  FETCH_PRODUCT_DETAILS_SUCCESS,
  SET_SELECTED_ITEM,
  CLEAR_SELECTED_ITEM,
  FETCH_SAGA_PRODUCT,
  FETCH_SAGA_PRODUCT_SUCCESS,
  POST_CLASS_DATA_SUCESS,
  POST_SAGA_PRODUCT,
  POST_SAGA_PRODUCT_SUCCESS,
} from "./constants";

import { combineReducers } from "redux";

const initialState = {
  selectedItem: false,
  num: 0,
  data: [],
  loading: false,
  formdata: [],
  error: null,
  productdetails: [],
  loading: false,
  error: null,
  cartItems: [],
  click: [],
  allItems: [],
  selectedItem1: false,
  checkValue: false,
  sagaProduct: [],
  postSagaProduct: [],
  dates: [],
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
        data: action.payload,
        loading: false,
        error: null,
      };
    case "FORM_DATA": {
      console.log("Form data", action.payload);
      return {
        ...state,
        formdata: action.payload,
      };
    }

    default:
      return state;
  }
};

export const productDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCT_DETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        productdetails: action.payload,
      };

    default:
      return state;
  }
};
export const cartReducer = (state = initialState, action) => {
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
      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          console.log(item.id, action.id, "ids");
          if (item.id === action.id) {
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

export const clickReducer = (state = initialState, action) => {
  switch (action.type) {
    case "All":
      if (!Array.isArray(action.item)) {
        // Check if action.item is an array
        return {
          ...state,
          click: state.allItems,
          checkValue: action.checkValue,
        }; // Return current state if it's not iterable
      }
      return {
        ...state,
        allItems: action.item, // Set all items to action.item
        click: [...action.item], // Copy action.item to click
        checkValue: action.checkValue,
      };
    case "men's clothing":
      const mensClothing = state.allItems.filter(
        (item) => item.category === "men's clothing"
      );
      return {
        ...state,
        click: mensClothing,
        checkValue: action.checkValue, // Set items filtered by men's clothing
      };
    case "electronics":
      const electronics = state.allItems.filter(
        (item) => item.category === "electronics"
      );
      return {
        ...state,
        click: electronics,
        checkValue: action.checkValue, // Set items filtered by electronics
      };
    case "jewelery":
      const jewelry = state.allItems.filter(
        (item) => item.category === "jewelery"
      );
      return {
        ...state,
        click: jewelry,
        checkValue: action.checkValue, // Set items filtered by jewelry
      };
    case "women's clothing":
      const womensClothing = state.allItems.filter(
        (item) => item.category === "women's clothing"
      );
      return {
        ...state,
        click: womensClothing,
        checkValue: action.checkValue, // Set items filtered by women's clothing
      };

    default:
      return state;
  }
};
export const selectionReducer = (state = initialState, action) => {
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

export const clearCheckboxReducer = (state = initialState, action) => {
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

export const sagaReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SAGA_PRODUCT_SUCCESS:
      return {
        ...state,
        sagaProduct: action.payload,
      };
    case POST_SAGA_PRODUCT_SUCCESS:
      return {
        ...state,
        postSagaProduct: action.payload,
      };
    case "SAVE_DATES":
      console.log(action.payload);
      return {
        ...state,
        dates: action.payload,
      };
    default:
      return state;
  }
};

export const rootreducer = combineReducers({
  reducer,
  cartReducer,
  clickReducer,
  selectionReducer,
  productDetailsReducer,
  sagaReducer,
});
