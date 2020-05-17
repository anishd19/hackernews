import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import App from "./App";

describe("testing App", () => {
  afterEach(() => {
    cleanup();
  });

  it("snapshot testing", () => {
    render(<App />);
    expect(screen).toMatchSnapshot();
  });
});
