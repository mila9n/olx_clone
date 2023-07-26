import styled from "styled-components";

export const LikeButtonStyle = styled.div`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  border-radius: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: 1px 1px 10px lightgray;
  z-index: 1;
  cursor: pointer;
  & > svg {
    width: 20px;
  }
`;
