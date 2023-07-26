import styled from "styled-components";

export const LikedProductsStyle = styled.section`
  width: 90%;
  max-width: 900px;
  margin: 0 auto 20px;
  padding: 0 0 20px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 1.4rem;

  & > .empty-message {
    width: 100%;
    white-space: nowrap;
    font-size: 20px;
    font-weight: 600;
  }

  & > div {
    width: 100%;
    position: relative;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border: 1px solid gray;
    padding: 5px 10px;

    a {
      text-decoration: none;
      color: inherit;
      img {
        width: 100%;
        height: 150px;
        object-fit: contain;
      }

      .info {
        padding: 0.4rem 0;

        h2 {
          font-size: 17px;
          font-weight: 600;
        }

        p {
          font-size: 15px;
          width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }

  @media (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 1.2rem;
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 1.2rem;
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.2rem;
  }
`;
