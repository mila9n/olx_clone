import styled from "styled-components";

export const FormStyle = styled.div`
  width: 60%;
  max-width: 800px;
  margin: 60px auto;
  text-align: center;
  box-shadow: 1px 1px 10px lightgray;
  padding: 10px 10px 30px;
  border-radius: 10px;

  h2 {
    font-size: 40px;
    margin: 0 0 15px;
  }

  input {
    width: 80%;
    padding: 10px 15px;
    font-size: 16px;
    margin: 0 0 20px;
  }

  .checkbox_container {
    width: 80%;
    margin: 0 auto 10px;
    display: flex;
    align-items: center;
    position: relative;

    input {
      width: 15px;
      height: 15px;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      accent-color: #000;
    }

    label {
      margin-left: 20px;
      font-size: 15px;
    }
  }

  button {
    width: 150px;
    padding: 8px 0;
    font-size: 16px;
    margin: 8px 0;
    background-color: #000;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: width 300ms ease-in-out;
  }

  button:hover {
    width: 160px;
  }

  span {
    display: table;
    margin: 10px auto;
  }

  a {
    text-decoration: none;
  }

  a:hover {
    font-weight: 500;
    text-decoration: underline;
  }

  @media (max-width: 900px) {
    width: 80%;
    input,
    .checkbox_container {
      width: 90%;
    }
  }
  @media (max-width: 600px) {
    width: 92%;
    h2 {
      font-size: 30px;
    }
    form > div > input {
      width: 100%;
      margin: 0 0 15px;
      font-size: 15px;
    }
    .checkbox_container {
      width: 100%;
    }
  }
`;
