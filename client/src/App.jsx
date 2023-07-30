import { lazy, Suspense } from "react";
import { GlobalStyle } from "./components/style/GlobalStyle";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
import axios from "axios";
import React from "react";
import { setAuthentication, setUser } from "../Redux/userSlice";
import LoadingSpinner from "./components/LadingSpinner";
// import CategoryPage from "./pages/CategoryPage";

const SellPage = lazy(() => import("./pages/Sell"));
const ProfilePage = lazy(() => import("./pages/Profile"));
const RegisterPage = lazy(() => import("./pages/Register"));
const LoginPage = lazy(() => import("./pages/Login"));
const ProductInfoPage = lazy(() => import("./pages/ProductInfo"));
const HomePage = lazy(() => import("./pages/Home"));
const CategoryPage = lazy(() => import("./pages/CategoryPage"));

axios.defaults.baseURL = "http://localhost:5000/api/v1";

function App() {
  const dispatch = useDispatch();

  // checking whether user is logged in or not
  const userAuthentication = async () => {
    try {
      const { data } = await axios.get("/users/me", {
        headers: {
          "Content-Type": "application/jason",
        },
        withCredentials: true,
      });
      dispatch(setAuthentication(true));
      dispatch(setUser(data.user.name));
    } catch (error) {
      dispatch(setAuthentication(false));
      dispatch(setUser(""));
    }
  };

  React.useEffect(() => {
    userAuthentication();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/sell" element={<SellPage />} />
            <Route path="/sell/:productId" element={<SellPage />} />
            <Route path="/profile/*" element={<ProfilePage />} />
            <Route path="/category/:name" element={<CategoryPage />} />
            <Route
              path="/productInfo/:productId"
              element={<ProductInfoPage />}
            />
          </Routes>
        </Suspense>
      </Router>
      <Toaster />
    </>
  );
}

export default App;
