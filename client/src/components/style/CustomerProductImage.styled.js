import styled from "styled-components";

export const ProductImagesStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 15px 15px;
  padding: 10px 4px;

  & > .image_box {
    border: 1px solid gray;
    position: relative;
    height: 180px;

    .cover_image {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      bottom: 0%;
      height: 40px;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.3);
      color: #fff;
    }

    .cover_image:active {
      background-color: rgba(0, 0, 0, 0.8);
    }

    .cancel_mark {
      position: absolute;
      z-index: 1;
      top: 0;
      right: 0;
      opacity: 0.5;
      cursor: pointer;

      &:hover,
      &:active {
        background-color: #111;
        opacity: 1;
      }

      &:hover svg {
        color: #fff;
      }

      svg {
        width: 25px;
        height: 25px;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .file_upload {
    border: 1px solid gray;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    position: relative;
    min-height: 180px;

    span {
      /* position: absolute; */
      font-size: 35px;
      opacity: 0.5;
    }

    input {
      display: none;
    }
  }

  @media (max-width: 750px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 450px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export default ProductImagesStyle;
