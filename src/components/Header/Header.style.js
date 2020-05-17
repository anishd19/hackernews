import styled from "styled-components";

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

  button {
    background: transparent;
    border: transparent;
    cursor: pointer;

    &.active {
      color: ${({ theme }) => theme.colors.white};
    }
  }

  .menu {
    display: flex;
    align-items: center;

    button,
    span {
      margin-left: 10px;
    }
  }
`;
