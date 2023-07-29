import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductInformationCardStyle } from "../components/style/ProductInformationCard.style";
import ProductImageSlider from "../components/ProductImageSlider";
import LoadingSpinner from "../components/LadingSpinner";
import LikeButton from "../components/LikeButton";
import { useSelector } from "react-redux";
import { FaAngleLeft } from "react-icons/fa";

const ProductInfoPage = () => {
  const [product, setProduct] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

  // params that we are getting from router
  let { productId } = useParams();

  // fetching products from api
  const fetchProduct = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/products/${productId}`, {
        withCredentials: true,
      });
      setProduct(data.product);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // fetching liked products
  const fetchLikedProducts = async () => {
    try {
      const { data } = await axios.get("/likedProduct/get", {
        withCredentials: true,
      });
      // function call
      likedProductCheck(data.likedItem.products);
    } catch (error) {
      console.log(error);
    }
  };

  // function to check if product is already liked or not
  const likedProductCheck = (item) => {
    for (let i = 0; i < item.length; i++) {
      if (productId == item[i].productId) {
        setIsLiked(true);
        break;
      }
    }
  };

  // back button
  const handleBackClick = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLikedProducts();
    }
  }, [isAuthenticated]);

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <ProductInformationCardStyle>
      <button
        name="back-button"
        className="back_button"
        onClick={handleBackClick}
      >
        <FaAngleLeft className="back" />
        <span>Back</span>
      </button>
      {product.length != 0 && (
        <>
          <ProductImageSlider images={product?.images} title={product.title} />
          <LikeButton
            liked={isLiked}
            productId={productId}
            image={product.images[0]}
            title={product.title}
            price={product.price}
          />
        </>
      )}
      <div className="information">
        <h2>{product?.title}</h2>
        <h3>&#8377; {product?.price?.toLocaleString()}</h3>
        <h4>Description</h4>
        <p>{product?.description}</p>
        <span>
          <span className="heading">Mobile No </span>
          {product?.contact}
        </span>
        <span>
          <span className="heading">Email id</span> {product?.email}
        </span>
        <h5>Address</h5>
        <span className="address">Near by: {product?.neighbourhood}</span>
        <span className="address">City: {product?.city}</span>
        <span className="address">State: {product?.state}</span>
      </div>
    </ProductInformationCardStyle>
  );
};

export default ProductInfoPage;
