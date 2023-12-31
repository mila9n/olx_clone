import axios from "axios";
import { useEffect, useState } from "react";
import LikedProductCard from "../components/LikedProductCard";
import { LikedProductsStyle } from "../components/style/LikedProducts.style";
import ProductsSkeleton from "../components/ProductsSkeleton";
import { useSelector } from "react-redux";

const LikedProductPage = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // fetch liked products
  const fetchLikedProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/likedProduct/get", {
        withCredentials: true,
      });
      setLikedProducts(data.likedItem?.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchLikedProducts();
    }
  }, [refresh, isAuthenticated]);

  const likedProductsArr = likedProducts?.map((product) => {
    return (
      <LikedProductCard
        key={product.productId}
        image={product.image}
        price={product.price}
        title={product.title}
        productId={product.productId}
        liked={true}
        setRefresh={setRefresh}
      />
    );
  });

  const skeletonArray = Array.from(Array(3));

  return (
    <LikedProductsStyle>
      {loading
        ? skeletonArray.map((item, index) => <ProductsSkeleton key={index} />)
        : likedProductsArr}
      {!loading && likedProducts.length == 0 && (
        <span className="empty-message">{`No Liked Products.`}</span>
      )}
    </LikedProductsStyle>
  );
};

export default LikedProductPage;
