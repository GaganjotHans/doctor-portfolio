import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const products = [
  {
    id: 1,
    title: "Comfort Dry Eye Spray",
    description:
      "An innovative and simple to use bottle to relieve dryness and irritation of eyes and eyelids.",
    imageUrl:
      "https://optase.com/wp-content/uploads/2022/03/OPTASE-Digital-Dry-Eye-Spray-Box-Bottle-scaled.jpg",
    buttonText: "Buy Now",
  },
  {
    id: 2,
    title: "Dry Eye Intense Drops",
    description:
      "Eye Lubricant provides relief and protection from moderate to severe Dry Eye symptoms.",
    imageUrl:
      "https://optase.com/wp-content/uploads/2022/03/Optase-Intense-Dry-Eye-Drops.png",
    buttonText: "Buy Now",
  },
  {
    id: 3,
    title: "Single Dose Dry Eye Intense Drops",
    description:
      "Eye Lubricant provides relief and protection from moderate to severe Dry Eye symptoms.",
    imageUrl:
      "https://optase.com/wp-content/uploads/2022/03/OPTASE-Protect-USA-box-and-bottle-2021.png",
    buttonText: "Buy Now",
  },
  {
    id: 3,
    title: "Single Dose Dry Eye Intense Drops",
    description:
      "Eye Lubricant provides relief and protection from moderate to severe Dry Eye symptoms.",
    imageUrl:
      "https://optase.com/wp-content/uploads/2022/04/optase-tea-tree-oil-gel.png",
    buttonText: "Buy Now",
  },
  {
    id: 3,
    title: "Single Dose Dry Eye Intense Drops",
    description:
      "Eye Lubricant provides relief and protection from moderate to severe Dry Eye symptoms.",
    imageUrl:
      "https://optase.com/wp-content/uploads/2022/04/Optase-Moist-Heat-Mask-1.png",
    buttonText: "Buy Now",
  },
  // Add more product objects up to 10
];

const ProductSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="my-16">
      <h1 className="container mx-auto title-font font-medium text-4xl py-5 text-black font-serif mt-10 text-start border-b-2 border-y-blue-900 pl-4 lg:pl-0">
        Our Bestsellers
      </h1>
      <div className="container product-slider my-16">
        <Slider {...settings}>
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.imageUrl} alt={product.title} />
              <h3>{product.title}</h3>
              <p>{product.description}</p>
              <button>{product.buttonText}</button>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default ProductSlider;
