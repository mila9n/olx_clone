import axios from "axios";
import { useState } from "react";
import { AllProductStyle } from "../components/style/AllProducts.style";
import AllProductCard from "../components/AllProductCard";
import ProductsSkeleton from "../components/ProductsSkeleton";
import { useSelector } from "react-redux";
import Category from "../components/Category";
import { useQuery } from "@tanstack/react-query";

const HomePage = () => {
  const [page, setPage] = useState(1);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const fetchProducts = async (page, isAuthenticated) => {
    try {
      // fetching all products
      const productResponse = await axios.get(
        `paginatedProducts?page=${page}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      // fetching liked products
      const likedProductsResponse =
        isAuthenticated &&
        (await axios.get("/likedProduct/get", {
          withCredentials: true,
        }));

      // returning the response data from api, if not available will return an empty array.
      return {
        allProducts: productResponse.data?.product || [],
        isLastPage: productResponse.data?.isLast,
        likedProducts: likedProductsResponse?.data?.likedItem.products || [],
      };
    } catch (error) {
      throw new Error("Failed to fetch products. Please try again later");
    }
  };

  const { isLoading, isFetching, data, error } = useQuery(
    ["products", page, isAuthenticated],
    () => fetchProducts(page, isAuthenticated),
    {
      keepPreviousData: true,
    }
  );

  const products = data?.allProducts?.map((product) => {
    // this will check if this product is in liked product list or not
    const liked = data?.likedProducts?.some(
      (likedProduct) => likedProduct.productId === product._id
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

  const handlePageNo = () => {
    setPage((prev) => prev + 1);
  };

  const skeletonProductArr = Array.from(Array(5));

  return (
    <AllProductStyle>
      <div className="categories">
        <Category />
      </div>
      <h3 className="all_product_heading">All Products</h3>
      <section>
        {isLoading &&
          skeletonProductArr.map((item, index) => (
            <ProductsSkeleton key={index} />
          ))}
        {products}
        {isFetching &&
          !data?.isLastPage &&
          skeletonProductArr.map((item, index) => (
            <ProductsSkeleton key={index} />
          ))}
      </section>

      {!data?.isLastPage && (
        <button
          className="load_more_button"
          disabled={isFetching ? true : false}
          name="load more"
          onClick={handlePageNo}
        >
          Load More
        </button>
      )}
    </AllProductStyle>
  );
};

export default HomePage;
