import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AllProductCard from "../components/AllProductCard";
import { AllProductStyle } from "../components/style/AllProducts.style";
import BackButton from "../components/BackButton";
import ProductsSkeleton from "../components/ProductsSkeleton";

const CategoryPage = () => {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const { name } = useParams();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // fetch product of category
  const fetchCategoryProduct = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/productCategory/${name}`);
      setProducts(data.products);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  // fetch liked Products
  const fetchLikedProducts = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`/likedProduct/get`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      setLikedProducts(data.likedItem.products);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  // loop to check whether product is liked or not
  const productsArr =
    products.length > 0 &&
    products.map((product) => {
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

  useEffect(() => {
    fetchCategoryProduct();
  }, [name]);

  useEffect(() => {
    if (isAuthenticated) {
      fetchLikedProducts();
    }
  }, [isAuthenticated]);

  return (
    <AllProductStyle>
      <div className="category_top">
        <BackButton />
        <h3 className="category_heading">Category:- {name}</h3>
      </div>
      {loading ? (
        <ProductsSkeleton />
      ) : productsArr ? (
        <section>{productsArr}</section>
      ) : (
        <p className="no_product_message">No Product Available</p>
      )}
    </AllProductStyle>
  );
};

export default CategoryPage;
