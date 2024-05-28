import Link from "next/link";
import React, { useState } from "react";
import Footer from "../components/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    patientType: "new",
  };

  const [captchaVal, setCaptchaVal] = useState("");
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("SUBMIT FORM");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("SUBMITTING...");

    try {
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        }
      );

      let result = await response.json();

      setButtonText("SUBMIT FORM");
      setFormDetails(formInitialDetails);

      if (result.status === "Message Sent") {
        setStatus({ success: true, message: "Message sent Successfully" });
        toast.success("Message sent Successfully");
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, Please try again later",
        });
      }
    } catch (error) {
      console.error("Error:", error.message);
      setButtonText("SUBMIT FORM");
      setStatus({
        success: false,
        message: "Something went wrong, Please try again later",
      });
    }
  };

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
              <span className="ml-1 text-blue-900 text-xl">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              spellCheck="false"
              data-ms-editor="true"
              value={formDetails.firstName}
              onChange={(e) => onFormUpdate("firstName", e.target.value)}
              required
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
              value={formDetails.lastName}
              onChange={(e) => onFormUpdate("lastName", e.target.value)}
              required
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
              value={formDetails.email}
              onChange={(e) => onFormUpdate("email", e.target.value)}
              required
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
              type="tel"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={formDetails.phone}
              onChange={(e) => onFormUpdate("phone", e.target.value)}
              required
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
                className="mr-2"
                checked={formDetails.patientType === "new"}
                onChange={(e) => onFormUpdate("patientType", e.target.value)}
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
                checked={formDetails.patientType === "existing"}
                onChange={(e) => onFormUpdate("patientType", e.target.value)}
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
              value={formDetails.message}
              onChange={(e) => onFormUpdate("message", e.target.value)}
            ></textarea>
          </div>
          <ReCAPTCHA
            className="my-2"
            sitekey="6Lf0Q-YpAAAAANFtyYKB1KWbKv1lZLaecMU_-J_a"
            onChange={(val) => setCaptchaVal(val)}
          />
          <button
            disabled={!captchaVal}
            type="submit"
            onClick={handleSubmit}
            className="inline-flex items-center justify-center w-36 mr-auto bg-blue-900 text-white border-2 border-blue-900 p-2 focus:outline-none rounded mt-4 md:mt-0 font-thin text-lg hover:bg-transparent hover:text-blue-900"
          >
            {buttonText}
          </button>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
          {/* {status.message && (
            <p
              className={`mt-2 ${
                status.success ? "text-green-500" : "text-red-500"
              }`}
            >
              {status.message}
            </p>
          )} */}
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default Contact;
