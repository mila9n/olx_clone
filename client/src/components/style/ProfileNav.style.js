import styled from "styled-components";

export const ProfileNavStyle = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto 30px;
  display: flex;
  gap: 20px;
  align-items: center;

  a {
    text-decoration: none;
    font-size: 17px;
    padding: 10px 25px;
    border-radius: 100px;
    box-shadow: 2px 0px 10px gray;
    color: #000;
    font-weight: 500;
  }

  .selected {
    background-color: #000;
    color: #fff;
    outline: 3px solid cyan;
    outline-offset: -5px;
  }

  @media (max-width: 500px) {
    a {
      font-size: 15px;
      padding: 8px 20px;
      border-radius: 100px;
      box-shadow: 2px 0px 10px gray;
      color: #000;
      font-weight: 500;
    }

    .selected {
      outline: 2px solid cyan;
      outline-offset: -4px;
    }
  }
`;
