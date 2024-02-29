import React from "react";
import { render } from "@testing-library/react";
import Right from "../src/Right";

describe("Right component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Right />);
    const rightElement = getByText("Right");
    expect(rightElement).toBeInTheDocument();
  });
});
