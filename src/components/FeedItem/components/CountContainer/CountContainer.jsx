import React from "react";
import { StyledCountContainer } from "./CountContainer.style";

export default function CountContainer() {
  return (
    <StyledCountContainer>
      <div className="comment-count">36</div>
      <div className="upvote-counter">
        <div className="upvote-count">96</div>
        <button>
          <span className="arrow-up"></span>
        </button>
      </div>
    </StyledCountContainer>
  );
}
