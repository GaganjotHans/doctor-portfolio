import React, { useState } from "react";
import Footer from "../components/Footer";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Expectations from "../components/Expectations";

import { IoIosContact, IoMdContact } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const Careers = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  };

  const [file, setFile] = useState(null);
  const [captchaVal, setCaptchaVal] = useState("");
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("SUBMIT");
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

    const formData = new FormData();
    for (const key in formDetails) {
      formData.append(key, formDetails[key]);
    }
    formData.append("resume", file);

    try {
      const response = await fetch("/api/career", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      if (response.ok) {
        toast.success("Message Sent!");
        setFormDetails(formInitialDetails);
        setFile(null);
        setCaptchaVal("");
      } else {
        toast.error(
          result.message || "Something went wrong. Please try again."
        );
      }

      // Pass the result to the resolve function
      await new Promise((resolve) => resolve(result));
    } catch (error) {
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setButtonText("SUBMIT");
    }
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="px-5 py-24 mx-auto flex flex-wrap justify-center bg-img">
        <div className="lg:w-1/3 md:w-1/2 shadow-xl">
          <img // eslint-disable-line
            className="w-full h-full object-cover object-center rounded-l-lg"
            src="/careers.jpeg"
            alt="blog"
          />
        </div>
        <div className="lg:w-1/3 md:w-1/2 bg-gray-100 rounded-r-lg p-4 md:p-8 flex flex-col w-full mt-10 md:mt-0 font-style shadow-xl">
          <div className="form-box contact-form">
            <div>
              <div className="input-box">
                <span className="icon">
                  <IoIosContact className="inline-flex text-3xl" />
                </span>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  spellCheck="false"
                  data-ms-editor="true"
                  value={formDetails.firstName}
                  onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  required
                />
                <label htmlFor="firstName">First Name</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <IoMdContact className="inline-flex text-3xl" />
                </span>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  spellCheck="false"
                  data-ms-editor="true"
                  value={formDetails.lastName}
                  onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  required
                />
                <label htmlFor="lastName">Last Name</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <MdEmail className="inline-flex text-3xl" />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formDetails.email}
                  onChange={(e) => onFormUpdate("email", e.target.value)}
                  required
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <FaPhone className="inline-flex text-2xl" />
                </span>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formDetails.phone}
                  onChange={(e) => onFormUpdate("phone", e.target.value)}
                  required
                />
                <label htmlFor="phone">Phone</label>
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="resumeLink"
                  className="leading-7 text-md text-gray-900 font-sans"
                >
                  Upload Resume/CV
                  <span className="ml-1 text-blue-900 text-xl">*</span>
                </label>
                <input
                  type="file"
                  accept="application/pdf"
                  id="resumeLink"
                  name="resumeLink"
                  className="w-full bg-white rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out file:mr-4 file:py-1 file:px-4  file:border-0 file:text-md file:font-semibold file:bg-blue-100 file:text-blue-900 hover:file:bg-blue-200 file:cursor-pointer"
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                />
              </div>
              <ReCAPTCHA
                className="my-2"
                sitekey="6Lf0Q-YpAAAAANFtyYKB1KWbKv1lZLaecMU_-J_a"
                onChange={(val) => setCaptchaVal(val)}
              />
              <button
                disabled={
                  !captchaVal ||
                  !formDetails.firstName ||
                  !formDetails.lastName ||
                  !formDetails.email ||
                  !formDetails.phone
                }
                type="submit"
                onClick={handleSubmit}
                className="btn"
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
            </div>
          </div>
        </div>
      </div>
      <Expectations />
      <Footer />
    </section>
  );
};

export default Careers;
