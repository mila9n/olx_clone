import styled from "styled-components";

export const MyProductStyle = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 0 auto 20px;
  padding: 0 0 20px;

  & > .empty-message {
    width: 100%;
    font-size: 20px;
    font-weight: 600;
  }

  // product card
  .myproductcard {
    display: flex;
    column-gap: 25px;
    margin: 20px 0;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 1px 1px 10px lightgray;
    & > div:nth-of-type(1) {
      width: 250px;
      overflow: hidden;

      & > img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    & > div:nth-of-type(2) {
      padding: 10px;
      width: 75%;

      h2 {
        font-size: 28px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      p {
        font-size: 17px;
        opacity: 0.8;
        margin: 3px 0;
      }
      span {
        font-size: 20px;
      }
    }

    .buttons {
      display: flex;
      gap: 10px;
      margin: 10px 0;

      button {
        display: flex;
        align-items: center;
        gap: 8px;
        font-size: 16px;
        padding: 8px 20px;
        cursor: pointer;
        background-color: #000;
        color: #fff;
        transition: all 100ms ease-in-out;
      }

      button:hover,
      button:active {
        transform: scale(0.9);
      }
    }
  }

  @media (max-width: 800px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .myproductcard {
      width: 48%;
      display: flex;
      flex-direction: column;
      margin: 12px 0;
      & > div:nth-of-type(1) {
        margin: 0 auto;
        width: 200px;
        height: 200px;
        overflow: hidden;

        & > img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 5px 0 0;
        }
      }
      & > div:nth-of-type(2) {
        padding: 10px;
        width: 100%;

        h2 {
          font-size: 22px;
        }
        p {
          font-size: 15px;
        }
      }
    }
  }

  @media (max-width: 550px) {
    flex-direction: column;

    .myproductcard {
      width: 100%;
      max-width: 350px;
      display: flex;
      flex-direction: column;
      margin: 12px auto;
      & > div:nth-of-type(1) {
        width: 100%;
        overflow: hidden;

        & > img {
          margin: 0 auto;
          width: 250px;
          height: 200px;
          object-fit: contain;
        }
      }
      & > div:nth-of-type(2) {
        padding: 10px;
        width: 100%;

        h2 {
          font-size: 20px;
        }
        p {
          font-size: 15px;
          margin: 2px 0;
        }
        span {
          font-size: 18px;
        }
      }
    }

    .buttons {
      display: flex;
      gap: 10px;
      margin: 5px 0 !important;

      button {
        font-size: 15px !important;
        padding: 6px 15px !important;
      }
    }
  }
`;
