import LikeButton from "./LikeButton";
import { Link } from "react-router-dom";
import { serverUrl } from "../utils/serverurl";

const AllProductCard = ({
  image,
  price,
  title,
  neighbourhood,
  city,
  productId,
  liked,
}) => {
  return (
    <div className="product_card">
      <Link to={`/productInfo/${productId}`}>
        <img src={`${serverUrl}${image}`} alt={`${title}`} loading="lazy" />
        <div className="product_info">
          <h2>&#8377; {price.toLocaleString()}</h2>
          <p>{title}</p>
          <span>
            {neighbourhood}, {city}
          </span>
        </div>
      </Link>
      <LikeButton
        productId={productId}
        image={image}
        price={price}
        title={title}
        liked={liked}
      />
    </div>
  );
};

export default AllProductCard;
