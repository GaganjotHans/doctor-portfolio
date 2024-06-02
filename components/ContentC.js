// import React from "react";
// import { Col, Container, Row } from "react-bootstrap";
// import { useState } from "react";

// const ContentC = () => {
//   const [backgroundImage, setBackgroundImage] = useState("/NormalVision.webp");
//   const [heading, setHeading] = useState("This is Normal Eye Vision");
//   const [text, setText] = useState(
//     "Normal eye vision allows you to see the world clearly and comfortably without the need for corrective lenses.With normal vision, you can enjoy everyday activities with ease and confidence."
//   );
//   const images = [
//     {
//       src: "/Glaucoma.png",
//       heading: "Glaucoma",
//       text: "Glaucoma is a serious eye condition that can lead to vision loss if not detected early. It occurs when increased pressure in the eye damages the optic nerve. ",
//     },
//     {
//       src: "/Cataracts.png",
//       heading: "Cataracts",
//       text: "Cataracts are a common eye condition where the clear lens of the eye becomes cloudy, leading to blurred or dimmed vision. Imagine looking through a foggy window.",
//     },
//     {
//       src: "/DiabeticRetinopathy.png",
//       heading: "Diabetic Retinopathy",
//       text: "Diabetic retinopathy is a serious eye condition caused by diabetes, leading to damage in the blood vessels of the retina. If left untreated, it can result in vision loss.",
//     },
//     {
//       src: "/RefractiveError.png",
//       heading: "Refractive Error",
//       text: "Refractive errors are common vision problems that occur when the shape of your eye prevents light from focusing correctly on the retina. This can result in blurred vision for objects near, far, or both. ",
//     },
//     {
//       src: "/MacularDegeneration.png",
//       heading: "Macular Degeneration",
//       text: "Macular Degeneration is a leading cause of vision loss, affecting the central part of the retina known as the macula. This condition can make it difficult to see fine details, read, or recognize faces.",
//     },
//   ];
//   const handleMouseOver = (bgImage, heading, text) => {
//     setBackgroundImage(bgImage);
//     setHeading(heading);
//     setText(text);
//   };
//   return (
//     <section
//       className="content__section__img mb-16"
//       style={{ backgroundImage: `url(${backgroundImage})` }}
//     >
//       <Row className="w-full my-36 relative -top-48">
//         <section className="text-gray-600 body-font">
//           <div className=" px-5 py-24 mx-auto">
//             <div className="flex flex-wrap -m-4">
//               <div className="p-4 md:w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 ...">
//                 <img // eslint-disable-line
//                   className="lg:h-56 md:h-36 w-full object-cover object-center"
//                   src="/Glaucoma.png"
//                   alt="blog"
//                   onMouseEnter={() =>
//                     handleMouseOver(
//                       images[0].src,
//                       images[0].heading,
//                       images[0].text
//                     )
//                   }
//                   onMouseLeave={() =>
//                     handleMouseOver(
//                       "/NormalVision.webp",
//                       "This is Normal Eye Vision",
//                       "Normal eye vision allows you to see the world clearly and comfortably without the need for corrective lenses.With normal vision, you can enjoy everyday activities with ease and confidence."
//                     )
//                   }
//                 />
//                 <h2 className="text-white text-3xl relative -top-36  text-center font-serif">
//                   Glaucoma
//                 </h2>
//               </div>

//               <div className="p-4 md:w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 ...">
//                 <img // eslint-disable-line
//                   className="lg:h-56 md:h-36 w-full object-cover object-center"
//                   src="/Cataracts.png"
//                   alt="blog"
//                   onMouseEnter={() =>
//                     handleMouseOver(
//                       images[1].src,
//                       images[1].heading,
//                       images[1].text
//                     )
//                   }
//                   onMouseLeave={() =>
//                     handleMouseOver(
//                       "/NormalVision.webp",
//                       "This is Normal Eye Vision",
//                       "Normal eye vision allows you to see the world clearly and comfortably without the need for corrective lenses.With normal vision, you can enjoy everyday activities with ease and confidence."
//                     )
//                   }
//                 />
//                 <h2 className="text-white text-3xl relative -top-36  text-center font-serif">
//                   Cataracts
//                 </h2>
//               </div>
//               <div className="p-4 md:w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 ...">
//                 <img // eslint-disable-line
//                   className="lg:h-56 md:h-36 w-full object-cover object-center"
//                   src="/DiabeticRetinopathy.png"
//                   alt="blog"
//                   onMouseEnter={() =>
//                     handleMouseOver(
//                       images[2].src,
//                       images[2].heading,
//                       images[2].text
//                     )
//                   }
//                   onMouseLeave={() =>
//                     handleMouseOver(
//                       "/NormalVision.webp",
//                       "This is Normal Eye Vision",
//                       "Normal eye vision allows you to see the world clearly and comfortably without the need for corrective lenses.With normal vision, you can enjoy everyday activities with ease and confidence."
//                     )
//                   }
//                 />
//                 <h2 className="text-white text-3xl relative -top-36  text-center font-serif">
//                   Diabetic Retinopathy
//                 </h2>
//               </div>
//               <div className="p-4 md:w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 ...">
//                 <img // eslint-disable-line
//                   className="lg:h-56 md:h-36 w-full object-cover object-center"
//                   src="/RefractiveError.png"
//                   alt="blog"
//                   onMouseEnter={() =>
//                     handleMouseOver(
//                       images[3].src,
//                       images[3].heading,
//                       images[3].text
//                     )
//                   }
//                   onMouseLeave={() =>
//                     handleMouseOver(
//                       "/NormalVision.webp",
//                       "This is Normal Eye Vision",
//                       "Normal eye vision allows you to see the world clearly and comfortably without the need for corrective lenses.With normal vision, you can enjoy everyday activities with ease and confidence."
//                     )
//                   }
//                 />
//                 <h2 className="text-white text-3xl relative -top-36 text-center font-serif">
//                   Refractive Error
//                 </h2>
//               </div>
//               <div className="p-4 md:w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200 ... ">
//                 <img // eslint-disable-line
//                   className="lg:h-56 md:h-36 w-full object-cover object-center "
//                   src="/MacularDegeneration.png"
//                   alt="blog"
//                   onMouseEnter={() =>
//                     handleMouseOver(
//                       images[4].src,
//                       images[4].heading,
//                       images[4].text
//                     )
//                   }
//                   onMouseLeave={() =>
//                     handleMouseOver(
//                       "/NormalVision.webp",
//                       "This is Normal Eye Vision",
//                       "Normal eye vision allows you to see the world clearly and comfortably without the need for corrective lenses.With normal vision, you can enjoy everyday activities with ease and confidence."
//                     )
//                   }
//                 />
//                 <h2 className="text-white text-3xl relative -top-40  text-center font-serif">
//                   Age-Related Macular Degeneration
//                 </h2>
//               </div>
//             </div>
//           </div>
//         </section>
//       </Row>
//       <Row className="w-full flex items-center justify-center">
//         <Col
//           xs={12}
//           md={12}
//           xl={12}
//           className="text-center w-10/12 relative -top-32"
//         >
//           <h1 className="text-bold text-black text-4xl my-4 font-bold">
//             {heading}
//           </h1>
//           <p className="font-style my-4 text-black">{text}</p>
//         </Col>
//       </Row>
//     </section>
//   );
// };

// export default ContentC;
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ContentC = () => {
  const [backgroundImage, setBackgroundImage] = useState("/NormalVision.webp");
  const [heading, setHeading] = useState("This is Normal Eye Vision");
  const [text, setText] = useState(
    "Normal eye vision allows you to see the world clearly and comfortably without the need for corrective lenses.With normal vision, you can enjoy everyday activities with ease and confidence."
  );
  const [isMobile, setIsMobile] = useState(false);

  const images = [
    {
      src: "/Glaucoma.png",
      heading: "Glaucoma",
      text: "Glaucoma is a serious eye condition that can lead to vision loss if not detected early. It occurs when increased pressure in the eye damages the optic nerve. ",
    },
    {
      src: "/Cataracts.png",
      heading: "Cataracts",
      text: "Cataracts are a common eye condition where the clear lens of the eye becomes cloudy, leading to blurred or dimmed vision. Imagine looking through a foggy window.",
    },
    {
      src: "/DiabeticRetinopathy.png",
      heading: "Diabetic Retinopathy",
      text: "Diabetic retinopathy is a serious eye condition caused by diabetes, leading to damage in the blood vessels of the retina. If left untreated, it can result in vision loss.",
    },
    {
      src: "/RefractiveError.png",
      heading: "Refractive Error",
      text: "Refractive errors are common vision problems that occur when the shape of your eye prevents light from focusing correctly on the retina. This can result in blurred vision for objects near, far, or both. ",
    },
    {
      src: "/MacularDegeneration.png",
      heading: "Macular Degeneration",
      text: "Macular Degeneration is a leading cause of vision loss, affecting the central part of the retina known as the macula. This condition can make it difficult to see fine details, read, or recognize faces.",
    },
  ];

  const handleMouseOver = (bgImage, heading, text) => {
    setBackgroundImage(bgImage);
    setHeading(heading);
    setText(text);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1100);
    };

    handleResize(); // Check initial size
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <section
        className="content__section__img mb-16"
        style={{
          display: isMobile ? "none" : "block",
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <Row className="w-full my-36 relative -top-48">
          <section className="text-gray-600 body-font">
            <div className="px-5 py-24 mx-auto">
              <div className="flex flex-wrap -m-4">
                {images.map((image, index) => (
                  <div
                    key={index}
                    className="p-4 md:w-1/5 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-200"
                  >
                    <img //eslint-disable-line
                      className="lg:h-56 md:h-36 w-full object-cover object-center"
                      src={image.src}
                      alt="blog"
                      onMouseEnter={() =>
                        handleMouseOver(image.src, image.heading, image.text)
                      }
                      onMouseLeave={() =>
                        handleMouseOver(
                          "/NormalVision.webp",
                          "This is Normal Eye Vision",
                          "Normal eye vision allows you to see the world clearly and comfortably without the need for corrective lenses.With normal vision, you can enjoy everyday activities with ease and confidence."
                        )
                      }
                    />
                    <h2 className="text-white text-3xl relative -top-36 text-center font-serif">
                      {image.heading}
                    </h2>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </Row>
        <Row className="w-full flex items-center justify-center">
          <Col
            xs={12}
            md={12}
            xl={12}
            className="text-center w-10/12 relative -top-32"
          >
            <h1 className="text-bold text-black text-4xl my-4 font-bold">
              {heading}
            </h1>
            <p className="font-style my-4 text-black">{text}</p>
          </Col>
        </Row>
      </section>
      {isMobile && (
        <div className="px-5 py-24 mx-auto">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <img //eslint-disable-line
                  className="h-96 w-full object-cover object-center"
                  src={image.src}
                  alt="blog"
                />
                <h2 className="text-black text-3xl text-center font-serif">
                  {image.heading}
                </h2>
              </div>
            ))}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default ContentC;
