import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../src/Header";
import configureStore from "redux-mock-store";
jest.mock("../src/Header.css", () => ({}));
const mockStore = configureStore([]);

// Mock Redux store
const initialState = {
  cartReducer: {
    cartItems: [
      {
        category: "men's clothing",
        description:
          "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        id: 1,
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        price: 109.95,
      },
    ],
  },
};

describe("Header component", () => {
  test("renders correct cart item count", () => {
    const store = mockStore(initialState);
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    // Assert that the cart item count is displayed correctly
    const cartItemCountElement = screen.getByText(/Cart/);
    const cartItemCountElements = screen.getByText(/1/);
    expect(cartItemCountElement).toBeInTheDocument();
    expect(cartItemCountElements).toBeInTheDocument();
  });
});
