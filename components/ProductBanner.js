import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa";

const ProductBanner = () => {
  return (
    <section className="product-banner" id="home">
      <section className="block md:flex md:flex-row items-center justify-between px-2">
        <div className="w-5/6 md:w-2/3 lg:w-2/5 ml-10">
          <h1 className="text-bold text-3xl xl:text-5xl my-4 font-thin anim">
            Recommended by Eye Care Professionals
          </h1>
          <p className="font-style my-4 anim">
            The Optase eye care range offers heat, cleanse and hydrate
            treatments and is recommended by eye care professionals for the
            relief of:
          </p>
          <div className="my-2 font-style">
            <span className="inline-flex">
              <FaArrowRight />
            </span>{" "}
            Dry Eye
          </div>
          <div className="my-2 font-style">
            <span className="inline-flex">
              <FaArrowRight />
            </span>{" "}
            Meibomian Gland Dysfunction
          </div>
          <div className="my-2 font-style">
            <span className="inline-flex">
              <FaArrowRight />
            </span>{" "}
            Blepharitis
          </div>
          <Link href={"/about"}>
            <button className="inline-flex items-center bg-blue-900 text-white p-2 focus:outline-none  rounded mt-4 font-thin text-lg hover:bg-transparent border-2 border-blue-900 hover:text-blue-900 anim">
              Browse All Products
            </button>
          </Link>
        </div>
        <div className="w-full md:w-1/2">
          {/* <img // eslint-disable-line
            src="/home11.webp"
            alt="image of author"
            className="mt-10 mx-auto"
          /> */}
        </div>
      </section>
    </section>
  );
};

export default ProductBanner;
