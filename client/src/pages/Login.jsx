import React, { useState } from "react";
import { FormStyle } from "../components/style/LoginRegForm.style";
import { Link, useNavigate } from "react-router-dom";
import Toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { setAuthentication, setUser } from "../../Redux/userSlice";
import axios from "axios";

const LoginPage = () => {
  const [inputValue, setInputValue] = React.useState({
    email: "",
    password: "",
  });
  const [checked, setChecked] = useState(false);

  const { email, password } = inputValue;

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

  // login user into his account anc check whether user exist in the database.
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        `/users/login`,
        {
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
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
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
        <button type="submit" name="login">
          Login
        </button>
      </form>
      <span>OR</span>
      <Link to={"/register"} aria-label="Register your name and email ">
        Sign Up
      </Link>
    </FormStyle>
  );
};

export default LoginPage;
