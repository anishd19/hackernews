import styled from "styled-components";

export const StyledFeedItem = styled.li`
  display: flex;
  padding: 10px 0;
  background: ${({ theme }) => theme.colors.second};

  &:nth-child(2n-1) {
    background: ${({ theme }) => theme.colors.third};
  }
`;

export const Container = styled.div`
  display: flex;
`;
