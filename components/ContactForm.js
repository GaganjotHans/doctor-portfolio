import React from "react";

const ContactForm = () => {
  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        {/* <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Us
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify.
          </p>
        </div> */}
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <label
                htmlFor="fname"
                className="leading-7 text-sm text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                id="fname"
                name="fname"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-900 focus:bg-white focus:ring-2 focus:ring-blue-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-700 ease-in-out"
              />
            </div>
            <div className="p-2 w-full">
              <label
                htmlFor="lname"
                className="leading-7 text-sm text-gray-600"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lname"
                name="lname"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-900 focus:bg-white focus:ring-2 focus:ring-blue-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-700 ease-in-out"
              />
            </div>
            <div className="p-2 w-full">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-900 focus:bg-white focus:ring-2 focus:ring-blue-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-700 ease-in-out"
              />
            </div>
            <div className="p-2 w-full">
              <label
                htmlFor="number"
                className="leading-7 text-sm text-gray-600"
              >
                Phone
              </label>
              <input
                type="number"
                id="phoneNumber"
                name="phoneNumber"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-900 focus:bg-white focus:ring-2 focus:ring-blue-700 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-700 ease-in-out"
              />
            </div>
            <div className="p-2 w-full">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Ask a question or leave us a specific request
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-900 focus:bg-white focus:ring-2 focus:ring-blue-700 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-700 ease-in-out"
                spellCheck="false"
                data-ms-editor="true"
              ></textarea>
            </div>
            <div className="p-2 w-full">
              {/* <button className="flex mx-auto text-white bg-blue-900 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"> */}
              <button className="inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 p-2 focus:outline-none  rounded mt-4 md:mt-0 font-thin text-lg hover:bg-transparent hover:text-blue-900">
                Submit Request
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
