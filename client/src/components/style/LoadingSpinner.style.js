import styled from "styled-components";

// brilliant idea to make spinner
export const LoadingSpinnerStyle = styled.div`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  .loading-spinner {
    width: 50px;
    height: 50px;
    border: 8px solid #f3f3f3; /* Light grey */
    border-top: 8px solid #383636; /* Blue */
    border-radius: 50%;
    animation: spinner 1.5s linear infinite;
  }
`;
