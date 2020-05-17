import React from "react";
import { StyledCountContainer, ArrowUpButton } from "./CountContainer.style";

export default function CountContainer(props) {
  const { commentCount, upvoteCount, isUpvoted, upvoteToggler } = props;
  return (
    <StyledCountContainer>
      <div className="comment-count">{commentCount || 0}</div>
      <div className="upvote-counter">
        <div className="upvote-count">
          {`${isUpvoted ? upvoteCount + 1 : upvoteCount}`}
        </div>
        <ArrowUpButton className={isUpvoted ? "active" : "inactive"}>
          <span onClick={upvoteToggler} className="arrow-up"></span>
        </ArrowUpButton>
      </div>
    </StyledCountContainer>
  );
}
