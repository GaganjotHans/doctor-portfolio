import React, { useState } from "react";
import Footer from "../components/Footer";
import ReCAPTCHA from "react-google-recaptcha";

const Careers = () => {
  const [captchaVal, setCaptchaVal] = useState("");
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-10">
          <h1 className="title-font font-medium text-3xl text-black font-serif">
            We are hiring!
          </h1>
          <p className="leading-relaxed mt-4 font-style">
            Welcome to our careers page! We believe in nurturing talent and
            fostering professional growth. If you are a recent graduate or a
            co-op doctor eager to embark on an exciting career in eye care, we
            have a place for you.
          </p>
          <h1 className="title-font font-medium text-3xl text-black font-serif mt-8">
            Why Join Us?
          </h1>
          <div className="leading-relaxed mt-4 font-style my-2">
            {" "}
            <span className="text-bold text-black"> Mentorship Program: </span>
            Benefit from our structured mentorship program. Experienced
            optometrists and ophthalmologists will guide you through your early
            career stages, offering insights and expertise to help you excel.
          </div>
          <div className="leading-relaxed mt-4 font-style my-2">
            {" "}
            <span className="text-bold text-black">
              {" "}
              Comprehensive Training:{" "}
            </span>
            Our extensive training programs cover all aspects of eye care, from
            routine eye exams to specialized treatments. We ensure you are
            well-prepared to provide exceptional care to our patients.
          </div>
          <div className="leading-relaxed mt-4 font-style my-2">
            {" "}
            <span className="text-bold text-black"> Career Advancement: </span>
            We are committed to your professional growth. Opportunities for
            continuing education, certification courses, and leadership roles
            are available to help you advance your career.
          </div>
          <h1 className="title-font font-medium mt-8 text-3xl text-black font-serif">
            Who Are We Looking For?
          </h1>
          <div className="leading-relaxed mt-4 font-style my-2">
            {" "}
            <span className="text-bold text-black"> Recent Graduates: </span>
            If you have recently completed your degree in optometry or
            ophthalmology, we welcome you to start your career with us. Our
            clinic offers a supportive environment where you can apply your
            knowledge and skills.
          </div>
          <div className="leading-relaxed mt-4 font-style my-2">
            {" "}
            <span className="text-bold text-black"> Co-op Students: </span>
            Gain valuable practical experience while completing your studies.
            Our co-op positions provide a unique opportunity to work alongside
            experienced practitioners, bridging the gap between academic
            learning and real-world application
          </div>
        </div>
        <div className="lg:w-2/5 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 font-style">
          <div className="relative mb-4">
            <label
              htmlFor="firstName"
              className="leading-7 text-md text-gray-900 font-sans"
            >
              First Name
              <span className="ml-1 text-blue-900 text-xl">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              spellCheck="false"
              data-ms-editor="true"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="lastName"
              className="leading-7 text-md text-gray-900 font-sans"
            >
              Last Name
              <span className="ml-1 text-blue-900 text-xl">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              spellCheck="false"
              data-ms-editor="true"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-md text-gray-900 font-sans"
            >
              Email
              <span className="ml-1 text-blue-900 text-xl">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="phone"
              className="leading-7 text-md text-gray-900 font-sans"
            >
              Phone
              <span className="ml-1 text-blue-900 text-xl">*</span>
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="resumeLink"
              className="leading-7 text-md text-gray-900 font-sans"
            >
              Link to your resume
              <span className="ml-1 text-blue-900 text-xl">*</span>
            </label>
            <input
              type="text"
              id="resumeLink"
              name="resumeLink"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              id="label-message"
              className="leading-7 text-md text-gray-900 font-sans"
            >
              Tell us something specific about you
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <ReCAPTCHA
            className="my-2"
            sitekey="6Lf0Q-YpAAAAANFtyYKB1KWbKv1lZLaecMU_-J_a"
            onChange={(val) => setCaptchaVal(val)}
          />
          <button
            disabled={!captchaVal}
            className="inline-flex items-center mr-auto bg-blue-900 text-white border-2 border-blue-900 p-2 focus:outline-none  rounded mt-4 md:mt-0 font-thin text-lg hover:bg-transparent hover:text-blue-900"
          >
            Submit Request
          </button>
          <p className="text-xs text-gray-500 mt-3">
            We will be in touch with you soon.
          </p>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Careers;
