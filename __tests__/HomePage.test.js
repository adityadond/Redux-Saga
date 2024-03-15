import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import HomePage from "../src/HomePage";
import { fetchData } from "../src/action";

jest.mock("../src/smallHeader.css", () => ({}));
jest.mock("../src/HomePage.css", () => ({}));
jest.mock("../src/Left.css", () => ({}));
jest.mock("react-toastify/dist/ReactToastify.css", () => ({}));

const mockStore = configureMockStore();
const initialState = {
  reducer: {
    data: [],
    loading: false,
  },
  clickReducer: {
    click: [],
  },
};
const store = mockStore(initialState);

jest.mock("../src/action", () => ({
  fetchData: jest.fn(), // Mock fetchData function
}));

describe("HomePage Component", () => {
  beforeEach(() => {
    // Mocking fetchData to return a resolved promise with sample data
    // You can adjust the sample data according to your needs
    const mockData = [
      {
        id: 1,
        title: "Sample Item",
        category: "Sample Category",
        description: "Sample Description",
        image: "sample.jpg",
        price: 9.99,
      },
    ];
    // Mock fetchData to resolve with sample data
    fetchData.mockResolvedValue(mockData);

    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });
  it("calls fetchData action once on component mount", () => {
    render(
      <Provider store={store}>
        <HomePage />
      </Provider>
    );

    // Assert that fetchData action is called once
    expect(fetchData).toHaveBeenCalledTimes(1);
  });

  // Your test cases go here...
});
