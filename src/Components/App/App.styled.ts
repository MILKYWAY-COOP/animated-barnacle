import styled from 'styled-components'

const StyledApp = styled.div`
  width: 100vw;
  height: calc(100vh - 80px);
  background: ${({ theme }) => theme.secondaryColor};
  padding: 1em;
`

export default StyledApp
