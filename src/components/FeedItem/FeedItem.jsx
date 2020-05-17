import React from "react";

import { StyledFeedItem, Container } from "./FeedItem.style";
import { CountContainer, InfoContainer } from "./components";

export default function FeedItem(props) {
  const {
    author,
    created_at: createdAt,
    num_comments: commentCount,
    points: upvoteCount,
    title,
    url,
  } = props.feed;

  const { isUpvoted, upvoteToggler, hideHandler } = props;

  return (
    <StyledFeedItem>
      <Container>
        <CountContainer
          commentCount={commentCount}
          upvoteCount={upvoteCount}
          isUpvoted={isUpvoted}
          upvoteToggler={upvoteToggler}
        />
        <InfoContainer
          author={author}
          createdAt={createdAt}
          title={title}
          url={url}
          hideHandler={hideHandler}
        />
      </Container>
    </StyledFeedItem>
  );
}
