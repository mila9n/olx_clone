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

  & > .category_items {
    display: inline-flex;
    overflow-x: scroll;
    width: 100%;
    gap: 2%;
    padding: 4px 3px 12px;
    transition: all 300ms ease-in-out;
  }
  .category_items::-webkit-scrollbar {
    height: 8px;
    margin-inline: 10px;
  }

  .category_items::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    height: 10px;
  }
  .category_items::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.84);
  }

  .category_items::-webkit-scrollbar-track {
    background-color: #fff;
  }

  @supports (scrollbar-color: #000 #fff) {
    .category_items {
      scrollbar-width: thin;
      scrollbar-color: rgba(0, 0, 0, 0.3) #fff;
    }
  }

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
