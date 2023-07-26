import axios from "axios";
import { useEffect, useState } from "react";
import MyProductCard from "./MyProductCard";
import { MyProductStyle } from "./style/Myproduct.style";
import MyProductsSkeleton from "./MyProductsSkeleton";
import { useSelector } from "react-redux";

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // fetching my products from api
  const fetchProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/products/myProduct", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchProducts();
    }
  }, [refresh, isAuthenticated]);

  const ProductsArr =
    products.length > 0 &&
    products?.map((item) => {
      return (
        <MyProductCard
          key={item._id}
          title={item.title}
          price={item.price}
          image={item.images[0]}
          description={item.description}
          productId={item._id}
          setRefresh={setRefresh}
        />
      );
    });

  if (loading) {
    return <MyProductsSkeleton />;
  }

  return (
    <MyProductStyle>
      {products.length == 0 ? (
        <span className="empty-message">No Products Available.</span>
      ) : (
        ProductsArr
      )}
    </MyProductStyle>
  );
};

export default MyProducts;
