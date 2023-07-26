import { FaPlus } from "react-icons/fa";
import ProductImagesStyle from "./style/CustomerProductImage.styled";

const CustomerProductImages = ({
  productImage,
  serverUrl,
  handleUploadPhoto,
  handleDeleteImage,
  handleCoverImage,
}) => {
  const imageArr =
    productImage &&
    productImage.map((image, index) => {
      return (
        <div key={image} className="image_box">
          <span
            className="cancel_mark"
            onClick={() => {
              handleDeleteImage(index);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
          <span className="cover_image" onClick={() => handleCoverImage(index)}>
            cover
          </span>
          <img src={`${serverUrl}${image}`} />
        </div>
      );
    });

  return (
    <ProductImagesStyle>
      {imageArr}
      <label className="file_upload">
        <span>
          <FaPlus />
        </span>
        <input
          type="file"
          multiple={true}
          name="files"
          onChange={handleUploadPhoto}
        />
      </label>
    </ProductImagesStyle>
  );
};

export default CustomerProductImages;
