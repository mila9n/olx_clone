import styled from "styled-components";

export const MyProductsSkeletonStyle = styled.div`
  width: 90%;
  max-width: 900px;
  margin: 1rem auto;
  padding: 0 0 5px;

  & > div {
    display: flex;
    gap: 1rem;
    border: 1px solid lightgray;
    margin-bottom: 25px;
    /* padding: 1rem; */
    border-radius: 20px;
    overflow: hidden;

    .image {
      width: 250px;
      height: 250px;
    }

    .info {
      width: 70%;
      padding: 1rem;

      h2 {
        width: 60%;
        height: 25px;
        margin-bottom: 15px;
      }

      span {
        display: table;
        width: 40%;
        height: 15px;
        margin-bottom: 30px;
      }

      p {
        width: 100%;
        height: 15px;
        margin-bottom: 10px;

        &:nth-of-type(4) {
          width: 80%;
        }
      }
    }
  }

  .skeleton-box {
    position: relative;
    overflow: hidden;
    background-color: #dddbdd;

    &::after {
      position: absolute;
      z-index: 1;
      inset: 0;
      transform: translateX(-100%);
      background-image: linear-gradient(
        90deg,
        rgba(255, 255, 255, 0) 0,
        rgba(255, 255, 255, 0.2) 20%,
        rgba(255, 255, 255, 0.5) 60%,
        rgba(255, 255, 255, 0)
      );
      animation: shimmer 2s infinite;
      content: "";
    }

    @keyframes shimmer {
      100% {
        transform: translateX(100%);
      }
    }
  }

  @media (max-width: 550px) {
    width: 90%;
    max-width: 350px;

    & > div {
      flex-direction: column;
      gap: 0.4rem;

      .image {
        width: 100%;
      }

      .info {
        width: 100%;
      }
    }
  }
`;
