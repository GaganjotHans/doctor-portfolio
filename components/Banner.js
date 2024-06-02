import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Banner = () => {
  return (
    <section className="banner" id="home">
      <section className="block md:flex md:flex-row items-center justify-between px-2 lg:px-16">
        <div className="w-5/6 md:w-2/3 lg:w-1/2 ml-10">
          <h1 className="text-bold text-5xl xl:text-7xl my-4 font-thin anim">
            Ready for Unique Experience
          </h1>
          <p className="font-style my-4 anim">
            Welcome to our practice where vision meets expertise! Our dedicated
            team of eye care professionals is committed to providing
            personalized care tailored to your unique needs.Schedule your
            appointment today and embark on a journey to clearer, healthier
            vision!
          </p>
          <button className="inline-flex items-center bg-blue-900 text-white p-2 focus:outline-none  rounded mt-4 md:mt-0 font-thin text-lg hover:bg-transparent border-2 border-blue-900 hover:text-blue-900 anim">
            Learn Why People Trust Us
          </button>
        </div>
        <div className="w-full md:w-1/2">
          <img // eslint-disable-line
            src="/home11.webp"
            alt="image of author"
            className="mt-10 mx-auto"
          />
        </div>
      </section>
    </section>
  );
};

export default Banner;
