import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../src/store";
import App from "../src/App";

// Mock ReactDOM.createRoot and render method
jest.mock("react-dom/client", () => {
  const originalModule = jest.requireActual("react-dom/client");
  return {
    ...originalModule,
    createRoot: jest.fn().mockReturnThis(), // Mock createRoot method
    render: jest.fn(),
  };
});

describe("Index File", () => {
  afterEach(() => {
    jest.clearAllMocks(); // Clear all mocks after each test
  });

  it("renders the application without errors", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // Ensure ReactDOM.createRoot is called with the root element
    expect(ReactDOM.createRoot).toHaveBeenCalledWith(
      document.getElementById("root")
    );

    // Ensure ReactDOM.render is called with the Provider component wrapping App
    expect(ReactDOM.render).toHaveBeenCalledWith(
      <Provider store={store}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </Provider>,
      expect.anything() // Ensure render is called with any argument
    );
  });
});
