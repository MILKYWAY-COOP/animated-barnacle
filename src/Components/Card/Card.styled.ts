import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  transition: all 0.3s;

  @media (max-width: 500px) {
    width: calc(100vh - 3em);
  }

  .info {
    display: block;

    .upper {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      padding-top: 0.5em;

      .leftDiv {
        display: flex;
        justify-content: flex-start;

        h3 {
          font-size: 1.2em;
          font-weight: 600;
          color: ${({ theme }) => theme.secondaryFontColor};
          font-family: ${({ theme }) => theme.fontFamily};
        }
      }

      .rightDiv {
        display: flex;
        justify-content: center;
        align-items: center;

        span {
          font-size: 1.2em;
          color: ${({ theme }) => theme.secondaryFontColor};
          font-family: ${({ theme }) => theme.fontFamily};
        }
      }
    }

    .lower {
      padding-top: 0.5em;

      p {
        font-size: 1.2em;
        color: ${({ theme }) => theme.secondaryFontColor};
        font-family: ${({ theme }) => theme.fontFamily};

        span {
          font-weight: 600;
          letter-spacing: 1.5px;
          padding-left: 2px;
          color: yellow;
        }
      }
    }
  }
`
