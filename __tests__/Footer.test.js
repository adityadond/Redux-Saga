import React from "react";
import { render } from "@testing-library/react";
import Footer from "../src/Footer";

jest.mock("../src/Footer.css", () => ({}));

describe("Footer Component", () => {
  test("renders footer with correct content", () => {
    const { getByText, getByPlaceholderText, getAllByRole, getAllByText } =
      render(<Footer />);

    // Check if "Quick Links" section is rendered
    expect(getByText("Quick Links")).toBeInTheDocument();
    expect(getByText("About Us")).toBeInTheDocument();
    expect(getByText("FAQ")).toBeInTheDocument();

    // Check if "Contact Us" section is rendered
    expect(getAllByText("Contact Us")).toHaveLength(2);
    expect(getByText("Email: info@example.com")).toBeInTheDocument();
    expect(getByText("Phone: +1 (123) 456-7890")).toBeInTheDocument();

    // Check if "Follow Us" section is rendered
    expect(getByText("Follow Us")).toBeInTheDocument();
    expect(getAllByRole("link")).toHaveLength(3); // Check if there are 3 social media links

    // Check if "Subscribe to Our Newsletter" section is rendered
    expect(getByText("Subscribe to Our Newsletter")).toBeInTheDocument();
    expect(getByPlaceholderText("Enter your email")).toBeInTheDocument();
    expect(getByText("Subscribe")).toBeInTheDocument();

    // Check if footer bottom section is rendered
    expect(
      getByText("© 2024 Your E-commerce Website. All rights reserved.")
    ).toBeInTheDocument();
  });
});
