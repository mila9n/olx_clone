import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductInformationCardStyle } from "../components/style/ProductInformationCard.style";
import ProductImageSlider from "../components/ProductImageSlider";
import LoadingSpinner from "../components/LadingSpinner";
import LikeButton from "../components/LikeButton";
import { useSelector } from "react-redux";

const ProductInfoPage = () => {
  const [product, setProduct] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [isLiked, setIsLiked] = useState(false);
  const [loading, setLoading] = useState(true);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

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
      setLikedProducts(data.likedItem.products);
    } catch (error) {
      console.log(error);
    }
  };

  // checking if product is liked or not
  const likedProductCheck = () => {
    for (let i = 0; i < likedProducts.length; i++) {
      if (product._id == likedProducts[i].productId) {
        setIsLiked(true);
        break;
      }
    }
  };

  useEffect(() => {
    if (likedProducts.length > 0) {
      likedProductCheck();
    }
  }, [likedProducts.length]);

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
