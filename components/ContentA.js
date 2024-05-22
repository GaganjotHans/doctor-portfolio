import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const ContentA = () => {
  return (
    <section className="contentA">
      {" "}
      <Row className="w-full block -mt-44">
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-4 md:w-1/3 anim">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img // eslint-disable-line
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/qualityService.jpeg"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium font-sans text-gray-900 mb-3">
                      Customer Service
                    </h1>
                    <p className="leading-relaxed mb-3 font-serif">
                      Experience the difference firsthand and entrust your eye
                      health to our compassionate and knowledgeable specialists.
                      Your vision is our priority.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <Link href={"/philosophy#customer-service"}>
                        <button className="inline-flex items-center bg-blue-900 text-white p-2 focus:outline-none  rounded mt-2 md:mt-0 font-thin text-md hover:bg-transparent border-2 border-blue-900 hover:text-blue-900">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3 anim">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img // eslint-disable-line
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/drLicense.jpeg"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 font-sans">
                      Licensed Doctor
                    </h1>
                    <p className="leading-relaxed mb-3 font-serif">
                      Our approach is to meet your unique needs, ensuring
                      optimal vision and eye health for years to come. Trust in
                      our professionalism and experience.
                    </p>
                    <div className="flex items-center flex-wrap">
                      <button className="inline-flex items-center bg-blue-900 text-white p-2 focus:outline-none  rounded mt-2 md:mt-0 font-thin text-md hover:bg-transparent border-2 border-blue-900 hover:text-blue-900">
                        Learn More
                        <svg
                          className="w-4 h-4 ml-2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M5 12h14"></path>
                          <path d="M12 5l7 7-7 7"></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 md:w-1/3 anim">
                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                  <img // eslint-disable-line
                    className="lg:h-48 md:h-36 w-full object-cover object-center"
                    src="/modernTech.jpeg"
                    alt="blog"
                  />
                  <div className="p-6">
                    <h1 className="title-font text-lg font-medium text-gray-900 mb-3 font-sans">
                      Modern Technology
                    </h1>
                    <p className="leading-relaxed mb-3 font-serif">
                      Experience the difference that modern technology can make
                      in preserving and enhancing your vision. Step into the
                      future of eye care with our cutting-edge practice.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <Link href={"/philosophy#modern-technology"}>
                        <button className="inline-flex items-center bg-blue-900 text-white p-2 focus:outline-none  rounded mt-2 md:mt-0 font-thin text-md hover:bg-transparent border-2 border-blue-900 hover:text-blue-900">
                          Learn More
                          <svg
                            className="w-4 h-4 ml-2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          >
                            <path d="M5 12h14"></path>
                            <path d="M12 5l7 7-7 7"></path>
                          </svg>
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Row>
    </section>
  );
};

export default ContentA;
