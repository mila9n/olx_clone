import styled from "styled-components";

export const SearchBarStyle = styled.form`
  position: relative;

  .search_result {
    position: absolute;
    z-index: 3;
    height: 0;
    width: 100%;
    background-color: #fff;
    box-shadow: 1px 4px 10px lightgray;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    transition: height 200ms ease-in-out;
    border-radius: 30px;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0 0;

      li {
        border-bottom: 1px solid lightgray;
        padding: 9px 10px;
        font-size: 15px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        cursor: pointer;
        span {
          width: 90%;
        }
        img {
          width: 30px;
        }
      }
      li:hover {
        font-weight: 600;
      }
    }
  }

  .visible {
    height: 250px;
    margin: 2px 0;
    padding: 10px 10px 20px;
    overflow: auto;
  }
`;
