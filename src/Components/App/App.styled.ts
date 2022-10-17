import styled from 'styled-components'

const StyledApp = styled.div`
  width: 100vw;
  height: fit-content;
  background: ${({ theme }) => theme.secondaryColor};
  height: fit-content;

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default StyledApp
