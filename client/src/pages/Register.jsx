import { useState } from "react";
import { FormStyle } from "../components/style/LoginRegForm.style";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setAuthentication, setUser } from "../../Redux/userSlice.js";
import Toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [inputValue, setInputValue] = useState({
    email: "",
    password: "",
    name: "",
  });
  const [checked, setChecked] = useState(false);

  const { name, email, password } = inputValue;

  const handleChange = (e) => {
    setInputValue((prevValue) => {
      const { name, value } = e.target;
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };

  // handle password visibility
  const handleCheckboxChange = () => {
    setChecked((prev) => !prev);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // register user and post data to api.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `/users/register`,
        {
          name,
          email,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );
      Toast.success(data.message);
      dispatch(setAuthentication(true));
      dispatch(setUser(data.user));
      navigate("/");
    } catch (error) {
      Toast.error(error.response.data.message);
      dispatch(setAuthentication(false));
      dispatch(setUser(""));
    }
  };

  return (
    <FormStyle>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="name"
            value={name}
            placeholder="Enter Name"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={email}
            placeholder="Enter Email id"
            onChange={handleChange}
            required={true}
          />
        </div>
        <div>
          <input
            type={checked ? "text" : "password"}
            name="password"
            value={password}
            placeholder="Enter Password"
            onChange={handleChange}
            required={true}
            autoComplete="off"
          />
        </div>
        <div className="checkbox_container">
          <input
            type="checkbox"
            className="checkbox"
            defaultChecked={checked}
            id="checkbox"
            onChange={handleCheckboxChange}
          />
          <label htmlFor="checkbox">Show Password</label>
        </div>
        <button type="submit" name="Register">
          Sign up
        </button>
      </form>
      <span>OR</span>
      <Link to={"/login"} aria-label="login">
        Login
      </Link>
    </FormStyle>
  );
};

export default RegisterPage;
