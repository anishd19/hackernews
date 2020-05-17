import React from "react";
import axios from "axios";
import {
  render,
  cleanup,
  screen,
  fireEvent,
  act,
} from "@testing-library/react";
import App from "./App";
import MockAdapter from "axios-mock-adapter";
import searchData from "../../constants/mocks/search";

var mock = new MockAdapter(axios);

describe("testing App", () => {
  beforeAll(() => {
    mock
      .onGet("https://hn.algolia.com/api/v1/search?page=1")
      .reply(200, searchData);
  });

  afterEach(() => {
    cleanup();
  });

  it("snapshot testing", async () => {
    await act(async () => {
      render(<App />);
    });
    expect(screen).toMatchSnapshot();
  });

  it("upvotes on click", async () => {
    render(<App />);
    await screen.findAllByTestId("upvote-count");
    expect(screen.getAllByTestId("upvote-count")[0]).toHaveTextContent("3030");
    act(() => {
      fireEvent.click(screen.getAllByTestId("arrow-up")[0]);
    });
    expect(screen.getAllByTestId("upvote-count")[0]).toHaveTextContent("3031");
  });

  it("hides on click", async () => {
    render(<App />);
    await screen.findAllByTestId("title");
    const firstFeed = screen.getAllByTestId("title")[0];
    expect(firstFeed).toBeInTheDocument();
    act(() => {
      fireEvent.click(screen.getAllByTestId("hide")[0]);
    });
    expect(firstFeed).not.toBeInTheDocument();
  });
});
