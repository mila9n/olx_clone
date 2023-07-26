import axios from "axios";
import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { SearchBarStyle } from "./style/SearchBar.style";
import { useNavigate } from "react-router-dom";
import { serverUrl } from "../utils/serverurl";

const SearchBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  // to abort api request
  const abortController = new AbortController();
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  // debouncing api
  useEffect(() => {
    if (searchValue !== "") {
      setLoading(true);
      const searchProduct = setTimeout(async () => {
        try {
          const { data } = await axios.get(`/products?name=${searchValue}`, {
            signal: abortController.signal,
          });
          setProducts(data.filteredProducts);
          setLoading(false);
        } catch (error) {
          setLoading(false);
          console.log(error);
        }
      }, 1200);
      return () => {
        clearTimeout(searchProduct);
        // canceling the api request
        abortController.abort();
      };
    } else {
      setLoading(false);
      setProducts([]);
    }
  }, [searchValue]);

  const navigate = useNavigate();
  const handleSearchedItemClick = (productId) => {
    navigate(`/productInfo/${productId}`);
    setSearchValue("");
    setProducts([]);
  };

  return (
    <>
      <SearchBarStyle>
        <input
          type="text"
          value={searchValue}
          onChange={handleChange}
          placeholder="Find Cars, Mobile Phones and more..."
        />
        <span>
          <FaSearch />
        </span>
        <div
          className={
            searchValue != "" ? "search_result visible" : "search_result"
          }
        >
          <ul>
            {!loading && products.length == 0 && searchValue.length > 0 && (
              <li>No Product Found</li>
            )}
            {products.length > 0 &&
              products?.map((item) => (
                <li
                  key={item._id}
                  onClick={() => handleSearchedItemClick(item._id)}
                  title={`${item.title}`}
                >
                  <span>{item.title}</span>
                  <img
                    src={`${serverUrl}${item.images[0]}`}
                    alt={`${item.title}`}
                  />
                </li>
              ))}
            {loading && <li>loading...</li>}
          </ul>
        </div>
      </SearchBarStyle>
    </>
  );
};

export default SearchBar;
