import "@testing-library/jest-dom/extend-expect";
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./counter.js";

describe("Counter", () => {
  test("matches snapshot", () => {
    const { asFragment } = render(<Counter />);
    expect(asFragment()).toMatchSnapshot();
  });

  test("counter increments", () => {
    const { getByRole, getByTestId } = render(<Counter />);
    expect(getByTestId("number")).toHaveTextContent("0");
    fireEvent.click(getByRole("button"));
    expect(getByTestId("number")).toHaveTextContent("1");
  });

  test("counter caps out", () => {
    expect(false).toBe(false);
    const { getByRole, getByTestId } = render(<Counter startingNum={5} />);
    expect(getByTestId("number")).toHaveTextContent("5");
    fireEvent.click(getByRole("button"));
    expect(getByTestId("number")).toHaveTextContent("5");
  });
});
