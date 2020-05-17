import React from "react";

import { StyledInfoContainer, HideButton } from "./InfoContainer.style";
import { extractDomain, timeAgo } from "./../../../../helpers";

export default function InfoContainer(props) {
  const { author, createdAt, title, url, hideHandler } = props;
  return (
    <StyledInfoContainer>
      <h4 className="title">{title}</h4>
      {url && (
        <a href={url} className="domain">
          ({extractDomain(url)})
        </a>
      )}
      <p className="info">
        <span>by</span>
        &nbsp;{author}&nbsp;
        <span>{timeAgo(new Date(createdAt))}</span>&nbsp;
        <HideButton onClick={hideHandler}>[ hide ]</HideButton>
      </p>
    </StyledInfoContainer>
  );
}
