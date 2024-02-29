import React from "react";
import {
  render,
  screen,
  fireEvent,
  waitFor,
  getByRole,
} from "@testing-library/react";
// import "@testing-library/jest-dom/extend-expect"; // No need for this line
import LoginPage from "../src/Login";

jest.mock("../src/LoginPage.css", () => ({}));
jest.spyOn(window, "alert").mockImplementation(() => {});
describe("LoginPage Component", () => {
  it("renders login form correctly", () => {
    const { getByText, getByPlaceholderText, getByRole } = render(
      <LoginPage />
    );

    expect(getByRole("heading", { name: /Login/i })).toBeInTheDocument();
    expect(getByPlaceholderText("Username")).toBeInTheDocument();
    expect(getByPlaceholderText("Password")).toBeInTheDocument();
    expect(getByRole("button", { name: /Login/i })).toBeInTheDocument();
    expect(getByText("Forgot Password?")).toBeInTheDocument();
    expect(getByText("Sign Up")).toBeInTheDocument();
  });

  it("displays error message when username and password are not filled", async () => {
    const { getByText, getByPlaceholderText, getByRole } = render(
      <LoginPage />
    );

    const loginButton = getByRole("button", { name: /Login/i });

    fireEvent.click(loginButton);

    // Using waitFor to wait for potential async behavior (if any)
    await waitFor(() => {
      expect(getByText("Invalid username or password")).toBeInTheDocument();
    });

    // Click on Forgot Password link

    // Asserting navigation or expected behavior after clicking Sign Up link can be done here
  });
  test("clicking on Forgot Password should trigger alert", () => {
    render(<LoginPage />);
    const forgotPasswordButton = screen.getByText(/Forgot Password/); // Correct usage of getByText
    fireEvent.click(forgotPasswordButton);
    expect(window.alert).toHaveBeenCalledWith(
      "Forgot Password functionality is not implemented yet!"
    );
  });

  test("clicking on Sign Up should trigger alert", () => {
    render(<LoginPage />);
    const signUpButton = screen.getByText(/Sign Up/);
    fireEvent.click(signUpButton);
    expect(window.alert).toHaveBeenCalledWith(
      "Sign Up functionality is not implemented yet!"
    );
  });
});
