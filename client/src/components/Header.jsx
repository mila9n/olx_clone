import { Link } from "react-router-dom";
import { HeaderStyle } from "./style/Header.style";
import { ContainerStyle } from "./style/ContainerStyle";
import { FaBars, FaXing, FaUser } from "react-icons/fa";
import { useState } from "react";
import { useSelector } from "react-redux";
import SearchBar from "./Searchbar";

const Header = () => {
  const [menu, setMenu] = useState(false);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);

  const handleMenuClick = () => {
    setMenu((prev) => !prev);
  };

  return (
    <HeaderStyle>
      <ContainerStyle className="container">
        <div className="logo">
          <h2>
            <Link to="/" aria-label="Logo" title="Home">
              SnapBuy
            </Link>
          </h2>
        </div>
        <div className="searchbar">
          <SearchBar />
        </div>
        <div className="burger_button" onClick={handleMenuClick}>
          <span>{!menu ? <FaBars /> : <FaXing />}</span>
          <article className={menu ? "links clicked" : "links"}>
            <Link
              to={isAuthenticated ? "/profile" : "/login"}
              className={isAuthenticated ? "profile" : "login_button"}
              aria-label={isAuthenticated ? "profile page" : "login page"}
              title="Profile"
            >
              {isAuthenticated ? <FaUser /> : "login"}
            </Link>
            <Link
              to={isAuthenticated ? "/sell" : "/login"}
              className="sell"
              aria-label="sell page for selling product"
              title="Sell Product"
            >
              Sell
            </Link>
          </article>
        </div>
      </ContainerStyle>
      {/* for mobile */}
      <div className="searchbar2">
        <SearchBar />
      </div>
    </HeaderStyle>
  );
};

export default Header;
