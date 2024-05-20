import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="text-black bg-white body-font sticky top-0 z-40 shadow-md">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-style">
          <Link className="mr-14 hover:text-gray-900" href={"/"}>
            Home
          </Link>
          <Link className="mr-14 hover:text-gray-900" href={"/about"}>
            About
          </Link>
          <Link className="mr-14 hover:text-gray-900" href={"/services"}>
            Services
          </Link>
          <Link className="mr-14 hover:text-gray-900" href={"/exam"}>
            Eye Exams
          </Link>
          <Link className="mr-14 hover:text-gray-900" href={"/resources"}>
            Free Resources
          </Link>
          <Link className="mr-14 hover:text-gray-900" href={"/careers"}>
            Careers
          </Link>
          <Link className="mr-14 hover:text-gray-900" href={"/contact"}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
