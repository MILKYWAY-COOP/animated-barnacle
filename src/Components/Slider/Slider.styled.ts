import styled from 'styled-components'

export const SliderContainer = styled.div`
  width: 800px;
  height: 500px;
  border-radius: 10px;
  overflow: hidden;

  .slides {
    width: 500%;
    height: 500px;
    display: flex;
  }

  .slides input {
    display: none;
  }

  .slide {
    width: 20%;
    transition: 2s;
  }

  .slide img {
    width: 800px;
    height: 500px;
  }

  /*css for manual slide navigation*/

  .navigation-manual {
    position: absolute;
    width: 800px;
    margin-top: -40px;
    display: flex;
    justify-content: center;
  }

  .manual-btn {
    border: 2px solid #40d3dc;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    transition: 1s;
  }

  .manual-btn:not(:last-child) {
    margin-right: 40px;
  }

  .manual-btn:hover {
    background: #40d3dc;
  }

  #radio0:checked ~ .first {
    margin-left: 0;
  }

  #radio1:checked ~ .first {
    margin-left: -20%;
  }

  #radio2:checked ~ .first {
    margin-left: -40%;
  }

  #radio3:checked ~ .first {
    margin-left: -60%;
  }

  /*css for automatic navigation*/

  .navigation-auto {
    position: absolute;
    display: flex;
    width: 800px;
    justify-content: center;
    margin-top: 460px;
  }

  .navigation-auto div {
    border: 2px solid #40d3dc;
    padding: 5px;
    border-radius: 10px;
    transition: 1s;
  }

  .navigation-auto div:not(:last-child) {
    margin-right: 40px;
  }

  #radio0:checked ~ .navigation-auto .auto-btn0 {
    background: #40d3dc;
  }

  #radio1:checked ~ .navigation-auto .auto-btn1 {
    background: #40d3dc;
  }

  #radio2:checked ~ .navigation-auto .auto-btn2 {
    background: #40d3dc;
  }

  #radio3:checked ~ .navigation-auto .auto-btn3 {
    background: #40d3dc;
  }
`
