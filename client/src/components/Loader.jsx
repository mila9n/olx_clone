import { LoaderStyle } from "./style/Loader.style";

const Loader = ({ isLoading }) => {
  return (
    <LoaderStyle>
      <div className={isLoading ? "innerBall" : null}></div>
    </LoaderStyle>
  );
};

export default Loader;
