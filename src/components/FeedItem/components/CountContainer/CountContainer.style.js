import styled from "styled-components";
import media from "styled-media-query";

import { Button } from "../../../common/styles";

export const StyledCountContainer = styled.div`
  display: flex;

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
  }

  ${media.lessThan("medium")`
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .upvote-counter {
        padding-right: 0;
      }
    `}
`;

export const ArrowUpButton = styled(Button)`
  .arrow-up {
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid ${({ theme }) => theme.colors.greyLightOne};
    position: relative;
    top: -13px;
  }

  &.active .arrow-up {
    border-bottom: 10px solid ${({ theme }) => theme.colors.first};
  }
`;
