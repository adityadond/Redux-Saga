import React from "react";
import { render, fireEvent, getByText } from "@testing-library/react";
import Checkout from "../src/Checkout";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../src/action";
import Modal from "../src/Modal";
import { Provider } from "react-redux";
import store from "../src/store";

jest.mock("../src/CheckOut.css", () => ({}));

jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

// Mocking Modal component
jest.mock("../src/Modal", () =>
  jest.fn(({ show, onClose, children }) => (
    <div data-testid="modal" onClick={onClose}>
      {show && children}
    </div>
  ))
);

describe("Checkout component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render empty cart message when cart is empty", () => {
    useSelector.mockReturnValueOnce([]);
    const { getByText } = render(<Checkout />);
    expect(getByText("Your cart is empty.")).toBeInTheDocument();
  });

  it("should render cart items and subtotal when cart is not empty", () => {
    const cartItems = [
      { id: 1, title: "Item 1", quantity: 2, price: 10 },
      { id: 2, title: "Item 2", quantity: 1, price: 20 },
    ];
    useSelector.mockReturnValueOnce(cartItems);
    const { getByText } = render(<Checkout />);
    expect(getByText("Cart Items")).toBeInTheDocument();
    expect(getByText("Item 1")).toBeInTheDocument();
    expect(getByText("Item 2")).toBeInTheDocument();
    expect(getByText("Total Price: $40.00")).toBeInTheDocument();
  });

  // it("should call handlePlaceOrder when place order button is clicked", () => {
  //   const cartItems = [
  //     { id: 1, title: "Item 1", quantity: 2, price: 10 },
  //     { id: 2, title: "Item 2", quantity: 1, price: 20 },
  //   ];
  //   useSelector.mockReturnValueOnce(cartItems);
  //   const dispatch = jest.fn();
  //   useDispatch.mockReturnValue(dispatch);
  //   const { getByText } = render(<Checkout />);
  //   fireEvent.click(getByText("Place Order"));
  //   expect(dispatch).toHaveBeenCalledWith(clearCart());
  // });
});
