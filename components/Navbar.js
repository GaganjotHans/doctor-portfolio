// import Link from "next/link";
// import React from "react";

// const Navbar = () => {
//   return (
//     <header className="text-black bg-white body-font sticky top-0 z-40 shadow-md">
//       <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//         <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center font-style">
//           <Link className="mr-14 hover:text-gray-900" href={"/"}>
//             Home
//           </Link>
//           <Link className="mr-14 hover:text-gray-900" href={"/about"}>
//             About
//           </Link>
//           <Link className="mr-14 hover:text-gray-900" href={"/services"}>
//             Services
//           </Link>
//           <Link className="mr-14 hover:text-gray-900" href={"/exam"}>
//             Eye Exams
//           </Link>
//           <Link className="mr-14 hover:text-gray-900" href={"/resources"}>
//             Free Resources
//           </Link>
//           <Link className="mr-14 hover:text-gray-900" href={"/careers"}>
//             Careers
//           </Link>
//           <Link className="mr-14 hover:text-gray-900" href={"/contact"}>
//             Contact
//           </Link>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Navbar;
import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header shadow-lg">
      <div className="container-fluid font-serif">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="hamburger" onClick={toggleMenu}>
            {!isOpen && <RxHamburgerMenu size={24} />}
            {isOpen && (
              <AiOutlineClose
                className="hamburger-close"
                size={24}
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
          <Link className="nav-link" href="/" onClick={toggleMenu}>
            Home
          </Link>
          <Link className="nav-link" href="/about" onClick={toggleMenu}>
            About
          </Link>
          <Link className="nav-link" href="/services" onClick={toggleMenu}>
            Services
          </Link>
          <Link className="nav-link" href="/exam" onClick={toggleMenu}>
            Eye Exams
          </Link>
          <Link className="nav-link" href="/resources" onClick={toggleMenu}>
            Free Resources
          </Link>
          <Link className="nav-link" href="/careers" onClick={toggleMenu}>
            Careers
          </Link>
          <Link className="nav-link" href="/contact" onClick={toggleMenu}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
