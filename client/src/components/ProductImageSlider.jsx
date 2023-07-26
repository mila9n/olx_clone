import { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { serverUrl } from "../utils/serverurl";

const ProductImageSlider = ({ images, title }) => {
  const [imageNo, setImageNo] = useState(0);
  const imagesArr = [...images];

  const handleRightClick = () => {
    if (imageNo < imagesArr.length - 1) {
      setImageNo((prev) => prev + 1);
    } else if (imageNo == imagesArr.length - 1) {
      setImageNo(0);
    }
  };

  const handleLeftClick = () => {
    if (imageNo > 0) {
      setImageNo((prev) => prev - 1);
    } else if (imageNo == 0) {
      setImageNo(imagesArr.length - 1);
    }
  };

  return (
    <div className="images">
      <img src={`${serverUrl}${images?.[imageNo]}`} alt={title} />
      <button onClick={handleLeftClick} className="left" name="left">
        <FaAngleLeft />
      </button>
      <button onClick={handleRightClick} className="right" name="right">
        <FaAngleRight />
      </button>
    </div>
  );
};

export default ProductImageSlider;
