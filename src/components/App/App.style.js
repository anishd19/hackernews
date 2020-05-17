import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
    font-size: 62.5%; // 10px/16px = 62.5% -> 1rem = 10px
  }

  body {
    color: ${({ theme }) => theme.colors.grey};
    font-weight: 300;
    line-height: 1.6;
  }

  div {
    font-size: 1.6rem;
  }
`;

export const Container = styled.div`
  max-width: 90vw;
  margin: 0 auto;
`;

export const Feed = styled.div`
  ul {
    list-style: none;
  }
`;
