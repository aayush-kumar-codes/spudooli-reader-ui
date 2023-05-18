
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "../component/Navbar";
import About from "../component/Pages/About";
import LoginPage from "../component/Pages/Loginpage";
import Readingpage from "../component/Pages/Readingpage";


function AllRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/readingpage" element={<Readingpage />} />

      </Routes>
    </BrowserRouter>
  );
}
export default AllRoutes;