import React from "react";

import { StyledHeader, MenuButton } from "./Header.style";
import { labels } from "../../constants";

export default function Header() {
  return (
    <StyledHeader>
      <div className="logo">Y</div>
      <div className="menu">
        <MenuButton className="active" aria-label="top">
          {labels.TOP}
        </MenuButton>
        <span className="divider">|</span>
        <MenuButton aria-label="new">{labels.NEW}</MenuButton>
      </div>
    </StyledHeader>
  );
}
