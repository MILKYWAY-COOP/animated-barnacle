import styled from 'styled-components'

export const StyledHostel = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  background-color: ${({ theme }) => theme.secondaryColor};

  .top {
    width: 100%;
    padding-top: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 600;
    font-family: ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.universal1};

    h1 {
      font-size: 2rem;
    }
  }

  .images {
    width: calc(100% - 5em);
    height: 300px;
    display: grid;
    grid-template-columns: 50% 30%;
    justify-content: center;
    gap: 0.5em;

    .left {
      width: 100%;
      height: calc(400px + 0.5em);

      img {
        width: 100%;
        height: 100% !important;
        border-radius: 1em 0 0 1em;
      }
    }
    .right {
      width: 100%;
      height: 400px;
      display: grid;
      grid-template-rows: 50% 50%;
      gap: 0.5em;

      img {
        width: 100%;
        height: 100% !important;
      }
      .one {
        border-radius: 0 1em 0 0;
      }
      .two {
        border-radius: 0 0 1em 0;
      }
    }
  }

  .bottom {
    width: 100%;
    height: fit-content;
  }
`
