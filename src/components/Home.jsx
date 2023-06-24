import React from "react";
import HeroImage from "../assets/vishu.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full min-h-screen  pt-20 bg-gradient-to-b from-black
        to-gray-800 text-white"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col
      items-center justify-center  px-4  md:flex-row">
        <div className="flex flex-col justify-centerc h-full">
          <h2 className="text-4xl sm:text-6xl
          font-bold text-white">Hello <br/>I'm Vishal, <br/>React Developer.</h2>
          <p className="text-gray-400 py-5 max-w-md">
            I have 1.5 years of experience designing web applications. I love to
            work on Web Applications using technologies like HTML, CSS, JS,
            React, Bootstrap, Tailwind, etc.
          </p>
          <div>
            <Link to="portfolio" smooth duration={500} className="group text-white w-fit px-5 py-2 my-2 flex 
            items-center rounded-md bg-gradient-to-r
            from-orange-400 to-orange-700 cursor-pointer ">
              Portfolio
              <span className="group-hover:rotate-90 duration-200">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1"/>
              </span>
            </Link>
          </div>
        </div>
        <div className="px-2 mt-10">
          <img src={HeroImage}
          alt="My Profile"
          className="mx-auto rounded-2xl max-w-xs" />
        </div>
      </div>
    </div>
  );
};

export default Home;
