import Link from "next/link";
import React from "react";
import { useState, useEffect } from "react";
import { AiFillSchedule } from "react-icons/ai";

const NavbarTop = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;
  const toRotate = [
    "Craftsmanship + Style Guidance + Expert Eye Care",
    "Care + Eye Health Partner + Innovative Eye Solutions ",
  ];

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    }; // eslint-disable-next-line
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <header className="text-black body-font bg-white border-b-2 border-y-blue-950">
      <div className="container md:mx-auto flex flex-wrap md:p-2 flex-col-reverse md:flex-row items-center justify-between">
        <Link
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          href={"/"}
        >
          <img // eslint-disable-line
            src="/DrLogo2.png"
            alt="Logo of the author's Name"
            className="w-64 lg:w-72 mt-1 lg:mt-0 h-20"
          />
        </Link>
        <nav className="md:ml-auto md:mr-auto hidden lg:flex">
          <div className="font-style flex flex-col text-center">
            <div className="font-bold text-xl text-blue-900">Niche </div>
            <div className="font-thin">
              Vision <span>{text}</span>{" "}
            </div>
          </div>
        </nav>
        <Link href={"/product"}>
          <button className="inline-block w-screen md:w-fit md:inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 p-2 focus:outline-none  md:rounded md:mt-0 font-thin text-lg hover:bg-transparent hover:text-blue-900">
            Shop Online
            <AiFillSchedule className="ml-2 text-3xl hidden md:inline-block" />
          </button>
        </Link>
      </div>
    </header>
  );
};

export default NavbarTop;
