import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Content = () => {
  return (
    <section className="content__section" id="content">
      <Container>
        <Row className="w-full flex justify-center m-12">
          <Col xs={12} md={6} xl={6} className="w-1/2">
            <img // eslint-disable-line
              src="/contentImg1.jpeg"
              alt="image of author"
            />
          </Col>
          <Col xs={12} md={6} xl={6} className="w-1/2 ml-10">
            <h1 className="text-5xl my-4 font-light font-mono leading-snug">
              Transform Your Vision Experience
            </h1>
            <p className="font-style my-4">
              Welcome to our practice where vision meets expertise! Our
              dedicated team of eye care professionals is committed to providing
              personalized care tailored to your unique needs. From routine
              exams to advanced treatments, we are here to ensure your eyesight
              remains crystal clear. Experience top-notch care in a warm and
              welcoming environment.Our commitment to innovation ensures that
              you receive the most advanced diagnostics and treatments
              available, tailored to your unique vision needs. From
              state-of-the-art imaging technology for precise diagnoses to
              advanced surgical techniques for optimal outcomes, we integrate
              the latest tools seamlessly into our practice to provide you with
              the highest standard of care. Schedule your appointment today and
              embark on a journey to clearer, healthier vision!
            </p>
          </Col>
        </Row>
        <Row className="w-full flex justify-center m-16">
          <Col xs={12} md={6} xl={6} className="w-1/2 ml-10">
            <h1 className="text-5xl my-4 font-light font-mono leading-snug">
              Importance of Regular Eye Exams
            </h1>
            <p className="font-style my-4">
              Regular eye exams are crucial for several reasons. Firstly, they
              allow us to detect any changes in your vision that may require
              corrective measures such as glasses or contact lenses. Vision
              changes can occur gradually over time, and you may not even notice
              them until they start affecting your daily activities. Secondly,
              eye exams enable us to monitor the health of your eyes and detect
              any signs of eye diseases or conditions. Many eye diseases, such
              as glaucoma, macular degeneration, and diabetic retinopathy, can
              develop slowly and without noticeable symptoms in the early
              stages.
            </p>
          </Col>
          <Col xs={12} md={6} xl={6} className="w-1/2">
            <img // eslint-disable-line
              src="/contentImg2.jpeg"
              alt="image of author"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Content;
