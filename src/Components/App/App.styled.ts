import styled from 'styled-components'

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  background: ${({ theme }) => theme.secondaryColor};
  padding: 1em;
`

export default StyledApp
