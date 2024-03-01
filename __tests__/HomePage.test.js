import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import HomePage from "../src/HomePage";

const mockStore = configureStore([]);

jest.mock("../src/smallHeader.css", () => ({}));
jest.mock("../src/HomePage.css", () => ({}));
jest.mock("react-toastify/dist/ReactToastify.css", () => ({}));
describe("HomePage component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      reducer: { data: [] },
      clickReducer: { click: [] },
    });
  });

  test("renders the component properly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    expect(getByText("All")).toBeInTheDocument();
  });

  test("handles add to cart button click", async () => {
    const fakeItem = {
      id: 1,
      title: "Fake Item",
      category: "Fake Category",
      description: "Fake Description",
      image: "fake-image-url",
      price: 10,
    };

    store.dispatch = jest.fn();

    const { getByText } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    fireEvent.click(getByText("Add to Cart"));

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  test("toggles full description correctly", async () => {
    const fakeItem = {
      id: 1,
      title: "Fake Item",
      category: "Fake Category",
      description: "This is a long description for testing purposes",
      image: "fake-image-url",
      price: 10,
    };

    const { getByText } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    fireEvent.click(getByText("Show more"));

    expect(getByText("Show less")).toBeInTheDocument();

    fireEvent.click(getByText("Show less"));

    expect(getByText("Show more")).toBeInTheDocument();
  });

  test("fetches data on mount", async () => {
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    await waitFor(() => {
      expect(store.dispatch).toHaveBeenCalledWith(expect.any(Function));
    });
  });

  test("dispatches action on checkbox change", () => {
    store.dispatch = jest.fn();

    const { getByText } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    fireEvent.click(getByText("men's clothing"));

    expect(store.dispatch).toHaveBeenCalledWith({
      type: "men's clothing",
    });
  });

  test("handles empty description properly", () => {
    const fakeItem = {
      id: 1,
      title: "Fake Item",
      category: "Fake Category",
      description: "", // Empty description
      image: "fake-image-url",
      price: 10,
    };

    const { getByText } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    // Should not show 'Show more' or 'Show less' buttons for empty description
    expect(() => getByText("Show more")).toThrow();
    expect(() => getByText("Show less")).toThrow();
  });

  test("handles long description properly", async () => {
    const fakeItem = {
      id: 1,
      title: "Fake Item",
      category: "Fake Category",
      description: "This is a long description for testing purposes. ".repeat(
        10
      ), // 100 words
      image: "fake-image-url",
      price: 10,
    };

    const { getByText } = render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    fireEvent.click(getByText("Show more"));

    expect(getByText("Show less")).toBeInTheDocument();
  });

  // Add more test cases as needed to cover all branches
});
