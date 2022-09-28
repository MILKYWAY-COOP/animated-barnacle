import styled from 'styled-components'

export const StyledError = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  * {
    flex: 1;
  }

  .left404 {
    display: flex;
    flex-direction: column;
    color: #fffdd0;
    font-family: 'Reem Kufi Ink', sans-serif;

    h1 {
      font-size: 4em;
    }

    h2 {
      font-size: 2em;
      text-shadow: 0 0 10px #fffdd0;
    }

    p {
      font-size: 1.5em;
    }
  }

  .right404 {
    margin-left: 10em;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    background: #082567;

    .right404 {
      margin-left: 0;
      width: 100%;
      height: 100%;
    }

    h1,
    h2,
    p {
      text-align: center;
    }
  }
`
