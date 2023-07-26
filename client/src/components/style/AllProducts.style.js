import styled from "styled-components";

export const AllProductStyle = styled.main`
  width: 90%;
  max-width: 1300px;
  margin: 0.5rem auto;
  padding: 0.5rem 0 1rem;
  /* border: 1px solid black; */

  & > section {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 1.4rem;

    .product_card {
      border: 1px solid lightgray;
      padding: 0.5rem 0.6rem 0.2rem;
      cursor: pointer;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      position: relative;
      transition: all 300ms ease-in-out;

      a {
        text-decoration: none;
        color: inherit;
        img {
          width: 100%;
          height: 200px;
          object-fit: contain;
          transition: all 300ms ease-in-out;
        }

        .product_info {
          margin: 0.8rem 0 0;
          h2 {
            font-size: 17px;
            margin: 0 0 2px;
            font-weight: 600;
            line-height: 1;
          }

          p {
            font-size: 13px;
            font-weight: 400;
            margin-bottom: 0.5rem;
            color: #111;
            width: 100%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-transform: capitalize;
          }

          span {
            font-size: 13px;
            color: gray;
            width: 100%;
            display: inline-block;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            text-transform: capitalize;
          }
        }
      }
    }
  }

  @media (max-width: 1200px) {
    & > section {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media (max-width: 1000px) {
    width: 92%;
    & > section {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  @media (max-width: 650px) {
    width: 94%;
    & > section {
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;

      .product_card {
        a > img {
          width: 100%;
          height: 200px;
          object-fit: contain;
        }
        .product_info {
          h2 {
            font-size: 14px;
          }

          p {
            font-size: 12px;
            margin-bottom: 0.1rem;
          }

          span {
            font-size: 12px;
          }
        }
      }
    }
  }

  @media (max-width: 500px) {
    & > section > .product_card {
      a > img {
        width: 100%;
        height: 120px;
        object-fit: contain;
      }
      a > .product_info {
        margin: 0.8rem 0 0;
        h2 {
          font-size: 16px;
          line-height: 1.2;
        }

        p {
          font-size: 13px;
          font-weight: 400;
          margin-bottom: 0.2rem;
        }

        span {
          font-size: 12px;
        }
      }
    }
  }
`;
