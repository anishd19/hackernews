import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import CountContainer from "./CountContainer";

import { theme } from "../../../../themes";

const initialProps = {
  commentCount: 100,
  upvoteCount: 20,
  isUpvoted: true,
  upvoteToggler: jest.fn(),
};

describe("testing CountContainer", () => {
  afterEach(() => {
    cleanup();
  });

  it("snapshot testing", () => {
    render(
      <ThemeProvider theme={theme}>
        <CountContainer {...initialProps} />
      </ThemeProvider>
    );
    expect(screen).toMatchSnapshot();
  });
});
