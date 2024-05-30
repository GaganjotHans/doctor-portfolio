import React from "react";
import Link from "next/link";

const Expectations = () => {
  return (
    <section className="text-white body-font bg-gray-50">
      <div className="container px-5 py-16 mx-auto">
        <div className="container mx-auto flex flex-wrap" id="service-1">
          <div className="flex flex-wrap w-full">
            <img // eslint-disable-line
              className="lg:w-1/2 md:w-1/2 object-cover object-center rounded-lg md:mt-0 py-10"
              src="/expect.jpeg"
              alt="step"
            />
            <div className="lg:w-1/2 sm:mx-auto sm:mb-2 -mx-2">
              <div className="p-2 w-full px-16">
                <div className="bg-blue-900 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-white w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font text-xl font-serif">
                    Greeted by our friendly staff and offered a comfortable
                    waiting area.
                  </span>
                </div>
              </div>
              <div className="p-2 w-full px-16">
                <div className="bg-blue-900 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-white w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font text-xl font-serif">
                    An in-depth discussion about your health history and
                    concerns.
                  </span>
                </div>
              </div>
              <div className="p-2 w-full px-16">
                <div className="bg-blue-900 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-white w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font text-xl font-serif">
                    A complete physical examination using state-of-the-art
                    equipment.
                  </span>
                </div>
              </div>
              <div className="p-2 w-full px-16">
                <div className="bg-blue-900 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-white w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font text-xl font-serif">
                    Development of a tailored treatment plan to meet your
                    specific needs.
                  </span>
                </div>
              </div>
              <div className="p-2 w-full px-16">
                <div className="bg-blue-900 rounded flex p-4 h-full items-center">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-white w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <span className="title-font text-xl font-serif">
                    Detailed explanations and answers to all your questions for
                    peace of mind.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button className="flex mx-auto mt-16 text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button> */}
        <Link href={"/exam#book-appointment"}>
          <button className="flex mx-auto mt-16 items-center bg-blue-900 text-white border-2 border-blue-900 px-3 py-2 focus:outline-none rounded font-normal text-lg hover:bg-transparent hover:text-blue-900">
            Take The Next Step
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Expectations;
