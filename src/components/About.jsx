import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full md:min-h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="mt-8 text-base text-justify leading-8">
          Junior React Developer having 1.5 years of experience with proficient
          knowledge of entire software development life cycle and expertise in
          ReactJS. I have Good knowledge of using HTM, CSS and JavaScript to design
          user interface and deploy it effectively in applications.<br/> Also holding the experience
          in designing and implementing responsive user interface components by
          deploying React concepts. Proficient in translating designs into high
          quality code and writing application interface code using effective
          JavaScript and ReactJS workflows. <br/>
          Good Knowledge of OOPS Concepts. Experience in involving client
          meetings, good understanding in requirement gathering & discussions.
          Experience in troubleshooting and debugging. Experience on version
          control tools like GIT. Experience on API testing tool POSTMAN.
        </p>
      </div>
    </div>
  );
};

export default About;
