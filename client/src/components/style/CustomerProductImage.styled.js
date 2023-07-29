import styled from "styled-components";

export const ProductImagesStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px 15px;
  padding: 10px 4px;

  & > .image_box {
    border: 1px solid gray;
    position: relative;
    height: 150px;

    .cover_image {
      position: absolute;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      bottom: 0%;
      height: 35px;
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
    }

    .cover_image:active,
    .cover_image:hover {
      background-color: rgba(0, 0, 0, 0.7);
    }

    .cancel_mark {
      position: absolute;
      z-index: 1;
      top: -7px;
      right: -7px;
      opacity: 1;
      cursor: pointer;
      background-color: #fff;
      border-radius: 100px;
      box-shadow: 1px 2px 8px gray;
      padding: 3px;

      &:hover,
      &:active {
        background-color: #111;
        opacity: 1;
      }

      &:hover svg {
        color: #fff;
      }

      svg {
        width: 18px;
        height: 18px;
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
    min-height: 150px;

    span {
      font-size: 35px;
      opacity: 0.5;
    }

    input {
      display: none;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 650px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 374px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default ProductImagesStyle;
