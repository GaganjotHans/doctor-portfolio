import React from "react";
import Footer from "../components/Footer";
import { AiFillSchedule } from "react-icons/ai";
import { IoMdContact } from "react-icons/io";
import { FaArrowDown } from "react-icons/fa";
import Link from "next/link";

const StCatharinesLocation = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <h1 className="container mx-auto title-font font-medium text-3xl py-5 text-black font-serif mt-10 text-start border-b-2 border-y-gray-300 pl-4 lg:pl-0">
        HOURS & LOCATIONS
      </h1>
      <div className="container py-12 mx-auto">
        <div className="flex flex-col md:flex-row ali">
          <div className="flex flex-col flex-wrap md:flex-nowrap w-3/4 pr-0 md:pr-16">
            <div className="md:flex-grow">
              <p className="leading-relaxed pb-6 font-style">
                See clearly, live fully - Book your appointment today! Your
                vision is our mission, and we are dedicated to providing
                precision eye care. Do not wait to transform your sight. Call us
                now to schedule your consultation. We have been serving Ontario
                southern region and western New York for more than 10 years
              </p>
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 font-serif">
                Hakim Optical - St. Catharines
              </h2>

              <div className="contactDetails">
                <div className="border-b-2 border-y-gray-300 font-style mt-10">
                  Contact Details
                </div>
                <div className="flex font-mono">
                  <strong className="mt-6 w-1/12">Phone: </strong>
                  <span className="mt-6">(435) 881-3453</span>
                </div>
                <div className="flex font-mono">
                  <strong className="mt-6 w-1/12">Fax: </strong>
                  <span className="mt-6">(435) 881-3453</span>
                </div>
                <div className="flex font-mono">
                  <strong className="mt-6 w-1/12">Email: </strong>
                  <span className="mt-6">DrShahrokhKhoshsobhat@gmail.com</span>
                </div>
              </div>

              <div className="address">
                <div className="border-b-2 border-y-gray-300 font-style mt-10">
                  Address
                </div>
                <div className="mt-6 font-mono">
                  222 Glendale Ave, St. Catharines, ON L2T 2K5
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2911.6649698656784!2d-79.22744072397641!3d43.13256378594844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d350219c923343%3A0x7bd8990f8c19c67d!2sHakim%20Optical%20St.%20Catherines%20-%20Glendale!5e0!3m2!1sen!2sca!4v1718121970015!5m2!1sen!2sca"
                  ></iframe>
                </div>
              </div>

              <div className="hours">
                <div className="border-b-2 border-y-gray-300 font-style mt-10">
                  Hours
                </div>
                <div className="flex font-mono">
                  <strong className="mt-6 w-1/6">Monday: </strong>
                  <span className="mt-6">10:00AM - 5:00PM</span>
                </div>
                <div className="flex font-mono mt-1">
                  <strong className="w-1/6">Tuesday: </strong>
                  <span className="w-5/6">10:00AM - 5:00PM</span>
                </div>
                <div className="flex flex-wrap font-mono mt-1">
                  <strong className="w-1/6">Wednesday: </strong>
                  <span className="w-5/6">Not Availabe</span>
                </div>
                <div className="flex flex-wrap font-mono mt-1">
                  <strong className="w-1/6">Thursday: </strong>
                  <span className="w-5/6">10:00AM - 5:00PM</span>
                </div>
                <div className="flex flex-wrap font-mono mt-1">
                  <strong className="w-1/6">Friday: </strong>
                  <span className="w-5/6">10:00AM - 5:00PM</span>
                </div>
                <div className="flex flex-wrap font-mono mt-1">
                  <strong className="w-1/6">Saturday: </strong>
                  <span className="w-5/6">Not Availabe</span>
                </div>
                <div className="flex flex-wrap font-mono mt-1">
                  <strong className="w-1/6">Sunday: </strong>
                  <span className="w-5/6">Not Available</span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col flex-wrap md:flex-nowrap w-1/4">
            <div className="flex-shrink-0 flex flex-col">
              <Link href={"/exam#book-appointment"}>
                <button className="inline-block md:inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 p-2 focus:outline-none  md:rounded md:mt-0 font-thin text-lg hover:bg-transparent hover:text-blue-900 w-5/6">
                  <AiFillSchedule className="mr-2 text-3xl inline-block" />
                  Book Appointment
                </button>
              </Link>
              <Link href={"/exam#book-appointment"}>
                <button className="inline-block md:inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 p-2 focus:outline-none  md:rounded mt-2 font-thin text-lg hover:bg-transparent hover:text-blue-900 w-5/6">
                  <IoMdContact className="mr-2 text-3xl inline-block" />
                  Contact Form
                </button>
              </Link>
            </div>

            <div className="flex-shrink-0 flex flex-col my-5">
              <span className="font-thin font-serif text-2xl title-font text-gray-700">
                More Locations
                <FaArrowDown className="inline-flex ml-2 text-lg" />
              </span>
              <span className="mt-1 text-gray-500 text-sm">
                We cover multiple locations on different days.
              </span>
            </div>

            <div className="mb-6 flex-shrink-0 flex flex-col">
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 font-serif">
                {"America's Best Contacts & Eyeglasses - Buffalo"}
              </h2>
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
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 font-serif">
                {"Custom Lens Xpress - St. Catharines"}
              </h2>
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
              <h2 className="text-2xl font-medium text-gray-900 title-font mb-2 font-serif">
                {"Vision Clinic- Burlington"}
              </h2>
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

export default StCatharinesLocation;
