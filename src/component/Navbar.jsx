import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = ({ isLogin = false }) => {
  const navigate = useNavigate()
  return (
    <div className="mb-4">
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
          <p class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="text-6xl">CyberDeck</span>
          </p>
          <div class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {isLogin &&
              <div className="flex">
                <Link class="mr-5 text-sky-700 cursor-pointer ">Read</Link>
                <Link class="mr-5 text-sky-700 cursor-pointer ">Feed Admin</Link>
              </div>
            }
            <Link class="mr-5 text-sky-700 cursor-pointer" to="/about">
              About
            </Link>
            <Link class="mr-5 text-sky-700 cursor-pointer" to="/readingpage">Reading List</Link>

            <button className="text-white border-2 border-gray-200 bg-sky-700 px-10 py-2 rounded" onClick={() => navigate('/')}>Login</button>
          </div>
        </div>
      </header>
      <hr className="border-black" />
    </div>
  );
};

export default Navbar;
