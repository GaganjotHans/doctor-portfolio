import React from "react";
import Footer from "../components/Footer";
import Link from "next/link";

const about = () => {
  return (
    <section className="text-gray-600 body-font" id="about">
      <h1 className="text-4xl font-serif font-normal text-center my-10">
        ABOUT
      </h1>
      <div className="container py-16 mx-auto">
        <div className="flex flex-wrap justify-center mb-10 items-center text-center h-fit">
          <div className="sm:w-1/2 px-4">
            <div className="rounded-lg h-fit overflow-hidden">
              <img // eslint-disable-line
                alt="content"
                className="object-cover object-center h-96 w-96 mx-auto rounded-full"
                src="/drImage.jpeg"
              />
            </div>

            <button className="inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 py-2 px-5 focus:outline-none  rounded my-6 font-thin text-lg hover:bg-transparent hover:text-blue-900">
              Meet The Doctor
            </button>
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
                Our Philosophy
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
                Testimonials
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
                Frequently Asked Questions
              </button>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default about;
