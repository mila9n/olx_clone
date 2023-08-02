import styled from "styled-components";

export const ProductSkeletonCardStyle = styled.div`
  width: 100%;
  min-height: 250px;
  border: 1px solid lightgray;
  padding: 0.5rem;

  .image {
    width: 100%;
    height: 60%;
    background-color: #dddbdd;
  }

  .info {
    padding: 10px 0;
    h2 {
      width: 65%;
      height: 20px;
      background-color: #dddbdd;
      margin-bottom: 12px;
    }

    p {
      width: 100%;
      height: 11px;
      background-color: #dddbdd;
      margin-bottom: 8px;

      &:nth-last-of-type(1) {
        width: 80%;
      }
    }
  }

  .skeleton-box {
    position: relative;
    overflow: hidden;

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
  }
`;
