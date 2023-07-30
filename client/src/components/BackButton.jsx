import { useNavigate } from "react-router-dom";
import { FaAngleLeft } from "react-icons/fa";
import { BackButtonStyle } from "./style/BackButton.style";

const BackButton = () => {
  const navigate = useNavigate();

  // back button
  const handleBackClick = () => {
    navigate(-1);
  };

  return (
    <BackButtonStyle
      name="back-button"
      className="back_button"
      onClick={handleBackClick}
    >
      <FaAngleLeft className="back" />
      <span>Back</span>
    </BackButtonStyle>
  );
};

export default BackButton;
