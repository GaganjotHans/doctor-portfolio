import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="w-full flex items-center justify-center mx-16">
          <Col xs={12} md={6} xl={7} className="w-2/3 ml-10">
            <h1 className="text-bold text-7xl my-4 font-thin anim">
              Ready for Unique Experience
            </h1>
            <p className="font-style my-4 anim">
              Welcome to our practice where vision meets expertise! Our
              dedicated team of eye care professionals is committed to providing
              personalized care tailored to your unique needs.Schedule your
              appointment today and embark on a journey to clearer, healthier
              vision!
            </p>
            <button className="inline-flex items-center bg-blue-900 text-white border-0 p-3 focus:outline-none hover:bg-transparent hover:text-black rounded mt-2 md:mt-0 font-thin text-lg anim">
              Learn Why People Trust Us
            </button>
          </Col>
          <Col xs={12} md={6} xl={5} className="">
            <img // eslint-disable-line
              src="/home11.webp"
              alt="image of author"
              className="anim"
            />
          </Col>
        </Row>
      </Container>

      <Row className="w-full relative -top-10">
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
                      Quality Service
                    </h1>
                    <p className="leading-relaxed mb-3 font-serif">
                      Experience the difference firsthand and entrust your eye
                      health to our compassionate and knowledgeable specialists.
                      Your vision is our priority.
                    </p>
                    <div className="flex items-center flex-wrap ">
                      <button className="inline-flex items-center bg-blue-900 text-white border-0 p-3 focus:outline-none hover:bg-transparent hover:text-black rounded mt-2 md:mt-0 font-thin text-md">
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
                      <button className="inline-flex items-center bg-blue-900 text-white border-0 p-3 focus:outline-none hover:bg-transparent hover:text-black rounded mt-2 md:mt-0 font-thin text-md">
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
                      <button className="inline-flex items-center bg-blue-900 text-white border-0 p-3 focus:outline-none hover:bg-transparent hover:text-black rounded mt-2 md:mt-0 font-thin text-md">
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
            </div>
          </div>
        </section>
      </Row>
    </section>
  );
};

export default Banner;
