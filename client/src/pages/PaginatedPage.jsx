import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import axios from "axios";
import AllProductCard from "../components/AllProductCard";
import { AllProductStyle } from "../components/style/AllProducts.style";
import { useSelector } from "react-redux";

const PaginatedPage = () => {
  const [page, setPage] = useState(1);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  // fetch Products
  const fetchProductWithPage = async () => {
    try {
      const { data } = await axios.get(`paginatedProducts?page=${page}`);
      return data;
    } catch (error) {
      return error;
    }
  };

  // fetch liked Products
  const fetchLikedProducts = async () => {
    try {
      const { data } = await axios.get("/likedProduct/get", {
        withCredentials: true,
      });
      return data;
    } catch (error) {
      return error;
    }
  };

  const handleClick = () => {
    setPage((prev) => prev + 2);
  };

  // products data
  const { isLoading, data, isFetching } = useQuery({
    queryKey: ["products", page],
    queryFn: fetchProductWithPage,
    keepPreviousData: true,
  });

  // for likedProducts
  const { data: likedProducts } = useQuery({
    queryKey: ["likedProducts", isAuthenticated],
    queryFn: fetchLikedProducts,
    enabled: !!isAuthenticated,
  });
  const likedItems = likedProducts?.likedItem?.products;

  const products =
    data?.product.length > 0 &&
    data.product.map((product) => {
      let liked = false;
      if (likedItems?.length > 0) {
        for (let i = 0; i < likedItems.length; i++) {
          if (product._id == likedItems[i].productId) {
            liked = true;
            i = likedItems.length;
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

  if (isLoading) {
    return <h3>loading...</h3>;
  }

  return (
    <AllProductStyle>
      <section>
        {/* {data &&
          data.product?.map((item) => {
            return (
              <AllProductCard
                key={item._id}
                title={item.title}
                image={item.images[0]}
                price={item.price}
                neighbourhood={item.neighbourhood}
                city={item.city}
                productId={item._id}
              />
            );
          })} */}
        {products}
        {isFetching && "fetching"}
        <button onClick={handleClick} disabled={isFetching ? true : false}>
          load more
        </button>
      </section>
    </AllProductStyle>
  );
};

export default PaginatedPage;
