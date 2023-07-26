import { serverUrl } from "../utils/serverurl";
import axios from "axios";
import { toast } from "react-hot-toast";
import { FaPen, FaDumpster } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MyProductCard = ({
  title,
  image,
  price,
  description,
  productId,
  setRefresh,
}) => {
  const navigate = useNavigate();

  // navigating to sell page for editing
  const handleEdit = (productId) => {
    navigate(`/sell/${productId}`);
  };

  // delete my product from database
  const handleDelete = async (productId) => {
    try {
      const { data } = await axios.delete(
        `/products/deleteProduct/${productId}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setRefresh((prev) => !prev);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div className="myproductcard">
      <div className="image">
        <img src={serverUrl + image} alt={title} />
      </div>
      <div className="info">
        <h2>{title}</h2>
        <p>{description}</p>
        <span> &#8377; {price.toLocaleString()}</span>
        <div className="buttons">
          <button onClick={() => handleEdit(productId)} name="Edit">
            <FaPen />
            Edit
          </button>
          <button onClick={() => handleDelete(productId)} name="Delete">
            <FaDumpster /> Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;
