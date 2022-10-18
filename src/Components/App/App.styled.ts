import styled from 'styled-components'

const StyledApp = styled.div`
  width: 100vw;
  height: auto !important;
  background: ${({ theme }) => theme.secondaryColor};

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default StyledApp
