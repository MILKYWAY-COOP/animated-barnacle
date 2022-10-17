import styled from 'styled-components'

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  transition: all 0.3s;

  @media (max-width: 500px) {
    min-width: calc(100vw - 10em);
  }
  @media (max-width: 600px) {
    min-width: calc(100vw - 10em);
  }
  @media (max-width: 700px) {
    min-width: calc(100vw - 10em);
  }

  @media (max-width: 800px) {
    min-width: calc(100vw - 18em);
  }

  @media (max-width: 900px) {
    min-width: calc(100vw - 15em);
  }

  @media (max-width: 1000px) {
    min-width: calc(100vw - 60em);
  }

  @media (min-width: 1000px) {
    min-width: calc(100vw - 66em);
  }

  &:hover {
    cursor: pointer;
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
