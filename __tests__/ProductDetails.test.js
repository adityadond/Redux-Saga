import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ProductDetails from "../src/ProductDetails";

const mockStore = configureStore([]);
jest.mock("../src/ProductDetails.css", () => ({}));

describe("ProductDetailsPage Component", () => {
  const initialState = {
    reducer: {
      data: [
        {
          id: 1,
          title: "Product 1",
          category: "Category 1",
          description: "Description 1",
          image: "product1.jpg",
          price: 10.99,
          rating: {
            rate: 4.5,
            count: 10,
          },
        },
      ],
    },
  };

  test("handles navigation back to home page", async () => {
    const store = mockStore(initialState);
    const navigateMock = jest.fn();
    const { getByText } = render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/product/1"]}>
          <Routes>
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route
              path="/"
              element={<button onClick={navigateMock}>Home</button>}
            />
          </Routes>
        </MemoryRouter>
      </Provider>
    );

    // Wait for navigation to occur
  });
});
