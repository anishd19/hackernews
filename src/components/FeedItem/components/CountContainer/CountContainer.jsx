import React from "react";
import { StyledCountContainer, ArrowUpButton } from "./CountContainer.style";

export default function CountContainer(props) {
  const { commentCount, upvoteCount, isUpvoted, upvoteToggler } = props;
  return (
    <StyledCountContainer>
      <div className="comment-count">{commentCount || 0}</div>
      <div className="upvote-counter">
        <div data-testid="upvote-count" className="upvote-count">
          {`${isUpvoted ? upvoteCount + 1 : upvoteCount}`}
        </div>
        <ArrowUpButton
          className={isUpvoted ? "active" : "inactive"}
          aria-label="upvote"
        >
          <span
            data-testid="arrow-up"
            onClick={upvoteToggler}
            className="arrow-up"
          ></span>
        </ArrowUpButton>
      </div>
    </StyledCountContainer>
  );
}
