import styled from 'styled-components';

export const StyledMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.mainColor};
  padding: .5em;

  @media (min-width: 768px) {
    display: none;
  }
`;
