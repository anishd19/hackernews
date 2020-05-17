import styled from "styled-components";

import { Button } from "../common/styles";

export const StyledHeader = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.first};
  padding: 10px;

  .logo {
    color: white;
    padding: 2px 9px;
    border: 1px solid white;
    margin-right: 10px;
  }

  .menu {
    display: flex;
    align-items: center;

    span {
      margin-left: 10px;
    }
  }
`;

export const MenuButton = styled(Button)`
  margin-left: 10px;
  &.active {
    color: ${({ theme }) => theme.colors.white};
  }
`;
