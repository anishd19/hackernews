import React from "react";

import { StyledHeader, MenuButton } from "./Header.style";
import { labels } from "../../constants";

export default function Header() {
  return (
    <StyledHeader>
      <div className="logo">Y</div>
      <div className="menu">
        <MenuButton className="active">{labels.TOP}</MenuButton>
        <span className="divider">|</span>
        <MenuButton>{labels.NEW}</MenuButton>
      </div>
    </StyledHeader>
  );
}
