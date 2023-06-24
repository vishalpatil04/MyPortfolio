import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JAVASCRIPT from "../assets/javascript.png";
import REACT from "../assets/react.png";
import BOOTSTRAP from "../assets/bootstrap.png";
import TAILWIND from "../assets/tailwind.png";
import GITHUB from "../assets/github.png";

const Experience = () => {
  const imgs = [
    {
      id: 1,
      src: HTML,
      titleName: "HTML",
      style: 'shadow-orange-500'
    },
    {
      id: 2,
      src: CSS,
      titleName: "CSS",
      style: 'shadow-blue-500'
    },
    {
      id: 3,
      src: JAVASCRIPT,
      titleName: "JAVASCRIPT",
      style: 'shadow-yellow-500'
    },
    {
      id: 4,
      src: REACT,
      titleName: "REACT",
      style: 'shadow-blue-600'
    },
    {
      id: 5,
      src: BOOTSTRAP,
      titleName: "BOOTSTRAP",
      style: 'shadow-violet-600'
    },
    {
      id: 6,
      src: TAILWIND,
      titleName: "TAILWIND",
      style: 'shadow-sky-400'
    },
    {
      id: 7,
      src: GITHUB,
      titleName: "GITHUB",
      style: 'shadow-gray-400'
    },
  ];

  return (
    <div
      name="experience"
      className="bg-gradient-to-b from-gray-800 to-black  md:min-h-screen pb-10  text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl border-b-4 border-gray-500 font-bold inline">Experience</p>
          <p className="py-6">Technologies I've worked on.</p>
        </div>
        <div className=" grid w-full grid-cols-2 text-center md:grid-cols-3 sm:grid-cols-2 gap-8 px-12 sm:px-0">
         
          {imgs.map(({ id, src, titleName,style }) => (
            // eslint-disable-next-line
            <div key={id} className={"duration-200 hover:scale-105 shadow-md rounded-lg" + " " + style}>
              <img 
              src={src} 
              alt=""
              className="rounded-md w-20 mx-auto pt-3" 
              />
              <p className="mt-4">{titleName}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
