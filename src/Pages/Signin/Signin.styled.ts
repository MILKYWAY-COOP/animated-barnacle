import styled from 'styled-components'

export const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${({ theme }) => theme.secondaryColor};
  width: auto;
  transition: all 0.5s ease;

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.34) 0px 3px 8px;
    padding: 1em;
    border-radius: 3px;

    .title {
      font-size: 1.5em;
      font-family: ${({ theme }) => theme.fontFamily};
      color: ${({ theme }) => theme.universal1};
      padding: 0.5em;

      @media (max-width: 768px) {
        text-align: center;
      }
    }

    .p,
    .forgot,
    span {
      margin-bottom: 0.5em;
      font-family: ${({ theme }) => theme.fontFamily};
      color: ${({ theme }) => theme.universal1};
    }

    .button {
      button {
        font-family: ${({ theme }) => theme.fontFamily};
        padding: 12px 16px 12px 42px;
        border: none;
        border-radius: 3px;
        font-size: 16px;
        background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
        background-repeat: no-repeat;
        background-position: 5% 50%;
        cursor: pointer;
      }
    }

    a {
      text-decoration: underline;
      cursor: pointer;
    }

    span {
      margin-top: 0.5em;
    }
  }
`

export const StyledRegister = styled.div`
  form {
    display: flex;
    flex-direction: column;
    align-items: left;
    width: 300px;
    transition: all 0.5s ease;

    input {
      width: 100%;
      height: 50px;
      padding: 0.5em;
      margin-bottom: 0.5em;
      border: none;
      border-radius: 3px;
      font-size: 16px;
      outline: none;
      font-family: 'Reem Kufi Ink', sans-serif;
    }

    button {
      width: 100%;
      height: 50px;
      margin-bottom: 0.5em;
      border: none;
      border-radius: 3px;
      font-family: 'Reem Kufi Ink', sans-serif;
      font-size: 16px;
      outline: none;
      background: ${({ theme }) => theme.primaryColor};
      cursor: pointer;

      &:hover {
        background: ${({ theme }) => theme.mainColor};
      }
    }

    p {
      margin-bottom: 0.2em;
      text-align: left;
      font-family: 'Reem Kufi Ink', sans-serif;
      transition: all 0.5s ease;
      color: red;
    }
  }
`
