import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import Header from "./Header";

import { theme } from "../../themes";

describe("testing Header", () => {
  afterEach(() => {
    cleanup();
  });

  it("snapshot testing", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header />
      </ThemeProvider>
    );
    expect(screen).toMatchSnapshot();
  });
});
