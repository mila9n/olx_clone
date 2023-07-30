import styled from "styled-components";

export const ProductInformationCardStyle = styled.section`
  border: 1px solid lightgray;
  max-width: 1200px;
  width: 90%;
  margin: 20px auto;
  padding: 15px;
  position: relative;

  & > .images {
    display: flex;
    width: 100%;
    margin: 0 auto 25px;
    position: relative;

    img {
      width: 400px;
      aspect-ratio: 4/3;
      margin: 0 auto;
      object-fit: contain;
      transition: all 300ms ease-in-out;
    }

    button {
      position: absolute;
      z-index: 1;
      width: 50px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 100px;
      border: none;
      background-color: #000;
      color: #fff;
      cursor: pointer;
      font-size: 30px;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0.3;
      transition: opacity 300ms ease-in-out;
    }

    button:hover {
      opacity: 1;
    }

    .right {
      right: 3%;
    }
    .left {
      left: 3%;
    }
  }

  .information {
    h2 {
      font-size: 22px;
      text-transform: capitalize;
      color: gray;
    }
    h3 {
      font-size: 30px;
      margin: 5px 0;
    }
    h4 {
      font-size: 18px;
    }

    p {
      font-size: 15px;
      line-height: 1.4;
      max-width: 80%;
      margin-bottom: 10px;
    }
    span {
      display: table;
      font-weight: 500;
      margin-bottom: 5px;
    }
    .heading {
      font-weight: 700;
      margin-bottom: 0;
      font-size: 18px;
    }
    h5 {
      font-size: 18px;
      margin-top: 8px;
    }
    .address {
      font-size: 15px;
      text-transform: capitalize;
    }
  }

  @media (max-width: 1000px) {
    & > .images {
      img {
        width: 400px;
        aspect-ratio: 4/3;
      }
    }
  }

  @media (max-width: 800px) {
    & > .images {
      img {
        width: 350px;
        aspect-ratio: 4/3;
      }

      button {
        width: 40px;
        height: 40px;
        font-size: 20px;
      }

      .right {
        right: 0;
      }
      .left {
        left: 0;
      }
    }
  }

  @media (max-width: 600px) {
    width: 96%;
    padding: 8px;

    & > .images {
      img {
        width: 250px;
        aspect-ratio: 4/3;
      }

      button {
        width: 40px;
        height: 40px;
        font-size: 20px;
      }
    }

    .information {
      h2 {
        font-size: 18px;
      }
      h3 {
        font-size: 20px;
        margin: 4px 0;
      }
      h4 {
        font-size: 16px;
      }

      p {
        font-size: 14px;
        line-height: 1.3;
        max-width: 100%;
        margin-bottom: 10px;
      }
      span {
        display: table;
        font-size: 14px;
        font-weight: 500;
        margin-bottom: 5px;
      }
      .heading {
        font-weight: 700;
        margin-bottom: 0;
        font-size: 16px;
      }
      h5 {
        font-size: 16px;
        margin-top: 8px;
      }
      .address {
        font-size: 14px;
        text-transform: capitalize;
        line-height: 1.2;
      }
    }
  }
`;
