import styled from "styled-components";

export const LoaderStyle = styled.div`
  border: 1.8px solid gray;
  width: 16px;
  height: 16px;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  & > .innerBall {
    width: 65%;
    height: 8px;
    position: absolute;
    left: -10%;
    background-color: #fff;
    transform-origin: 100%;
    box-shadow: 0px 0px 2px 2px rgba(255, 255, 255, 1);
    animation-name: loader;
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
