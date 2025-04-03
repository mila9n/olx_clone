import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #f2f0f0;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  z-index: 2;
  .searchbar2 {
    display: none;
  }

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.8rem;

    .burger_button > span {
      display: none;
    }

    .logo {
      width: 160px;

      h2 > a {
        text-decoration: none;
        font-size: 35px;
        font-weight: 700;
        color: #000;
      }
    }
    .searchbar {
      position: relative;
      width: 56%;

      form > input {
        width: 100%;
        padding: 12px 40px;
        font-size: 16px;
        outline: none;
        border: 1px solid gray;
        border-radius: 30px;

        &:focus {
          border: none;
          outline: 2px solid gray;
        }
      }

      form > span {
        position: absolute;
        z-index: 2;
        font-size: 18px;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
        color: rgba(0, 0, 0, 0.5);
      }
    }

    .burger_button > .links {
      width: 200px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      a {
        text-decoration: none;
        color: #000;
      }
      .login_button {
        text-decoration: underline;
        font-size: 20px;
        font-weight: 600;
      }
    }

    .profile {
      background-color: #000;
      height: 45px;
      width: 45px;
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 37px;
      overflow: hidden;
      box-shadow: 0px 0px 10px gray;
      & > svg {
        margin-top: 10px;
        color: white;
      }
    }

    .sell {
      width: 100px;
      height: 45px;
      display: flex;
      justify-content: center;
      font-size: 22px;
      background-color: #000;
      color: #fff !important;
      align-items: center;
      font-weight: 600;
      letter-spacing: 1px;
      box-shadow: 0px 0px 10px gray;
      transition: all 200ms ease-in-out;
    }

    .sell:hover {
      border-radius: 100px;
    }

    .sell:active {
      transform: scale(0.9);
    }
  }

  @media (max-width: 900px) {
    .container > .searchbar {
      width: 55%;

      form > input {
        width: 100%;
        padding: 10px 10px 10px 35px;
        font-size: 16px;
        outline: 1px solid gray;

        &:focus {
          outline: 2px solid black;
        }
      }

      form > span {
        width: 50px;
        font-size: 18px;
      }
    }

    .container > .burger_button > .links {
      width: 165px;
    }

    .links > .profile {
      height: 40px;
      width: 40px;
      font-size: 30px;
    }

    .links > .sell {
      width: 90px;
      height: 40px;
      font-size: 18px;
      font-weight: 600;
    }
  }

  @media (max-width: 700px) {
    padding: 0 0 10px;
    .container {
      padding: 0.2rem;
    }

    .container > .searchbar {
      display: none;
    }

    .searchbar2 {
      display: block;
      position: relative;
      width: 89%;
      margin: 0 auto;

      form > input {
        width: 100%;
        padding: 10px 35px;
        font-size: 15px;
        outline: none;
        border: 1px solid gray;
        border-radius: 30px;

        &:focus {
          border: none;
          outline: 2px solid gray;
        }
      }

      form > span {
        position: absolute;
        z-index: 2;
        font-size: 16px;
        top: 50%;
        transform: translateY(-50%);
        left: 10px;
        color: rgba(0, 0, 0, 0.5);
      }
    }
  }

  @media (max-width: 500px) {
    & > .container > .burger_button {
      display: block;
    }

    .container > .burger_button > span {
      width: 40px;
      height: 40px;
      font-size: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 5;
    }

    .container > .burger_button > .links {
      position: absolute;
      top: 0;
      right: 0;
      width: 0;
      height: 250px;
      z-index: 3;
      background-color: #fff;
      flex-direction: column;
      justify-content: flex-start;
      padding: 80px 0 0;
      align-items: flex-start;
      overflow: hidden;
      border-top-left-radius: 30px;
      border-bottom-left-radius: 30px;
      transition: all 400ms ease-in-out;
      & > a {
        margin-bottom: 20px;
      }
    }

    .container > .burger_button > .clicked {
      width: 70%;
      padding: 80px 25px 0;
      box-shadow: -20px 10px 40px rgba(99, 98, 98, 0.53);
    }
  }
`;
