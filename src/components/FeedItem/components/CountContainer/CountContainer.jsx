import React from "react";
import { StyledCountContainer } from "./CountContainer.style";

export default function CountContainer(props) {
  const { commentCount, upvoteCount, isUpvoted, upvoteToggler } = props;
  console.log("isUpvoted", isUpvoted);
  return (
    <StyledCountContainer>
      <div className="comment-count">{commentCount || 0}</div>
      <div className="upvote-counter">
        <div className="upvote-count">
          {isUpvoted ? upvoteCount + 1 : upvoteCount}
        </div>
        <button className={isUpvoted ? "active" : "inactive"}>
          <span onClick={upvoteToggler} className="arrow-up"></span>
        </button>
      </div>
    </StyledCountContainer>
  );
}
