
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar";
import About from "../component/Pages/About";
import LoginPage from "../component/Pages/Loginpage";
import Readingpage from "../component/Pages/Readingpage";
import OnBoardingLayout from "../layouts/onBoardingLayout";


function AllRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnBoardingLayout />}>
        <Route index element={<LoginPage />} />
        <Route path="about" element={<About />} />
        <Route path="readingpage" element={<Readingpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default AllRoutes;