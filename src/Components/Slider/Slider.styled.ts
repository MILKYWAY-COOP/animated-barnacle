import styled from 'styled-components'

export const SliderContainer = styled.div`
  height: 300px;
  aspect-ratio: 1.5/2;
  position: relative;
  background-color: chartreuse;
  border-radius: 5px;

  .img {
    height: 300px;
    width: 100%;
    border-radius: 5px;
    background-position: center;
    background-size: cover;

    &:hover + .btns {
      opacity: 1;
    }
  }

  .btns {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    z-index: 1;
    padding: 0 5px;
    opacity: 0;
    transition: all 0.5s ease-in-out;

    &:hover {
      opacity: 1;
    }

    .btn {
      height: 25px;
      aspect-ratio: 1/1;
      background: none;
      border: #fff;
      cursor: pointer;
      font-size: 1.3em;
      background-color: none;
      border-radius: 50%;
      font-weight: 600;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.3s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }

    .hide {
      opacity: 0;
      cursor: default;
    }
  }

  .dots {
    display: flex;
    justify-content: center;
    position: absolute;
    bottom: 10px;
    width: 100%;
    z-index: 1;

    .dot {
      width: 5px;
      aspect-ratio: 1;
      border-radius: 50%;
      background: #fff;
      margin: 0 3px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
    }

    .active {
      transform: scale(2);
    }
  }
`
