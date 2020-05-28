import styled from "styled-components";

export const StyledUpvoteChart = styled.div`
  border-top: 10px solid ${({ theme }) => theme.colors.first};
  border-bottom: 10px solid ${({ theme }) => theme.colors.first};
  padding: 10px 0;
  background: ${({ theme }) => theme.colors.second};
`;
