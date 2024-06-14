import React, { useState } from "react";
import Footer from "../components/Footer";
import { AiFillSchedule } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";
import ContactForm from "../components/ContactForm";

const OakvilleLocation = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  const toggleContactForm = () => {
    setShowContactForm(!showContactForm);
  };
  return (
    <section className="text-gray-600 body-font overflow-hidden p-4 lg:p-0">
      <h1 className="container mx-auto title-font font-medium text-3xl py-5 text-black font-serif mt-10 text-start border-b-2 border-y-gray-300 pl-4 lg:pl-0">
        HOURS & LOCATIONS
      </h1>
      <div className="container py-12 mx-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="flex flex-col flex-wrap md:flex-nowrap w-full lg:w-3/4 pr-0 md:pr-16">
            <div className="md:flex-grow">
              <p className="leading-relaxed pb-6 font-style">
                {`Looking for a trusted optometrist in the Niagara region? Our
                experienced eye doctors are dedicated to providing comprehensive
                eye care services for you and your family. Conveniently located
                in St. Catharines, we offer a wide range of services, from
                routine eye exams to advanced treatments for various eye
                conditions. Whether you're searching for an "eye doctor near me"
                or need specialized care, our team is here to help. Schedule
                your appointment today and experience personalized, professional
                eye care in the heart of the Niagara region.`}
              </p>
              <h2 className="text-3xl font-medium text-gray-900 title-font mb-2 font-serif">
                {"LensCrafters - Oakville"}
              </h2>

              <div className="contactDetails w-full">
                <div className="border-b-2 border-y-gray-300 font-style mt-10">
                  Contact Details
                </div>
                <div className="flex font-mono">
                  <strong className="mt-6 lg:w-1/12 ">Phone: </strong>
                  <span className="mt-6 ">(435) 881-3453</span>
                </div>
                <div className="flex font-mono">
                  <strong className="mt-6 lg:w-1/12">Fax: </strong>
                  <span className="mt-6">(435) 881-3453</span>
                </div>
                <div className="flex font-mono">
                  <strong className="mt-6 lg:w-1/12">Email: </strong>
                  <span className="mt-6">DrShahrokhKhoshsobhat@gmail.com</span>
                </div>
              </div>

              <div className="address">
                <div className="border-b-2 border-y-gray-300 font-style mt-10">
                  Address
                </div>
                <div className="mt-6 font-mono">
                  240 Leighland Ave Spc 124, Oakville, ON L6H 3H6
                </div>
              </div>

              <div className="directions">
                <div className="border-b-2 border-y-gray-300 font-style mt-10">
                  Directions
                </div>
                <div className="my-6 font-mono">Free Parking</div>
                <div className="w-full h-96 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                  <iframe
                    width="100%"
                    height="100%"
                    className="absolute inset-0"
                    title="map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2895.9797302886727!2d-79.69010822396035!3d43.461020364839555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b5cdc5b8afd6f%3A0xa6efa43b300e7f6b!2sLensCrafters!5e0!3m2!1sen!2sca!4v1718394112296!5m2!1sen!2sca"
                  ></iframe>
                </div>
              </div>

              <div className="hours mb-6">
                <div className="border-b-2 border-y-gray-300 font-style mt-10">
                  Hours
                </div>
                <div className="flex font-mono">
                  <strong className="mt-6 lg:w-1/6">Monday: </strong>
                  <span className="mt-6">10:00AM - 5:00PM</span>
                </div>
                <div className="flex font-mono mt-1">
                  <strong className="lg:w-1/6">Tuesday: </strong>
                  <span className="w-5/6">10:00AM - 5:00PM</span>
                </div>
                <div className="flex font-mono mt-1">
                  <strong className="lg:w-1/6">Wednesday: </strong>
                  <span className="w-5/6">Not Availabe</span>
                </div>
                <div className="flex font-mono mt-1">
                  <strong className="lg:w-1/6">Thursday: </strong>
                  <span className="w-5/6">10:00AM - 5:00PM</span>
                </div>
                <div className="flex font-mono mt-1">
                  <strong className="lg:w-1/6">Friday: </strong>
                  <span className="w-5/6">10:00AM - 5:00PM</span>
                </div>
                <div className="flex font-mono mt-1">
                  <strong className="lg:w-1/6">Saturday: </strong>
                  <span className="w-5/6">Not Availabe</span>
                </div>
                <div className="flex font-mono mt-1">
                  <strong className="lg:w-1/6">Sunday: </strong>
                  <span className="w-5/6">Not Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-wrap md:flex-nowrap w-full lg:w-1/4">
            <div className="flex-shrink-0 flex flex-col">
              <Link href={"/exam#book-appointment"}>
                <button className="inline-block md:inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 p-2 focus:outline-none  md:rounded md:mt-0 font-thin text-lg hover:bg-transparent hover:text-blue-900 w-5/6">
                  <AiFillSchedule className="mr-2 text-3xl inline-block" />
                  Book Appointment
                </button>
              </Link>
              <button
                className="inline-block md:inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 p-2 focus:outline-none  md:rounded mt-2 font-thin text-lg hover:bg-transparent hover:text-blue-900 w-5/6"
                onClick={toggleContactForm}
              >
                <IoMdContact className="mr-2 text-3xl inline-block" />
                Contact Form
              </button>
              {showContactForm && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white rounded-3xl shadow-lg relative">
                    <ContactForm onClose={toggleContactForm} />
                  </div>
                </div>
              )}
            </div>

            <div className="flex-shrink-0 flex flex-col my-5">
              <span className="font-thin font-serif text-2xl title-font text-gray-700">
                More Locations
                <FaArrowDown className="inline-flex ml-2 text-lg" />
              </span>
              <span className="mt-1 text-gray-500 text-sm">
                We cover multiple locations. Check the dates.
              </span>
            </div>

            <div className="mb-6 flex-shrink-0 flex flex-col">
              <Link href={"/buffalo-location"}>
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 font-serif text-transition">
                  {"America's Best Contacts & Eyeglasses - Buffalo"}
                </h2>
              </Link>
              <div className="contactDetails text-sm">
                <div className="flex flex-col font-mono mt-4">
                  <strong>Phone: </strong>
                  <span>(435) 881-3453</span>
                </div>
                <div className="flex flex-col font-mono mt-2">
                  <strong>Fax: </strong>
                  <span>(435) 881-3453</span>
                </div>
                <div className="flex flex-col font-mono mt-2">
                  <strong>Email: </strong>
                  <span className="">DrShahrokhKhoshsobhat@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="mb-6 flex-shrink-0 flex flex-col">
              <Link href={"/st-catharines-location"}>
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 font-serif text-transition">
                  {"Custom Lens Xpress - St. Catharines"}
                </h2>
              </Link>
              <div className="contactDetails text-sm">
                <div className="flex flex-col font-mono mt-4">
                  <strong>Phone: </strong>
                  <span>(435) 881-3453</span>
                </div>
                <div className="flex flex-col font-mono mt-2">
                  <strong>Fax: </strong>
                  <span>(435) 881-3453</span>
                </div>
                <div className="flex flex-col font-mono mt-2">
                  <strong>Email: </strong>
                  <span className="">DrShahrokhKhoshsobhat@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="mb-6 flex-shrink-0 flex flex-col">
              <Link href={"/burlington-location"}>
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 font-serif text-transition">
                  {"Vision Clinic- Burlington"}
                </h2>
              </Link>
              <div className="contactDetails text-sm">
                <div className="flex flex-col font-mono mt-4">
                  <strong>Phone: </strong>
                  <span>(435) 881-3453</span>
                </div>
                <div className="flex flex-col font-mono mt-2">
                  <strong>Fax: </strong>
                  <span>(435) 881-3453</span>
                </div>
                <div className="flex flex-col font-mono mt-2">
                  <strong>Email: </strong>
                  <span className="">DrShahrokhKhoshsobhat@gmail.com</span>
                </div>
              </div>
            </div>

            <div className="mb-6 flex-shrink-0 flex flex-col">
              <Link href={"/toronto-location"}>
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 font-serif text-transition">
                  {"Hakim Optical- Toronto"}
                </h2>
              </Link>
              <div className="contactDetails text-sm">
                <div className="flex flex-col font-mono mt-4">
                  <strong>Phone: </strong>
                  <span>(435) 881-3453</span>
                </div>
                <div className="flex flex-col font-mono mt-2">
                  <strong>Fax: </strong>
                  <span>(435) 881-3453</span>
                </div>
                <div className="flex flex-col font-mono mt-2">
                  <strong>Email: </strong>
                  <span className="">DrShahrokhKhoshsobhat@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default OakvilleLocation;
