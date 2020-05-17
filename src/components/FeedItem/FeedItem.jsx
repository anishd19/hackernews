import React from "react";

import { StyledFeedItem, Container } from "./FeedItem.style";
import { CountContainer, InfoContainer } from "./components";

export default function FeedItem() {
  return (
    <StyledFeedItem>
      <Container>
        <CountContainer />
        <InfoContainer />
      </Container>
    </StyledFeedItem>
  );
}
