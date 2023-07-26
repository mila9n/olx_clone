import { useEffect, useState } from "react";
import axios from "axios";
import CustomerProductImages from "../components/customerProductImages";
import SellPageStyle from "../components/style/Sell.style";
import Address from "../components/Address";
import ProductTitle from "../components/ProductTitle";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
const serverUrl = "http://localhost:5000/";

const SellPage = () => {
  const { productId } = useParams();
  const [productImage, setProductImage] = useState([]);

  const [inputValue, setInputValue] = useState({
    title: "",
    description: "",
    price: "",
    neighbourhood: "",
    city: "",
    state: "",
    email: "",
    contact: "",
  });

  const {
    title,
    description,
    price,
    neighbourhood,
    city,
    state,
    email,
    contact,
  } = inputValue;

  const handleChange = (e) => {
    setInputValue((prev) => {
      const { name, value } = e.target;
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  // uploading photos to server
  const handleUploadPhoto = async (e) => {
    e.preventDefault();
    try {
      const files = e.target.files;
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append("photos", files[i]);
      }
      const { data } = await axios.post("/upload/photoUpload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setProductImage((prev) => {
        return [...prev, ...data.fileNames];
      });
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteImage = (imageId) => {
    const newImages = [...productImage];
    newImages.splice(imageId, 1);
    setProductImage(newImages);
  };

  const handleCoverImage = (imageId) => {
    const coverImage = productImage[imageId];
    const newImages = [...productImage];
    newImages.splice(imageId, 1);
    setProductImage([coverImage, ...newImages]);
  };

  const navigate = useNavigate();
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      title,
      description,
      price,
      neighbourhood,
      city,
      state,
      email,
      contact,
      images: productImage,
    };
    if (!productId) {
      try {
        const { data } = await axios.post("/products/newproduct", formData, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        });
        toast.success(data.message);
        navigate("/");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    } else {
      try {
        const { data } = await axios.put(
          `/products/updateProduct`,
          { ...formData, productId },
          {
            headers: {
              "Content-Type": "application/json",
            },
            withCredentials: true,
          }
        );
        toast.success(data.message);
        navigate("/profile");
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };

  // updating existing product
  useEffect(() => {
    if (productId) {
      const fetchProduct = async () => {
        try {
          const { data } = await axios.get(`/products/${productId}`, {
            headers: {
              "Content-type": "application/json",
            },
            withCredentials: true,
          });
          const product = data.product;
          setInputValue({
            title: product.title,
            description: product.description,
            price: product.price,
            neighbourhood: product.neighbourhood,
            city: product.city,
            state: product.state,
            email: product.email,
            contact: product.contact,
          });
          setProductImage(product.images);
        } catch (error) {
          console.log(error);
        }
      };
      fetchProduct();
    }
  }, [productId]);

  return (
    <SellPageStyle>
      <form onSubmit={handleFormSubmit}>
        <ProductTitle
          handleChange={handleChange}
          title={title}
          description={description}
          price={price}
        />
        <div>
          <label>Upload Photos</label>
          <CustomerProductImages
            productImage={productImage}
            serverUrl={serverUrl}
            handleUploadPhoto={handleUploadPhoto}
            handleDeleteImage={handleDeleteImage}
            handleCoverImage={handleCoverImage}
          />
        </div>
        <div className="address">
          <Address
            handleChange={handleChange}
            city={city}
            state={state}
            neighbourhood={neighbourhood}
            email={email}
            contact={contact}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </SellPageStyle>
  );
};

export default SellPage;
