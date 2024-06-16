import React from "react";

const HyloRelief = () => {
  return (
    <section>
      <div className="container mx-auto text-xl text-black font-serif mt-24 text-start border-b-2 border-y-blue-900 pl-4 lg:pl-0 ">
        <button className="border-2 border-blue-900 p-2 mr-5">
          Dry Eye Intense Drops
        </button>
        <button className="">HYLO Relief Dry Eye Drops</button>
      </div>
      <div className="hylo-relief-container my-16">
        <div className="hylo-relief-content w-4/5">
          <div className="info-section left">
            <div className="info-box lg:w-72" id="box1">
              <h2>100% Preservative Free</h2>
              <p>
                All our eye drops and eye sprays at Optase are preservative and
                phosphate free to allow for continued use and relief.
              </p>
            </div>
            <div className="info-box lg:w-72" id="box2">
              <h2>Ingredients Picked for Comfort</h2>
              <p>
                The special formulation of long lasting Hyaluronic Acid and
                Glycerin provides comfort from mild to moderate dry eye
                symptoms.
              </p>
            </div>
          </div>
          {/* <div className="image-box">
          <img
            src="https://optase.com/wp-content/themes/optase-2022/images/circle-background.svg"
            alt="Optase Hylo Relief"
          />
        </div> */}
          <div className="image-box">
            <div className="image-container">
              <img
                src="https://optase.com/wp-content/themes/optase-2022/images/circle-background.svg"
                className="main-image"
              />
              <img
                src="https://optase.com/wp-content/uploads/2022/03/Optase-Intense-Dry-Eye-Drops.png"
                alt="Top Image"
                className="top-image"
              />
            </div>
          </div>
          <div className="info-section right">
            <div className="info-box ml-auto lg:w-72" id="box3">
              <h2>Introducing the HYLO® Delivery System</h2>
              <p>
                An innovative and easy to use multi-use drop bottle amassing
                over 450 million worldwide sales and counting.
              </p>
            </div>
            <div className="info-box ml-auto lg:w-72" id="box4">
              <h2>One Click, One Drop Bottle Innovation</h2>
              <p>
                The HYLO® delivery system guarantees 300 preservative free
                calibrated drops with 6 months stability which means good value
                for patients every time.
              </p>
            </div>
          </div>
        </div>
        <button className="learn-more-button">
          Learn more about HYLO Relief Dry Eye Drops
        </button>
      </div>
    </section>
  );
};

export default HyloRelief;
