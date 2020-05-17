import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../themes";
import { GlobalStyle, Container, Feed, MoreBtn } from "./App.style";
import Header from "../Header";
import FeedItem from "../FeedItem";
import useAppHook from "./useAppHook";

function App() {
  const {
    feeds,
    moreClickHandler,
    upvoteToggler,
    hideHandler,
    isUpvoted,
    isHidden,
  } = useAppHook();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container className="App">
        <Header />
        <Feed>
          <ul>
            {feeds.map((feed) =>
              isHidden(feed.objectID) ? null : (
                <FeedItem
                  key={feed.objectID}
                  feed={feed}
                  isUpvoted={isUpvoted(feed.objectID)}
                  upvoteToggler={() => {
                    upvoteToggler(feed.objectID);
                  }}
                  hideHandler={() => {
                    hideHandler(feed.objectID);
                  }}
                />
              )
            )}
          </ul>
        </Feed>
        <div>
          <MoreBtn onClick={moreClickHandler}>More</MoreBtn>
        </div>
      </Container>
    </ThemeProvider>
  );
}

export default App;
