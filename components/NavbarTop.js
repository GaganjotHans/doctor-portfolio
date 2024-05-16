import React from "react";
import Image from "next/image";
import { AiFillSchedule } from "react-icons/ai";

const NavbarTop = () => {
  return (
    <header className="text-black body-font border-b-2 border-y-blue-950">
      <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <img // eslint-disable-line
            src="/DrLogo.png"
            alt="Logo of the author's Name"
            width={250}
            height={150}
          />
        </a>
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <div className="font-style flex flex-col text-center">
            <div className="font-bold text-xl text-blue-900">Niche </div>
            <div className="font-thin">
              Vision Craftsmanship + Style Guidance + Expert Eye Care
            </div>
          </div>
        </nav>
        <button className="inline-flex items-center bg-blue-900 text-white border-0 p-3 focus:outline-none hover:bg-blue-800 rounded mt-4 md:mt-0 font-thin text-lg hover:bg-transparent hover:text-black">
          Book Appointment
          <AiFillSchedule className="ml-2 text-3xl" />
        </button>
      </div>
    </header>
  );
};

export default NavbarTop;
