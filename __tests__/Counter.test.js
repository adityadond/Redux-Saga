import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Counter from "../src/Counter";

// Create a mock store
const mockStore = configureStore([]);

describe("Counter component", () => {
  let store;

  beforeEach(() => {
    // Initialize the mock store with an initial state
    store = mockStore({
      reducer: {
        num: 0, // Initial state
      },
    });
  });

  test("increments the counter when the increment button is clicked", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    // Find the increment button
    const incrementButton = screen.getByRole("button", { name: /Increament/i });

    // Dispatch an action when the increment button is clicked
    fireEvent.click(incrementButton);

    // Check if the state has been updated correctly
    expect(store.getActions()).toEqual([
      { type: "INCREMENT", payload: "value" },
    ]);
  });
  test("Decrement the counter when the increment button is clicked", () => {
    render(
      <Provider store={store}>
        <Counter />
      </Provider>
    );

    // Find the increment button
    const decrementButton = screen.getByRole("button", { name: /Decrement/i });

    // Dispatch an action when the increment button is clicked
    fireEvent.click(decrementButton);

    // Check if the state has been updated correctly
    expect(store.getActions()).toEqual([
      { type: "DECREMENT", payload: "value" },
    ]);
  });
});
