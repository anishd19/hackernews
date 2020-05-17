import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import InfoContainer from "./InfoContainer";

import { theme } from "../../../../themes";

const initialProps = {
  author: "anish",
  createdAt: "2017-02-23T13:01:08.000Z",
  title: "Some title that needs your attention!",
  url: "http://www.google.com",
  hideHandler: jest.fn(),
};

describe("testing InfoContainer", () => {
  afterEach(() => {
    cleanup();
  });

  it("snapshot testing", () => {
    render(
      <ThemeProvider theme={theme}>
        <InfoContainer {...initialProps} />
      </ThemeProvider>
    );
    expect(screen).toMatchSnapshot();
  });
});
