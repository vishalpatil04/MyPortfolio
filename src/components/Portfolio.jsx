import React from "react";
import IMDBClone from "../assets/portfolio/IMDBClone.png";
import PersonalPortfolio from "../assets/portfolio/PersonalPortfolio.png";
import TextUtils from "../assets/portfolio/TextUtils.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: IMDBClone,
    },
    {
      id: 2,
      src: PersonalPortfolio,
    },
    {
      id: 3,
      src: TextUtils,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 text-white md:min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Here is some of my work.</p>
        </div>

        <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
