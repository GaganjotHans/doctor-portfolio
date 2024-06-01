import React from "react";
import Footer from "../components/Footer";
import Expectations from "../components/Expectations";

import Link from "next/link";

const About = () => {
  return (
    <section className="text-gray-600 body-font" id="about">
      <h1 className=" container mx-auto title-font font-medium text-3xl py-5 text-black font-serif mt-10 text-start border-b-2 border-y-gray-300">
        ABOUT
      </h1>
      <div className="container mx-auto px-4 py-16 mb-16 bg-gray-50">
        <div className="flex flex-wrap justify-center mb-10 items-center text-center h-fit">
          <div className="sm:w-1/2 px-4">
            <div className="rounded-lg h-fit overflow-hidden">
              <img // eslint-disable-line
                alt="content"
                className="object-cover object-center h-96 w-96 mx-auto rounded-full"
                src="/drImage.jpeg"
              />
            </div>
            <Link href={"/doctor"}>
              <button className="inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 py-2 px-5 focus:outline-none  rounded my-6 font-thin text-lg hover:bg-transparent hover:text-blue-900">
                MEET THE DOCTOR
              </button>
            </Link>
          </div>
          <div className="sm:w-1/2 px-4">
            <div className="rounded-lg h-96 overflow-hidden">
              <img // eslint-disable-line
                alt="content"
                className="object-center h-96 w-96 mx-auto rounded-full"
                src="/philosophy.jpeg"
              />
            </div>
            <Link href={"/philosophy"}>
              <button className="inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 py-2 px-5 focus:outline-none  rounded my-6 font-thin text-lg hover:bg-transparent hover:text-blue-900">
                OUR PHILOSOPHY
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center items-center text-center h-fit">
          <div className="sm:w-1/2 px-4">
            <div className="rounded-lg h-fit overflow-hidden">
              <img // eslint-disable-line
                alt="content"
                className="object-cover object-center h-96 w-96 mx-auto rounded-full"
                src="/testimonial.jpeg"
              />
            </div>

            <Link href={"/#testimonial"}>
              <button className="inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 py-2 px-5 focus:outline-none  rounded my-6 font-thin text-lg hover:bg-transparent hover:text-blue-900">
                TESTIMONIALS
              </button>
            </Link>
          </div>
          <div className="sm:w-1/2 px-4">
            <div className="rounded-lg h-96 overflow-hidden">
              <img // eslint-disable-line
                alt="content"
                className="object-cover object-center h-96 w-96 mx-auto rounded-full"
                src="/FAQ.jpeg"
              />
            </div>
            <Link href={"/#faq"}>
              <button className="inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 py-2 px-5 focus:outline-none  rounded my-6 font-thin text-lg hover:bg-transparent hover:text-blue-900">
                FREQUENTLY ASKED QUESTIONS
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Expectations />
      <Footer />
    </section>
  );
};

export default About;
