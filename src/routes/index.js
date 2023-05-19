
import { createContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar";
import About from "../Pages/About";
import FeedAdmin from "../Pages/FeedAdmin";
import LoginPage from "../Pages/Login";
import Readingpage from "../Pages/ReadingPage";
import OnBoardingLayout from "../layouts/onBoardingLayout";
import { ACCESS_TOKEN_KEY } from "../services/constant";
import { PrivatePage } from "./PrivatePage";
import Read from "../Pages/Read";
import ReadLayout from "../layouts/ReadLayout";

export const AuthContext = createContext()


function AllRoutes() {
  const [isLogin, setIsLogin] = useState(false);
  const access_token = localStorage.getItem(ACCESS_TOKEN_KEY);

  useEffect(() => {
    if (access_token) {
      setIsLogin(true);
    }
  }, [access_token]);

  return (
    <AuthContext.Provider value={{isLogin , setIsLogin}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<OnBoardingLayout />}>
            <Route index element={<LoginPage />} />
            <Route path="about" element={<About />} />
            <Route path="readingpage" element={<Readingpage />} />
            <Route path="feed-admin" element={<PrivatePage><FeedAdmin /></PrivatePage>} />
            <Route path="read" element={<PrivatePage><ReadLayout /></PrivatePage>}>
            <Route index element={<Read />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}
export default AllRoutes;