import styled from "styled-components";

export const BackButtonStyle = styled.button`
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 5px 10px;
  cursor: pointer;

  svg {
    font-size: 18px;
    transition: all 100ms ease-in-out;
  }

  &:hover svg,
  &:active + .svg {
    transform: translateX(-5px);
  }

  @media (max-width: 480px) {
    padding: 4px 6px;
    svg {
      font-size: 16px;
      transition: all 100ms ease-in-out;
    }
    span {
      display: none;
    }
  }
`;
