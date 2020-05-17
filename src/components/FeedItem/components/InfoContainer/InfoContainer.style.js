import styled from "styled-components";

export const StyledInfoContainer = styled.div`
  display: flex;

  h4.title {
    font-weight: 500;
    color: ${({ theme }) => theme.colors.grey};
  }

  .domain,
  .info {
    margin-left: 5px;
    font-size: 1.2rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.greyLightOne};
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.greyLightOne};

    span {
      color: ${({ theme }) => theme.colors.grey};
    }
  }

  .domain {
    text-decoration: none;
  }

  button {
    background: #00000000;
    border: #00000000;
    cursor: pointer;
  }
`;
