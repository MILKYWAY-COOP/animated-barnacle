import styled from 'styled-components'

const StyledApp = styled.div`
  width: 100vw;
  /* height: calc(100vh - 80px); */
  height: auto;
  background: ${({ theme }) => theme.secondaryColor};
  padding: 1em;

  @media (max-width: 768px) {
    height: calc(100vh - 128px);
  }
`

export default StyledApp
