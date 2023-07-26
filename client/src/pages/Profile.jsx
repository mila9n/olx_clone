import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import Toast from "react-hot-toast";
import { setAuthentication, setUser } from "../../Redux/userSlice";
import { Link } from "react-router-dom";
import { ProfileStyle } from "../components/style/Profile.style";
import { useNavigate } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import ProfileNav from "../components/ProfileNav";
import { Suspense, lazy } from "react";
import LoadingSpinner from "../components/LadingSpinner";

const LikedProductPage = lazy(() => import("./LikedProduct"));
const MyProducts = lazy(() => import("../components/MyProducts"));

const ProfilePage = () => {
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const user = useSelector((state) => state.user.user);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const { data } = await axios.get(`/users/logout`, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      });
      Toast.success(data.message);
      dispatch(setAuthentication(false));
      dispatch(setUser(""));
      navigate("/login");
    } catch (error) {
      Toast.error(error.response.data.message);
      dispatch(setAuthentication(true));
    }
  };

  return (
    <>
      <ProfileStyle>
        {isAuthenticated ? (
          <div>
            <h2>{user}</h2>
            <button onClick={handleLogout} className="button">
              Logout
            </button>
          </div>
        ) : (
          <div>
            <Link to={"/login"} className="button">
              Login
            </Link>
          </div>
        )}
      </ProfileStyle>
      <ProfileNav />
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          <Route path={"/"} element={<MyProducts />} />
          <Route path={"/likedProduct"} element={<LikedProductPage />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default ProfilePage;
