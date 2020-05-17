import styled from "styled-components";
import media from "styled-media-query";

import { Button } from "../../../common/styles";

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

  ${media.lessThan("medium")`
    flex-direction: column;

    .domain, .info {
      margin-left: 0;
    }
  `}
`;

export const HideButton = styled(Button)``;
