import React from "react";
import { render, cleanup, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import FeedItem from "./FeedItem";

import { theme } from "../../themes";

const initialProps = {
  feed: {
    author: "anish",
    createdAt: "2017-02-23T13:01:08.000Z",
    commentCount: 100,
    upvoteCount: 20,
    title: "Some title that needs your attention!",
    url: "http://www.google.com",
  },
  isUpvoted: true,
  upvoteToggler: jest.fn(),
  hideHandler: jest.fn(),
};

describe("testing FeedItem", () => {
  afterEach(() => {
    cleanup();
  });

  it("snapshot testing", () => {
    render(
      <ThemeProvider theme={theme}>
        <FeedItem {...initialProps} />
      </ThemeProvider>
    );
    expect(screen).toMatchSnapshot();
  });
});
