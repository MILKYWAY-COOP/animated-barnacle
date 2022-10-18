import styled from 'styled-components'

export const StyledHostel = styled.div`
  width: 100vw;
  height: fit-content;
  padding: 10px;
  display: flex;
  flex-direction: column;

  .top {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-weight: 600;
      font-family: ${({ theme }) => theme.fontFamily};
      color: ${({ theme }) => theme.universal1};
      h1 {
        font-size: 2rem;
      }
    }
  }

  .est {
    h1 {
      font-family: ${({ theme }) => theme.fontFamily};
      color: ${({ theme }) => theme.universal1};
      font-size: 1.2rem;
      font-weight: 400;
    }
  }

  .images {
    width: 100%;
    display: grid;
    grid-template-columns: 70% 30%;
    gap: 1em;

    .left {
      width: 100%;
    }
  }
`
