// import Link from "next/link";
// import React, { useState } from "react";
// import { RxHamburgerMenu } from "react-icons/rx";
// import { AiOutlineClose } from "react-icons/ai";
// import Dropdown from "./Dropdown";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="header shadow-lg">
//       <div className="container-fluid font-serif">
//         <div className="flex items-center justify-between w-full md:w-auto">
//           <div className="hamburger" onClick={toggleMenu}>
//             {!isOpen && <RxHamburgerMenu size={24} />}
//             {isOpen && (
//               <AiOutlineClose
//                 className="hamburger-close"
//                 size={24}
//                 onClick={toggleMenu}
//               />
//             )}
//           </div>
//         </div>
//         <nav className={`nav ${isOpen ? "nav-open" : ""}`}>
//           <Link className="nav-link" href="/" onClick={toggleMenu}>
//             Home
//           </Link>
//           <Link className="nav-link" href="/about" onClick={toggleMenu}>
//             About
//           </Link>
//           <Link className="nav-link" href="/services" onClick={toggleMenu}>
//             Services
//           </Link>
//           <Link className="nav-link" href="/exam" onClick={toggleMenu}>
//             Eye Exams
//           </Link>
//           <Link className="nav-link" href="/resources" onClick={toggleMenu}>
//             Free Resources
//           </Link>
//           <Link className="nav-link" href="/careers" onClick={toggleMenu}>
//             Careers
//           </Link>
//           <div className="dropdown">
//             <Link className="nav-link" href="#">
//               Hours and Location
//             </Link>
//             <div className="dropdown-content">
//               <Link href="#" onClick={toggleMenu}>
//                 St. Catharines, ON
//               </Link>
//               <Link href="#" onClick={toggleMenu}>
//                 Buffalo, NY
//               </Link>
//               <Link href="#" onClick={toggleMenu}>
//                 Location 3
//               </Link>
//               <Link href="#" onClick={toggleMenu}>
//                 Location 4
//               </Link>
//               <Link href="#" onClick={toggleMenu}>
//                 Location 5
//               </Link>
//             </div>
//           </div>
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
import { RiArrowDropDownFill } from "react-icons/ri";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setDropdownOpen(false); // Close dropdown when main menu is toggled
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <header className="header shadow-lg">
      <div className="container-fluid font-serif">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="hamburger" onClick={toggleMenu}>
            {!isOpen ? (
              <RxHamburgerMenu size={24} />
            ) : (
              <AiOutlineClose size={24} />
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
          <div className={`dropdown ${dropdownOpen ? "dropdown-open" : ""}`}>
            <div className="nav-link inline-flex" onClick={toggleDropdown}>
              Hours and Location
              <RiArrowDropDownFill className="text-3xl" />
            </div>
            <div className="dropdown-content">
              <Link href="/st-catharines-location" onClick={toggleMenu}>
                St. Catharines, ON
              </Link>
              <Link href="#" onClick={toggleMenu}>
                Burlington, ON
              </Link>
              <Link href="#" onClick={toggleMenu}>
                Toronto, ON
              </Link>
              <Link href="#" onClick={toggleMenu}>
                Oakville, ON
              </Link>
              <Link href="#" onClick={toggleMenu}>
                Buffalo, NY
              </Link>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
