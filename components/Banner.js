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
    </section>
  );
};

export default Banner;
