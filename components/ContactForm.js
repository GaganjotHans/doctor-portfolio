import React, { useState } from "react";
import { IoIosContact, IoMdContact } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = ({ onClose }) => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

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

      setButtonText("SUBMIT");
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
      setButtonText("SUBMIT");
      setStatus({
        success: false,
        message: "Something went wrong, Please try again later",
      });
    }
  };

  return (
    <div className="wrapper mx-auto container">
      <span className="icon-close" onClick={onClose}>
        <IoClose />
      </span>
      <div className="form-box contact-form">
        <h2 className="font-serif">Contact Form</h2>
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
            <label htmlFor="message" id="label-message" className="text-form ">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full bg-white rounded border-2 border-black mt-4 text-base outline-none text-gray-700 py-1 px-3"
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
  );
};

export default ContactForm;
