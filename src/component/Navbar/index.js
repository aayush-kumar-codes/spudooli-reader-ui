import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ACCESS_TOKEN_KEY } from "../../services/constant";
import { style } from "./constant";

const Navbar = ({ isLogin, setIsLogin }) => {
  const navigate = useNavigate()
  const location = useLocation();
  console.log(location , "1234578765787654")
  return (
    <div className="mb-4">
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
          <p className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span className="text-6xl">CyberDeck</span>
          </p>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            {isLogin &&
              <div className="flex">
                <Link
                  activeClassName="text-red-500"
                  className={`mr-5 cursor-pointer ${location.pathname === '/read' ? style.active_tabs_css : style.inactive_tabs_css}`}
                  to='/read'
                >
                  Read
                </Link>
                <Link
                  activeClassName="text-red-500"
                  className={`mr-5 cursor-pointer ${location.pathname === '/feed-admin' ? style.active_tabs_css : style.inactive_tabs_css} `}
                  to='feed-admin'
                >
                  Feed Admin
                </Link>
              </div>
            }
            <Link
              activeClassName="text-red-500"
              className={`mr-5  cursor-pointer ${location.pathname === '/about' ? style.active_tabs_css : style.inactive_tabs_css}`}
              to="/about">
              About
            </Link>
            <Link activeClassName="text-red-500"
              className={`mr-5 cursor-pointer ${location.pathname === '/' ? style.active_tabs_css : style.inactive_tabs_css}`}
              to="/">
              Reading List
            </Link>

            {isLogin ?
              <button className="text-white border-2 border-gray-200 bg-sky-700 px-10 py-2 rounded" onClick={() => {
                localStorage.removeItem(ACCESS_TOKEN_KEY)
                setIsLogin(false)
                navigate('login')
              }
              }>Logout</button>
              : <button className="text-white border-2 border-gray-200 bg-sky-700 px-10 py-2 rounded" onClick={() => navigate('login')}>Login</button>}
          </nav>
        </div>
      </header >
      <hr className="border-black" />
    </div >
  );
};

export default Navbar;
