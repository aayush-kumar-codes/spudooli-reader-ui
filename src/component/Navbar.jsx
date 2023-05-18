import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const AboutHandler = () => {
    
    navigate("/about");
  };
  const ReadingHandler = () => {
    
    navigate("/readingpage");
  };
  return (
    <div>
      <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <p class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-6xl">CyberDeck</span>
          </p>
          <div class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <p class="mr-5 text-blue-500 cursor-pointer ">Read</p>
            <p class="mr-5 text-blue-500 cursor-pointer ">Feed Admin</p>
            <p class="mr-5 text-blue-500 cursor-pointer " onClick={AboutHandler}>
              About
            </p>
            <p class="mr-5 text-blue-500 cursor-pointer" onClick={ReadingHandler}>Reading List</p>
          </div>
        </div>
      </header>
      <hr className="border-black"/>
    </div>
  );
};

export default Navbar;
