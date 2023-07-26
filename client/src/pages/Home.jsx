import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AllProductStyle } from "../components/style/AllProducts.style";
import AllProductCard from "../components/AllProductCard";
import ProductsSkeleton from "../components/ProductsSkeleton";
import { useSelector } from "react-redux";

const HomePage = () => {
  const [likedProducts, setLikedProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // fetching all the products
  const fetchAllProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/products/allProducts", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setAllProducts(data.products);
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  // fetching liked products
  const fetchLikedProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get("/likedProduct/get", {
        withCredentials: true,
      });
      setLikedProducts(data.likedItem.products);
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
  }, [isAuthenticated]);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  const products =
    allProducts.length > 0 &&
    allProducts.map((product) => {
      let liked = false;
      if (likedProducts.length > 0) {
        for (let i = 0; i < likedProducts.length; i++) {
          if (product._id == likedProducts[i].productId) {
            liked = true;
            i = likedProducts.length;
          }
        }
      }
      return (
        <AllProductCard
          key={product._id}
          price={product.price}
          title={product.title}
          image={product.images[0]}
          neighbourhood={product.neighbourhood}
          city={product.city}
          productId={product._id}
          liked={liked}
        />
      );
    });

  if (loading) {
    return <ProductsSkeleton />;
  }

  return (
    <AllProductStyle>
      <section>{products}</section>
    </AllProductStyle>
  );
};

export default HomePage;
