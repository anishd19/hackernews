import React from "react";

import { StyledInfoContainer, HideButton } from "./InfoContainer.style";
import { extractDomain, timeAgo } from "./../../../../helpers";

export default function InfoContainer(props) {
  const { author, createdAt, title, url, hideHandler } = props;
  return (
    <StyledInfoContainer>
      <h4 data-testid="title" className="title">
        {title}
      </h4>
      {url && (
        <a data-testid="url" href={url} className="domain">
          ({extractDomain(url)})
        </a>
      )}
      <p className="info" data-testid="info">
        <span>by</span>
        &nbsp;{author}&nbsp;
        <span data-testid="date">{timeAgo(new Date(createdAt))}</span>&nbsp;
        <HideButton data-testid="hide" onClick={hideHandler}>
          [ hide ]
        </HideButton>
      </p>
    </StyledInfoContainer>
  );
}
