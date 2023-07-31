import {
  FaCar,
  FaBiking,
  FaBuilding,
  FaBook,
  FaFootballBall,
  FaLaptop,
  FaFile,
} from "react-icons/fa";
import { CategoryStyle } from "./style/Category.style";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <CategoryStyle>
      <h3>Browse Category</h3>
      <div className="category_items">
        <Link to={"/category/electronic"}>
          <FaLaptop />
          <span>Electronic</span>
        </Link>
        <Link to={"/category/automobile"}>
          <FaCar />
          <span>cars</span>
        </Link>
        <Link to={"/category/bike"}>
          <FaBiking />
          <span>Bikes</span>
        </Link>
        <Link to={"/category/book"}>
          <FaBook />
          <span>Books</span>
        </Link>
        <Link to={"/category/property"}>
          <FaBuilding />
          <span>Properties</span>
        </Link>

        <Link to={"/category/sport"}>
          <FaFootballBall />
          <span>Sports </span>
        </Link>

        <Link to={"/category/job"}>
          <FaFile />
          <span>Jobs</span>
        </Link>
      </div>
    </CategoryStyle>
  );
};

export default Category;
