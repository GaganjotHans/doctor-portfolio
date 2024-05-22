import React, { useState, useEffect, useRef } from "react";
import {
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowLeft,
} from "react-icons/md";

const Slider = () => {
  const [active, setActive] = useState(0);
  const itemsRef = useRef([]);

  useEffect(() => {
    loadShow();
    const interval = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % itemsRef.current.length);
    }, 5000);

    return () => clearInterval(interval);
    //eslint-disable-next-line
  }, [active]);

  const loadShow = () => {
    itemsRef.current.forEach((item, index) => {
      if (index === active) {
        item.style.transform = `translateX(0)`;
        item.style.opacity = 1;
        item.style.zIndex = 1;
      } else {
        item.style.transform = `translateX(-100%)`;
        item.style.opacity = 0;
        item.style.zIndex = -1;
      }
    });
  };

  const handleNext = () => {
    setActive((prevActive) => (prevActive + 1) % itemsRef.current.length);
  };

  const handlePrev = () => {
    setActive(
      (prevActive) =>
        (prevActive - 1 + itemsRef.current.length) % itemsRef.current.length
    );
  };

  const slides = [
    {
      heading: "What does an eye doctor do?",
      text: "An eye doctor, also known as an optometrist or ophthalmologist, specializes in diagnosing and treating various eye conditions and vision problems. They conduct comprehensive eye exams to assess visual acuity, prescribe corrective lenses, diagnose eye diseases, and provide personalized treatment plans to maintain optimal eye health.",
    },
    {
      heading: "How often should I see an eye doctor?",
      text: "It is generally recommended to have a comprehensive eye exam every one to two years, depending on your age, risk factors, and overall eye health. Regular visits to an eye doctor help monitor any changes in vision, detect eye diseases early, and ensure that your corrective lenses, if needed, are up to date for clear and comfortable vision.",
    },
    {
      heading: "What are the signs that I need to see an eye doctor?",
      text: "Signs that indicate the need to see an eye doctor include experiencing frequent headaches, blurry vision, eye strain, difficulty seeing at night, sudden changes in vision, eye pain or discomfort, and seeing flashes of light or floating spots. If you notice any of these symptoms, it's essential to schedule an appointment with an eye doctor for a comprehensive eye exam.",
    },
    {
      heading:
        "What's the difference between an optometrist and an ophthalmologist?",
      text: "Optometrists and ophthalmologists are both eye care professionals, but they have different levels of training and scope of practice. Optometrists primarily provide routine eye care services, such as prescribing glasses and contact lenses, detecting and managing common eye conditions, and performing eye exams. On the other hand, ophthalmologists are medical doctors who specialize in diagnosing and treating eye diseases, performing eye surgeries, and managing complex eye conditions. They can provide a broader range of medical and surgical eye care services.",
    },
    {
      heading: "Can an eye doctor prescribe glasses?",
      text: "Yes, eye doctors, including optometrists and ophthalmologists, can prescribe glasses or contact lenses to correct refractive errors such as nearsightedness, farsightedness, and astigmatism. During a comprehensive eye exam, your eye doctor will determine your prescription based on various tests, including visual acuity, refraction, and assessment of eye health.",
    },
    {
      heading: "Do I need a referral to see an eye doctor?",
      text: "In many cases, you do not need a referral to see an eye doctor, whether it's an optometrist or an ophthalmologist. You can schedule an appointment directly with an eye care provider for routine eye exams, vision screenings, or evaluation of specific eye concerns. However, some insurance plans or specialized eye care services may require a referral from your primary care physician or another healthcare provider.",
    },
    {
      heading: "What happens during an eye exam?",
      text: "During a comprehensive eye exam, your eye doctor will perform various tests to evaluate your vision, eye health, and overall eye function. These tests may include assessing visual acuity, measuring intraocular pressure, examining the external and internal structures of the eye, testing eye coordination and focusing ability, and assessing peripheral vision. Based on the results of these tests, your eye doctor will discuss any findings, recommend appropriate treatments or corrective measures, and address any questions or concerns you may have about your eye health.",
    },
    {
      heading: "How much does an eye exam cost?",
      text: "The cost of an eye exam can vary depending on factors such as the location, the type of eye care provider, the complexity of the exam, and whether you have insurance coverage. On average, a comprehensive eye exam may range from $50 to $250 without insurance, but this cost can be significantly lower or higher depending on individual circumstances. It's essential to check with your eye care provider and your insurance plan to understand the specific costs associated with your eye exam and any available coverage or discounts.",
    },
    {
      heading: "Can an eye doctor detect other health issues?",
      text: "Yes, during a comprehensive eye exam, an eye doctor can detect various systemic health conditions and diseases that may not directly relate to the eyes. The eyes can provide valuable insights into your overall health, as certain signs and symptoms observed during an eye exam may indicate underlying health issues such as diabetes, hypertension, autoimmune diseases, and neurological disorders. Early detection of these health problems through routine eye exams can prompt timely intervention and management, potentially preventing more severe complications.",
    },
    {
      heading: "Are there specialized eye doctors for children?",
      text: "Yes, there are specialized eye doctors known as pediatric optometrists or pediatric ophthalmologists who focus on providing eye care for infants, children, and adolescents. These specialists have expertise in assessing and managing various pediatric eye conditions and vision problems, such as amblyopia (lazy eye), strabismus (crossed eyes), refractive errors, and eye alignment issues. Pediatric eye doctors use specialized techniques and equipment to examine children's eyes and ensure optimal visual development and eye health from infancy through adolescence. If you have concerns about your child's vision or eye health, consulting a pediatric eye doctor is recommended for specialized care tailored to their unique needs.",
    },
  ];

  return (
    <section className="slider-section my-12" id="faq">
      <h1 className="text-4xl font-serif text-center my-5">
        Frequently Asked Questions
      </h1>
      <p className="font-style text-center px-16">
        Dive into clarity! Learn all about the world of eye care with our
        expertly curated answers to your burning questions. From understanding
        the role of eye doctors to demystifying the eye exam process, we have
        got you covered. Explore now and see your vision questions vanish like
        magic!
      </p>
      <div className="slider my-10">
        <button className="btn-arrow" id="prev" onClick={handlePrev}>
          <MdOutlineKeyboardArrowLeft className="text-2xl" />
        </button>
        <div className="items h-72 my-20 mx-3">
          {slides.map((slide, index) => (
            <div
              key={index}
              ref={(el) => (itemsRef.current[index] = el)}
              className={`item ${index === active ? "active" : ""}`}
            >
              <h2 className="text-3xl font-serif my-5">{slide.heading}</h2>
              <p className="font-style w-10/12 mx-auto">{slide.text}</p>
            </div>
          ))}
        </div>
        <button className="btn-arrow" id="next" onClick={handleNext}>
          <MdOutlineKeyboardArrowRight className="text-2xl" />
        </button>
      </div>
    </section>
  );
};

export default Slider;
