import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux"; // Import Provider from react-redux
import Modal from "../src/Modal";
import configureStore from "redux-mock-store"; // Import redux-mock-store for creating a mock Redux store

jest.mock("../src/Modal.css", () => ({}));
describe("Modal Component", () => {
  const mockStore = configureStore();
  const store = mockStore({}); // Create a mock Redux store

  test("renders modal when show prop is true", () => {
    const { getByText } = render(
      <Provider store={store}>
        {" "}
        {/* Wrap Modal with Provider */}
        <Modal show={true} onClose={() => {}}>
          <div>Modal Content</div>
        </Modal>
      </Provider>
    );

    const modalContent = getByText("Modal Content");
    expect(modalContent).toBeInTheDocument();
  });

  test("does not render modal when show prop is false", () => {
    const { queryByText } = render(
      <Provider store={store}>
        {" "}
        {/* Wrap Modal with Provider */}
        <Modal show={false} onClose={() => {}}>
          <div>Modal Content</div>
        </Modal>
      </Provider>
    );

    const modalContent = queryByText("Modal Content");
    expect(modalContent).toBeNull();
  });

  test("calls onClose when close button is clicked", () => {
    const onCloseMock = jest.fn();
    const { getByText } = render(
      <Provider store={store}>
        {" "}
        {/* Wrap Modal with Provider */}
        <Modal show={true} onClose={onCloseMock}>
          <div>Modal Content</div>
        </Modal>
      </Provider>
    );

    const closeButton = getByText("Close");
    fireEvent.click(closeButton);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test("calls onClose when overlay outside the modal is clicked", () => {
    const onCloseMock = jest.fn();
    const { getByTestId } = render(
      <Provider store={store}>
        {" "}
        {/* Wrap Modal with Provider */}
        <Modal show={true} onClose={onCloseMock}>
          <div>Modal Content</div>
        </Modal>
      </Provider>
    );

    const overlay = getByTestId("modal-overlay");
    fireEvent.click(overlay);

    expect(onCloseMock).toHaveBeenCalledTimes(1);
  });

  test("renders children inside modal content", () => {
    const { getByText } = render(
      <Provider store={store}>
        {" "}
        {/* Wrap Modal with Provider */}
        <Modal show={true} onClose={() => {}}>
          <div>Modal Content</div>
        </Modal>
      </Provider>
    );

    const modalContent = getByText("Modal Content");
    expect(modalContent).toBeInTheDocument();
  });
});
