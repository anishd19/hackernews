import styled from "styled-components";

export const StyledCountContainer = styled.div`
  display: flex;

  .count-container {
    display: flex;
  }

  .comment-count {
    min-width: 10rem;
    text-align: center;
  }

  .upvote-counter {
    display: flex;
    padding-right: 10px;

    .upvote-count {
      margin-right: 5px;
    }

    button {
      background: transparent;
      border: transparent;
      cursor: pointer;
    }

    .arrow-up {
      width: 0;
      height: 0;
      border-left: 10px solid transparent;
      border-right: 10px solid transparent;
      border-bottom: 10px solid ${({ theme }) => theme.colors.greyLightOne};
      position: relative;
      top: -13px;
    }

    .active .arrow-up {
      border-bottom: 10px solid ${({ theme }) => theme.colors.first};
    }
  }
`;
