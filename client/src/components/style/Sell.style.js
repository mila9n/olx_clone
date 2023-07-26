import styled from "styled-components";

const SellPageStyle = styled.section`
  max-width: 900px;
  width: 70%;
  margin: 2rem auto;
  padding: 25px 20px;
  border: 1px solid lightgray;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
  border-radius: 20px;

  & > form {
    label {
      font-size: 1rem;
    }

    input,
    textarea {
      display: block;
      margin: 0 0 18px;
      width: 100%;
      padding: 10px 15px;
      border-radius: 8px;
      border: 1px solid gray;
    }

    textarea {
      resize: vertical;
      height: 100px;
    }

    button {
      width: 50%;
      display: block;
      padding: 10px;
      border-radius: 10px;
      margin: 30px auto 10px;
      cursor: pointer;
      border: none;
      background-color: #000;
      color: #fff;
      box-shadow: -3px -3px 1px cyan;
    }

    button:active {
      transform: scale(0.94);
      box-shadow: 3px 3px 1px cyan;
    }
  }

  div.address {
    display: grid;
    margin: 10px 0 18px;
    gap: 15px;
    grid-template-columns: repeat(3, 1fr);

    input {
      margin-bottom: 0px;
    }
  }

  @media (max-width: 1000px) {
    width: 96%;
  }

  @media (max-width: 750px) {
    div.address {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 550px) {
    div.address {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export default SellPageStyle;
