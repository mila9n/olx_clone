import styled from "styled-components";

export const LoaderStyle = styled.div`
  width: 18px;
  height: 18px;
  border-radius: 50%;
  border: 3px solid #f3f3f3;
  border-top: 2px solid #383636;
  animation: spinner 1.5s linear infinite;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
