import styled from 'styled-components'

export const SliderContainer = styled.div`
  .slider {
    position: relative;
    background: #000116;
    width: 250px;
    height: 200px;
    margin: 20px;
    overflow: hidden;
    border-radius: 10px;

    &:hover {
      .navigation {
        opacity: 1;
      }
    }

    .slide {
      position: absolute;
      width: 100%;
      height: 100%;
      clip-path: circle(0% at 0 100%);

      &.active {
        transition: 0.00001s;
        clip-path: circle(150% at 0 50%);
      }

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }

    .navigation {
      display: flex;
      align-items: center;
      justify-content: space-between;
      opacity: 0;
      transition: opacity 0.5s ease;
      position: absolute;
      top: 45%;
      width: 100%;
      height: 20px;

      .prev-btn,
      .next-btn {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 20px;
        z-index: 999;
        font-size: 0.7em;
        color: rgba(0, 0, 0, 0.9);
        background: rgba(255, 255, 255, 0.8);
        cursor: pointer;
        border-radius: 50%;
      }
    }

    .n-visibility {
      position: absolute;
      z-index: 9999;
      display: flex;
      justify-content: center;
      bottom: 5%;
      width: 100%;
      justify-content: center;

      .slide-icon {
        z-index: 999;
        background: rgba(255, 255, 255, 0.5);
        width: 10px;
        height: 10px;
        margin: 0 5px;
        border-radius: 50%;
      }

      .slide-icon.active {
        background: #4285f4;
      }
    }
  }
`
