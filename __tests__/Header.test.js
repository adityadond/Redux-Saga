import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "../src/Header";
import configureStore from "redux-mock-store"; // Import redux-mock-store for mocking Redux store

// Mock Redux store
const mockStore = configureStore([]);
jest.mock("../src/Header.css", () => ({}));

describe("Header component", () => {
  test("renders correct cart item count", () => {
    // Define initial state for the Redux store
    const initialState = {
      cartReducer: {
        cartItems: [
          {
            /* Add mock cart items here if needed */
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

    // Create a mock store with initial state
    const store = mockStore(initialState);

    // Render the Header component with the mock store and Router
    render(
      <Provider store={store}>
        <Router>
          <Header />
        </Router>
      </Provider>
    );

    // Assert that the cart item count is displayed correctly
    const cartItemCountElement = screen.getByText(
      `Cart ${initialState.cartReducer.cartItems.length}`
    );
    expect(cartItemCountElement).toBeInTheDocument();
  });
});
