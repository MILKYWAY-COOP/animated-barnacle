import styled from 'styled-components'

export const StyledNavbar = styled.nav`
  @import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap');

  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 5em;
  padding: 0 1em;
  background: ${({ theme }) =>
    theme.mainColor}; // <--- This is the line that's causing the error
  transition: all 0.5s ease-in-out;

  .logo {
    font-size: 1.5em;
    color: ${({ theme }) => theme.universal1};
    font-family: 'Press Start 2P', cursive;
    cursor: pointer;
  }

  .Landlord {
    font-size: 12px;
    font-family: ${({ theme }) => theme.fontFamily};
    color: ${({ theme }) => theme.secondaryFontColor};
    padding: 10px;
    border-radius: 3px;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.secondaryColor};
    }

    @media (max-width: 768px) {
      background-color: ${({ theme }) => theme.secondaryColor};
    }
  }

  @media (max-width: 768px) {
    height: 4em;
    .search {
      display: none;
    }
  }
`
