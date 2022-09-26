import styled from 'styled-components';

export const StyledSearch = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 3em;
    background: ${({ theme }) => theme.universal1};
    border-radius: 0.5em;

    select {
      font-family: ${({ theme }) => theme.fontFamily};
      font-size: 14px;
      color: ${({ theme }) => theme.fontFamily};
      background: none;
      width: fit-content;
      appearance: none;
      border: 0;
      padding: 0.5em;
      cursor: pointer;
      outline: none;
      border-right: 1px solid black;
    }

    .btn {
      display: flex;
      align-items: center;
      justify-content: center;
      border: 0;
      border-radius: 0.5em;
      font-size: 14px;
      cursor: pointer;
      padding: 10px;
    }

    @media (max-width: 768px) {
        width: fit-content;
    }
`;