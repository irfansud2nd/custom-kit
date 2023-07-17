import React from "react";
import {
  ArrowDownSquareFill,
  QuestionLg,
  QuestionSquareFill,
} from "react-bootstrap-icons";

export const Contact = () => {
  return (
    <div>
      <div className="w-full h-screen flex flex-col justify-center items-center sticky top-0 bg-custom-blue text-custom-white">
        <h2 className="flex items-center text-5xl font-extrabold mb-5">
          <span>Are you interested</span>
          <QuestionLg
            className="
            animate__animated animate__wobble animate__infinite
            animate__slow
            "
          />
        </h2>
        <p
          className="flex items-center text-4xl animate__animated animate__shakeY animate__infinite
          animate__slower"
        >
          <span className="mr-5">Keep scrolling </span>
          <ArrowDownSquareFill />
        </p>
      </div>
      <div
        id="contact"
        className="min-h-screen w-full bg-custom-blue-light rounded-t-[30vw] sticky top-0 flex flex-col items-center"
      >
        <h1 className="text-center font-extrabold text-6xl sm:text-8xl max-w-[55vw] transition-all mt-10">
          Contact us!
        </h1>
        <div className="w-[70vw] mt-10 h-[70vh] flex justify-center items-center">
          <form className="flex flex-col justify-center items-center w-[70vw] mt-10 h-[70vh]">
            <input
              type="text"
              placeholder="Your Name"
              className="h-10 w-4/5 p-2 mb-10 rounded-md bg-custom-white"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="h-10 w-4/5 p-2 mb-10 rounded-md bg-custom-white"
            />
            <textarea
              rows={3}
              placeholder="Message"
              className="w-4/5 p-2 rounded-md bg-custom-white"
            />
            <button
              type="submit"
              className="mt-5 border-2 border-custom-black bg-custom-white w-fit px-4 py-1 rounded-md"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
