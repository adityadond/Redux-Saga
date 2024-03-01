import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import Left from "../src/Left";
import configureStore from "redux-mock-store";

const mockStore = configureStore([]);
jest.mock("../src/left.css", () => ({}));

describe("Left component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({});
  });

  test("renders the component properly", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Left />
      </Provider>
    );

    // Assertions for initial rendering
    expect(getByText("All")).toBeInTheDocument();
    expect(getByText("men's clothing")).toBeInTheDocument();
    expect(getByText("electronics")).toBeInTheDocument();
    expect(getByText("jewelery")).toBeInTheDocument();
    expect(getByText("women's clothing")).toBeInTheDocument();
  });

  test("handles checkbox change correctly", () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <Left />
      </Provider>
    );

    // Simulate a checkbox click
    fireEvent.click(getByLabelText("All"));

    // Expect the checkbox to be checked
    expect(getByLabelText("All")).toBeChecked();
  });
});
