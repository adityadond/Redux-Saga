import {
  FETCH_DATA_SUCCESS,
  FETCH_DATA_ERROR,
  ADD_TO_CART,
  FETCH_DATA,
  REMOVE_CART,
} from "../src/constants";
import { SET_SELECTED_ITEM } from "../src/constants";
import {
  increment,
  decrement,
  fetchData,
  addToCart,
  removeCart,
  clickAction,
  setSelectedItem,
} from "../src/action";

describe("Action Creators", () => {
  test("increment action creator", () => {
    const action = increment();
    expect(action).toEqual({ type: "INCREMENT", payload: "value" });
  });

  test("decrement action creator", () => {
    const action = decrement();
    expect(action).toEqual({ type: "DECREMENT", payload: "value" });
  });

  test("fetchData action creator", () => {
    const params = { id: 1 };
    const action = fetchData(params);
    expect(action).toEqual({ type: FETCH_DATA, payload: params });
  });

  test("addToCart action creator", () => {
    const item = { id: 1, name: "Test Item" };
    const action = addToCart(item);
    expect(action).toEqual({ type: ADD_TO_CART, item });
  });

  test("removeCart action creator", () => {
    const itemId = 1;
    const action = removeCart(itemId);
    expect(action).toEqual({ type: REMOVE_CART, itemId });
  });

  test("clickAction action creator", () => {
    const itemName = "CLICK_ACTION";
    const item = { id: 1, name: "Test Item" };
    const action = clickAction(itemName, item);
    expect(action).toEqual({ type: itemName, item });
  });

  test("setSelectedItem action creator", () => {
    const action = setSelectedItem();
    expect(action).toEqual({ type: SET_SELECTED_ITEM });
  });
});
