import React from "react";

import { StyledHeader } from "./Header.style";
import { labels } from "../../constants";

export default function Header() {
  return (
    <StyledHeader>
      <div className="logo">Y</div>
      <div className="menu">
        <button className="active">{labels.TOP}</button>
        <span className="divider">|</span>
        <button>{labels.NEW}</button>
      </div>
    </StyledHeader>
  );
}
