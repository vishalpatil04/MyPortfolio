import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-black to-gray-800 text-white md:min-h-screen"
    >
      <div className="max-w-screen-lg p-4  mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">Contact</p>
            <p className="py-6">Fill below details to get in touch with me.</p>
        </div>
        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/fee6bfd4-7a22-4c1e-8f5e-34f10b5a87a5" method="POST" className=" flex flex-col w-full md:w-1/2">
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="p-2 bg-transparent border-2 rounded-md text-white foucus:outline-none"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="p-2 my-4 bg-transparent border-2 rounded-md text-white foucus:outline-none"
                />
                <textarea
                  name="message"
                  placeholder="Enter your message here..."
                  rows="8"
                  className="p-2 bg-transparent border-2 rounded-md text-white foucus:outline-none"
                />
                <button className="text-white bg-gradient-to-r from-orange-500 to-orange-800 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Submit</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
