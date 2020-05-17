import React from "react";

import { StyledInfoContainer } from "./InfoContainer.style";

export default function InfoContainer() {
  return (
    <StyledInfoContainer>
      <h4 className="title">Seemingly impossible swift programs</h4>
      <a href="#" className="domain">
        (foobar.com)
      </a>
      <p className="info">
        <span>by</span>&nbsp;wool__gather&nbsp;
        <span>5 hours ago</span>&nbsp;
        <button>[ hide ]</button>
      </p>
    </StyledInfoContainer>
  );
}
