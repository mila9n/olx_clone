import styled from "styled-components";

export const CategoryStyle = styled.div`
  margin: 0 0 45px;
  h3 {
    font-size: 22px;
    font-weight: 600;
    margin-bottom: 10px;
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
      "Lucida Sans", Arial, sans-serif, sans-serif;
  }
  & > div {
    display: inline-flex;
    overflow-x: auto;
    width: 100%;
    gap: 2%;
    padding: 4px 3px;

    a {
      min-width: 22%;
      text-align: center;
      cursor: pointer;
      color: inherit;
      text-decoration: none;
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      padding: 10px 10px 5px;

      svg {
        font-size: 40px;
        margin: 0 auto;
        opacity: 0.8;
      }
      span {
        display: block;
        font-size: 12px;
      }
    }
    & {
      -ms-overflow-style: none; /* Internet Explorer 10+ */
      scrollbar-width: none; /* Firefox */
    }
    &::-webkit-scrollbar {
      display: none; /* Safari and Chrome */
    }
  }

  @media (max-width: 1000px) {
    & > div > a {
      min-width: 28%;
    }
  }
  @media (max-width: 700px) {
    & > div > a {
      min-width: 46%;
    }
  }
  @media (max-width: 600px) {
    margin-bottom: 35px;
    h3 {
      font-size: 18px;
      margin-bottom: 5px;
    }
    div > a {
      min-width: 28%;
      padding: 5px 10px;

      svg {
        font-size: 20px;
        margin: 0 auto;
        opacity: 0.8;
      }
      span {
        display: block;
        font-size: 11px;
      }
    }
  }

  @media (max-width: 400px) {
    & > div > a {
      min-width: 30%;
    }
  }
`;
