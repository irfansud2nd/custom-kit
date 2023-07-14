import React from "react";

export const Contact = () => {
  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-center items-center sticky top-0 bg-green-300">
        <h2>Interested</h2>
        <p>keep scrolling</p>
      </div>
      <div
        id="contact"
        className="min-h-screen w-full bg-pink-200 rounded-t-[30vw] sticky top-0 flex flex-col items-center"
      >
        <h1 className="text-center font-extrabold text-6xl sm:text-8xl max-w-[55vw] transition-all">
          Contact us!
        </h1>
        <div className="w-[70vw] mt-10 h-[70vh] flex justify-center items-center">
          <form className="flex flex-col justify-center items-center w-[70vw] mt-10 h-[70vh]">
            <input
              type="text"
              placeholder="Your Name"
              className="h-10 w-4/5 p-2 mb-10 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="h-10 w-4/5 p-2 mb-10 rounded-md"
            />
            <textarea
              rows={3}
              placeholder="Message"
              className="w-4/5 p-2 rounded-md"
            />
            <button
              type="submit"
              className="mt-5 border-2 border-black w-fit px-4 py-1 rounded-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
