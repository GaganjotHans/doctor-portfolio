import Link from "next/link";
import React, { useState } from "react";
import Footer from "../components/Footer";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {
  const [captchaVal, setCaptchaVal] = useState("");
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-10">
          <h1 className="title-font font-medium text-3xl text-black font-serif">
            CONTACT US
          </h1>
          <p className="leading-relaxed mt-4 font-style">
            If you have any questions or comments for us, please call us or use
            the form below to contact our team who will be happy to help. If you
            are interested in booking an eye test, you can call us or{" "}
            <Link href={"/exam"} className="text-blue-800">
              {" "}
              click here{" "}
            </Link>
            to use our appointment request form.
          </p>
        </div>
        <div className="lg:w-2/5 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
          <div className="relative mb-4">
            <label
              htmlFor="firstName"
              className="leading-7 text-md text-gray-900 font-sans"
            >
              First Name
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
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label className="leading-7 text-md text-gray-900 font-sans">
              Patient Type
            </label>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                id="new-patient"
                name="patient-type"
                value="new"
                className="mr-2 "
              />
              <label
                htmlFor="new-patient"
                className="text-md text-gray-900 font-sans mr-4"
              >
                New Patient
              </label>
              <input
                type="radio"
                id="existing-patient"
                name="patient-type"
                value="existing"
                className="mr-2"
              />
              <label
                htmlFor="existing-patient"
                className="text-md text-gray-900 font-sans"
              >
                Existing Patient
              </label>
            </div>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              id="label-message"
              className="leading-7 text-md text-gray-900 font-sans"
            >
              Ask a question or leave us a specific request
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          {/* <button className="text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Button
          </button> */}
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
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
