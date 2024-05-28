import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const AppointmentForm = () => {
  const [captchaVal, setCaptchaVal] = useState("");
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container py-16 mx-auto">
        <div className="lg:w-3/5 md:w-full bg-gray-50 p-12 flex flex-col md:mr-auto w-full md:mt-0 border-2 font-style">
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
              htmlFor="location"
              className="leading-7 text-md text-gray-900 font-sans"
            >
              Select Nearest Location
              <span className="ml-1 text-blue-900 text-xl">*</span>
            </label>
            <select
              id="location"
              name="location"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
            >
              <option value="location1">
                Hakim Optical (222 Glendale Ave, St. Catharines, ON L2T 2K5)
              </option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
              <option value="location4">Location 4</option>
              <option value="location5">Location 5</option>
            </select>
          </div>

          <div className="relative mb-4">
            <label className="leading-7 text-md text-gray-900 font-sans">
              Patient Type
              <span className="ml-1 text-blue-900 text-xl">*</span>
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
            Submit Booking Request
          </button>
          <p className="text-xs text-gray-500 mt-3">
            We will be in touch with you soon.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
