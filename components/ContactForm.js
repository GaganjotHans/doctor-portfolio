import React from "react";
import { IoIosContact, IoMdContact } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

const ContactForm = ({ onClose }) => {
  return (
    <div className="wrapper mx-auto container">
      <span className="icon-close" onClick={onClose}>
        <IoClose />
      </span>
      <div className="form-box contact-form">
        <h2 className="font-serif">Contact Form</h2>
        <form action="#">
          <div className="input-box">
            <span className="icon">
              <IoIosContact className="inline-flex text-3xl" />
            </span>
            <input type="text" required />
            <label htmlFor="firstName">First Name</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <IoMdContact className="inline-flex text-3xl" />
            </span>
            <input type="text" required />
            <label htmlFor="lastName">Last Name</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <MdEmail className="inline-flex text-3xl" />
            </span>
            <input type="email" required />
            <label htmlFor="email">Email</label>
          </div>
          <div className="input-box">
            <span className="icon">
              <FaPhone className="inline-flex text-2xl" />
            </span>
            <input type="phone" required />
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
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
