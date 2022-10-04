import styled from 'styled-components'

const StyledApp = styled.div`
  width: 100vw;
  height: fit-content;
  background: ${({ theme }) => theme.secondaryColor};
  padding: 1em;

  @media (max-width: 768px) {
    height: fit-content;

  }
`

export default StyledApp
