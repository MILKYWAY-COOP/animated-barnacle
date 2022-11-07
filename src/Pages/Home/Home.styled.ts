import styled from 'styled-components'

export const StyledHome = styled.div`
  width: 100%;
  height: fit-content;
  padding: 1em;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-content: center;
  flex-wrap: wrap;
  gap: 20px;
  background-color: ${({ theme }) => theme.secondaryColor};
`
