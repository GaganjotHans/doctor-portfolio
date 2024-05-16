import React from "react";

const Navbar = () => {
  return (
    <header className="text-black body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-style">
          <a className="mr-14 hover:text-gray-900">Home</a>
          <a className="mr-14 hover:text-gray-900">About</a>
          <a className="mr-14 hover:text-gray-900">Services</a>
          <a className="mr-14 hover:text-gray-900">Free Resources</a>
          <a className="mr-14 hover:text-gray-900">Careers</a>
          <a className="mr-14 hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
