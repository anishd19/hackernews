import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "../../themes";
import { GlobalStyle, Container, Feed } from "./App.style";
import Header from "../Header";
import FeedItem from "../FeedItem";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container className="App">
        <Header />
        <Feed>
          <ul>
            <FeedItem />
          </ul>
        </Feed>
      </Container>
    </ThemeProvider>
  );
}

export default App;
