import React from "react";
import Footer from "../components/Footer";
import Expectations from "../components/Expectations";

const Doctor = () => {
  return (
    <section className="text-gray-600 body-font">
      <h1 className=" container mx-auto title-font font-medium text-3xl py-5 text-black font-serif mt-10 text-start border-b-2 border-y-gray-300">
        MEET THE DOCTOR
      </h1>
      <div className="container mx-auto flex px-20 py-16 md:flex-row flex-col items-start bg-gray-50 mb-24">
        <div className="lg:flex-grow md:w-3/5 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-2xl  md:text-3xl mb-4 font-normal text-gray-900 font-serif">
            Dr. Shahrokh Khoshsobhat
          </h1>
          <p className="mb-8 leading-relaxed font-style">
            I hold a Bachelor of Science degree from the University of Waterloo,
            where I graduated with honors. Following this, I pursued a
            specialization in Optometry at Western University of Health
            Sciences. This advanced education provided me with a robust
            foundation in ocular health and vision care, supplemented by
            in-depth training in diagnostic and therapeutic techniques.
            <br />
            <span className="block mt-5">
              With over seven years of professional experience as an eye doctor,
              I have developed a comprehensive skill set that encompasses
              patient care, diagnostic accuracy, and therapeutic interventions.
              My career began at [First Job or Company], where I quickly
              established myself as a dedicated and skilled optometrist. Since
              then, I have held progressively responsible positions, each
              contributing to my proficiency in delivering high-quality eye
              care.I am adept at patient communication, problem-solving, and
              individualized patient care plans. My ability to develop and
              maintain strong patient relationships, combined with my technical
              expertise, has been pivotal in achieving successful treatment
              outcomes and high levels of patient satisfaction. My professional
              journey is marked by a commitment to excellence, a passion for
              optometry, and a dedication to improving the vision and overall
              eye health of my patients.
            </span>
          </p>
        </div>
        <div className="lg:max-w-lg  md:w-2/5 w-5/6">
          <img //eslint-disable-line
            className="object-cover object-center rounded h-96"
            alt="hero"
            src="/drImage.jpeg"
          />
        </div>
      </div>
      <Expectations />
      <Footer />
    </section>
  );
};

export default Doctor;
