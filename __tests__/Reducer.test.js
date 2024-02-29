import {
  reducer,
  cartReducer,
  clickReducer,
  selectionReducer,
  rootreducer,
} from "../src/reducer";
import {
  FETCH_DATA_SUCCESS,
  ADD_TO_CART,
  REMOVE_CART,
  SET_SELECTED_ITEM,
} from "../src/constants";

describe("reducers", () => {
  describe("reducer", () => {
    it("should handle FETCH_DATA_SUCCESS", () => {
      const initialState = {
        num: 0,
        data: [],
        loading: true,
        error: null,
      };
      const action = {
        type: FETCH_DATA_SUCCESS,
        payload: [
          { id: 1, name: "Todo 1" },
          { id: 2, name: "Todo 2" },
        ],
      };
      const newState = reducer(initialState, action);
      expect(newState).toEqual({
        num: 0,
        data: [
          { id: 1, name: "Todo 1" },
          { id: 2, name: "Todo 2" },
        ],
        loading: false,
        error: null,
      });
    });

    it("should handle INCREMENT", () => {
      const initialState = {
        num: 0,
        data: [],
        loading: false,
        error: null,
      };
      const action = { type: "INCREMENT" };
      const newState = reducer(initialState, action);
      expect(newState.num).toEqual(initialState.num + 1);
    });

    it("should handle DECREMENT", () => {
      const initialState = {
        num: 5,
        data: [],
        loading: false,
        error: null,
      };
      const action = { type: "DECREMENT" };
      const newState = reducer(initialState, action);
      expect(newState.num).toEqual(initialState.num - 1);
    });

    it("should return the initial state for unknown action type", () => {
      const initialState = {
        num: 0,
        data: [],
        loading: false,
        error: null,
      };
      const action = { type: "UNKNOWN_ACTION" };
      const newState = reducer(initialState, action);
      expect(newState).toEqual(initialState);
    });
  });

  describe("cartReducer", () => {
    it("should handle ADD_TO_CART", () => {
      const initialState = {
        cartItems: [],
      };
      const action = {
        type: ADD_TO_CART,
        item: { id: 1, name: "Item 1", price: 10, quantity: 1 },
      };
      const newState = cartReducer(initialState, action);
      expect(newState).toEqual({
        cartItems: [{ id: 1, name: "Item 1", price: 10, quantity: 1 }],
      });
    });

    it("should handle REMOVE_CART", () => {
      const initialState = {
        cartItems: [
          { id: 1, name: "Item 1", price: 10 },
          { id: 2, name: "Item 2", price: 20 },
        ],
      };
      const action = {
        type: REMOVE_CART,
        itemId: 1,
      };
      const newState = cartReducer(initialState, action);
      expect(newState).toEqual({
        cartItems: [{ id: 2, name: "Item 2", price: 20 }],
      });
    });

    it("should return the initial state for unknown action type", () => {
      const initialState = {
        cartItems: [],
      };
      const action = { type: "UNKNOWN_ACTION" };
      const newState = cartReducer(initialState, action);
      expect(newState).toEqual(initialState);
    });
  });

  describe("clickReducer", () => {
    it("should handle All", () => {
      const initialState = {
        click: [],
        allItems: [
          { id: 1, category: "electronics" },
          { id: 2, category: "men's clothing" },
        ],
      };
      const action = {
        type: "All",
        item: [
          { id: 1, category: "electronics" },
          { id: 2, category: "men's clothing" },
        ],
      };
      const newState = clickReducer(initialState, action);
      expect(newState).toEqual({
        click: [
          { id: 1, category: "electronics" },
          { id: 2, category: "men's clothing" },
        ],
        allItems: [
          { id: 1, category: "electronics" },
          { id: 2, category: "men's clothing" },
        ],
      });
    });

    it("should filter items by men's clothing", () => {
      const initialState = {
        click: [],
        allItems: [
          { id: 1, category: "electronics" },
          { id: 2, category: "men's clothing" },
          { id: 3, category: "men's clothing" },
          { id: 4, category: "women's clothing" },
        ],
      };
      const action = {
        type: "men's clothing",
      };
      const newState = clickReducer(initialState, action);
      expect(newState.click).toEqual([
        { id: 2, category: "men's clothing" },
        { id: 3, category: "men's clothing" },
      ]);
    });

    // Write similar tests for other cases like "electronics", "jewelery", and "women's clothing"
    describe("clickReducer", () => {
      // Previous tests...

      it("should filter items by electronics", () => {
        const initialState = {
          click: [],
          allItems: [
            { id: 1, category: "electronics" },
            { id: 2, category: "men's clothing" },
            { id: 3, category: "electronics" },
            { id: 4, category: "women's clothing" },
          ],
        };
        const action = {
          type: "electronics",
        };
        const newState = clickReducer(initialState, action);
        expect(newState.click).toEqual([
          { id: 1, category: "electronics" },
          { id: 3, category: "electronics" },
        ]);
      });

      it("should filter items by jewelry", () => {
        const initialState = {
          click: [],
          allItems: [
            { id: 1, category: "electronics" },
            { id: 2, category: "men's clothing" },
            { id: 3, category: "jewelry" },
            { id: 4, category: "women's clothing" },
          ],
        };
        const action = {
          type: "jewelery",
        };
        const newState = clickReducer(initialState, action);
        expect(newState.click).toEqual([{ id: 3, category: "jewelry" }]);
      });

      it("should filter items by women's clothing", () => {
        const initialState = {
          click: [],
          allItems: [
            { id: 1, category: "electronics" },
            { id: 2, category: "men's clothing" },
            { id: 3, category: "jewelry" },
            { id: 4, category: "women's clothing" },
          ],
        };
        const action = {
          type: "women's clothing",
        };
        const newState = clickReducer(initialState, action);
        expect(newState.click).toEqual([
          { id: 4, category: "women's clothing" },
        ]);
      });

      // Additional tests for edge cases and default behavior if necessary
    });
  });

  describe("selectionReducer", () => {
    it("should handle SET_SELECTED_ITEM", () => {
      const initialState = {
        selectedItem: null,
      };
      const action = {
        type: SET_SELECTED_ITEM,
      };
      const newState = selectionReducer(initialState, action);
      expect(newState).toEqual({
        selectedItem: null,
      });
    });

    it("should return the initial state for unknown action type", () => {
      const initialState = {
        selectedItem: null,
      };
      const action = { type: "UNKNOWN_ACTION" };
      const newState = selectionReducer(initialState, action);
      expect(newState).toEqual(initialState);
    });
  });

  describe("rootreducer", () => {
    it("should combine reducers correctly", () => {
      const initialState = {
        reducer: {
          num: 0,
          data: [],
          loading: false,
          error: null,
        },
        cartReducer: {
          cartItems: [],
        },
        clickReducer: {
          click: [],
          allItems: [],
        },
        selectionReducer: {
          selectedItem: null,
        },
      };
      const action = { type: "UNKNOWN_ACTION" };
      const newState = rootreducer(initialState, action);
      expect(newState).toEqual({
        reducer: {
          num: 0,
          data: [],
          loading: false,
          error: null,
        },
        cartReducer: {
          cartItems: [],
        },
        clickReducer: {
          click: [],
          allItems: [],
        },
        selectionReducer: {
          selectedItem: null,
        },
      });
    });
  });
});
