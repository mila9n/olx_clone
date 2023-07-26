import LikeButton from "./LikeButton";
import { serverUrl } from "../utils/serverurl";
import { Link } from "react-router-dom";

const LikedProductCard = ({
  image,
  price,
  title,
  productId,
  liked,
  setRefresh,
}) => {
  return (
    <div>
      <Link to={`/productInfo/${productId}`}>
        <img src={`${serverUrl}${image}`} alt={title} />
        <div className="info">
          <h2>&#8377; {price.toLocaleString()}</h2>
          <p>{title}</p>
        </div>
      </Link>
      <LikeButton liked={liked} productId={productId} setRefresh={setRefresh} />
    </div>
  );
};

export default LikedProductCard;
