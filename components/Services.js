import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Services = () => {
  return (
    <section className="services bg-gray-100 lg:p-5 p-2 pb-14" id="service">
      <h1 className="text-5xl font-serif font-normal text-center my-10">
        SERVICES
      </h1>
      <Row className="w-full flex flex-col md:flex-row justify-center">
        <Col xs={12} md={4} xl={3} className="lg:p-5 p-2">
          <Link href={"/services#service-1"}>
            <div className="proj-imgbx">
              <img // eslint-disable-line
                className="lg:h-72 md:h-52 w-full object-cover object-center rounded-md"
                src="/service1.jpeg"
                alt="image of author"
              />
              <div className="proj-txtx">
                <h4 className="font-mono">Adult Eye Exams</h4>
              </div>
            </div>
          </Link>
        </Col>
        <Col xs={12} md={4} xl={3} className="lg:p-5 p-2">
          <Link href={"/services#service-2"}>
            <div className="proj-imgbx">
              <img // eslint-disable-line
                className="lg:h-72 md:h-52 w-full object-cover object-center rounded-md "
                src="/service2.jpeg"
                alt="image of author"
              />
              <div className="proj-txtx">
                <h4 className="font-mono">Senior Eye Exams</h4>
              </div>
            </div>
          </Link>
        </Col>
        <Col xs={12} md={4} xl={3} className="lg:p-5 p-2">
          <Link href={"/services#service-3"}>
            <div className="proj-imgbx">
              <img // eslint-disable-line
                className="lg:h-72 md:h-52 w-full object-cover object-center rounded-md "
                src="/service3.jpeg"
                alt="image of author"
              />
              <div className="proj-txtx">
                <h4 className="font-mono">Children Eye Exams</h4>
              </div>
            </div>
          </Link>
        </Col>
      </Row>

      <Row className="w-full flex flex-col md:flex-row justify-center">
        <Col xs={12} md={4} xl={3} className="lg:p-5 p-2">
          <Link href={"/services#service-4"}>
            <div className="proj-imgbx">
              <img // eslint-disable-line
                className="lg:h-72 md:h-52 w-full object-cover object-center rounded-md"
                src="/service4.jpeg"
                alt="image of author"
              />
              <div className="proj-txtx">
                <h4 className="font-mono">Diabetic Eye Exams</h4>
              </div>
            </div>
          </Link>
        </Col>
        <Col xs={12} md={4} xl={3} className="lg:p-5 p-2">
          <Link href={"/services#service-5"}>
            <div className="proj-imgbx">
              <img // eslint-disable-line
                className="lg:h-72 md:h-52 w-full object-cover object-center rounded-md"
                src="/service5.jpeg"
                alt="image of author"
              />
              <div className="proj-txtx">
                <h4 className="font-mono">Contact Lens Fitting</h4>
              </div>
            </div>
          </Link>
        </Col>
        <Col xs={12} md={4} xl={3} className="lg:p-5 p-2">
          <Link href={"/services#service-6"}>
            <div className="proj-imgbx">
              <img // eslint-disable-line
                className="lg:h-72 md:h-52 w-full object-cover object-center rounded-md"
                src="/service6.jpeg"
                alt="image of author"
              />
              <div className="proj-txtx">
                <h4 className="font-mono">Speciality Contact Lens Fitting</h4>
              </div>
            </div>
          </Link>
        </Col>
      </Row>

      <Row className="w-full flex flex-col md:flex-row justify-center">
        <Col xs={12} md={4} xl={3} className="lg:p-5 p-2">
          <Link href={"/services#service-7"}>
            <div className="proj-imgbx">
              <img // eslint-disable-line
                className="lg:h-72 md:h-52 w-full object-cover object-center rounded-md"
                src="/service7.jpeg"
                alt="image of author"
              />
              <div className="proj-txtx">
                <h4 className="font-mono">Dry Eye Therapy</h4>
              </div>
            </div>
          </Link>
        </Col>
        <Col xs={12} md={4} xl={3} className="lg:p-5 p-2">
          <Link href={"/services#service-8"}>
            <div className="proj-imgbx">
              <img // eslint-disable-line
                className="lg:h-72 md:h-52 w-full object-cover object-center rounded-md"
                src="/service8.jpeg"
                alt="image of author"
              />
              <div className="proj-txtx">
                <h4 className="font-mono">Myopia Control</h4>
              </div>
            </div>
          </Link>
        </Col>
        <Col xs={12} md={4} xl={3} className="lg:p-5 p-2">
          <Link href={"/services#service-9"}>
            <div className="proj-imgbx">
              <img // eslint-disable-line
                className="lg:h-72 md:h-52 w-full object-cover object-center rounded-md"
                src="/service9.jpeg"
                alt="image of author"
              />
              <div className="proj-txtx">
                <h4 className="font-mono">Laser Eye Surgery Consultation</h4>
              </div>
            </div>
          </Link>
        </Col>
      </Row>
    </section>
  );
};

export default Services;
