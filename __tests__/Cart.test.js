import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Cart from "../src/Cart";
import { removeCart } from "../src/action";
import { BrowserRouter as Router } from "react-router-dom"; // Import BrowserRouter

jest.mock("../src/Cart.css", () => ({}));

describe("Cart Component", () => {
  const initialState = {
    cartReducer: {
      cartItems: [
        {
          id: 1,
          title: "Product 1",
          category: "Category 1",
          description: "Description 1",
          price: 10.99,
          image: "product1.jpg",
          quantity: 1,
        },
        {
          id: 2,
          title: "Product 2",
          category: "Category 2",
          description: "Description 2",
          price: 20.99,
          image: "product2.jpg",
          quantity: 1,
        },
      ],
    },
  };
  const mockStore = configureStore();
  let store;

  beforeEach(() => {
    store = mockStore(initialState);
  });

  test("renders cart items and total price", () => {
    render(
      <Provider store={store}>
        <Router>
          {" "}
          {/* Add Router wrapper */}
          <Cart />
        </Router>
      </Provider>
    );

    // Check if cart items are rendered
    expect(screen.getByText("Product 1")).toBeInTheDocument();
    expect(screen.getByText("Product 2")).toBeInTheDocument();

    // Check if total price is rendered
    expect(screen.getByText("Total Price: $31.98")).toBeInTheDocument();

    // Check if images are rendered
    expect(screen.getByAltText("Product 1")).toBeInTheDocument();
    expect(screen.getByAltText("Product 2")).toBeInTheDocument();
  });

  test("dispatches removeCart action when remove button is clicked", () => {
    store.dispatch = jest.fn();
    render(
      <Provider store={store}>
        <Router>
          {" "}
          {/* Add Router wrapper */}
          <Cart />
        </Router>
      </Provider>
    );

    const removeButton = screen.getByTestId("remove-button-1");
    fireEvent.click(removeButton);

    expect(store.dispatch).toHaveBeenCalledWith(removeCart(1));
  });
});
