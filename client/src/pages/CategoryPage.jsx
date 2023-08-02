import { useParams } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import AllProductCard from "../components/AllProductCard";
import { AllProductStyle } from "../components/style/AllProducts.style";
import BackButton from "../components/BackButton";
import ProductsSkeleton from "../components/ProductsSkeleton";
import { useQuery } from "@tanstack/react-query";

const CategoryPage = () => {
  const { name } = useParams();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const fetchProductsByCategory = async (isAuthenticated) => {
    try {
      const categoryProductResponse = await axios.get(
        `/productCategory/${name}`
      );

      const likedProducts =
        isAuthenticated &&
        (await axios.get(`/likedProduct/get`, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }));

      return {
        categoryProducts: categoryProductResponse?.data?.products || [],
        likedProducts: likedProducts?.data?.likedItem.products || [],
      };
    } catch (error) {
      throw new Error("Something wend wrong. Please try again later");
    }
  };

  const { data, isLoading, isFetching } = useQuery(
    ["category Products", isAuthenticated],
    () => fetchProductsByCategory(isAuthenticated),
    {
      keepPreviousData: false,
    }
  );

  const productsArr =
    data &&
    data.categoryProducts.map((product) => {
      let liked = !data.likedProducts
        ? false
        : data?.likedProducts.some(
            (likedProduct) => product._id == likedProduct.productId
          );
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

  const skeletonArr = Array.from(Array(4));

  return (
    <AllProductStyle>
      <div className="category_top">
        <BackButton />
        <h3 className="category_heading">Category:- {name}</h3>
      </div>
      {isLoading || isFetching ? (
        <section>
          {skeletonArr.map((item, index) => (
            <ProductsSkeleton key={index} />
          ))}
        </section>
      ) : productsArr.length > 0 ? (
        <section>{productsArr}</section>
      ) : (
        <p className="no_product_message">No Product Available</p>
      )}
    </AllProductStyle>
  );
};

export default CategoryPage;
