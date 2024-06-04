import React from "react";
import AppointmentForm from "../components/AppointmentForm";
import Footer from "../components/Footer";
import Expectations from "../components/Expectations";

const Exam = () => {
  return (
    <section className="text-gray-600 body-font">
      <h1 className=" container mx-auto title-font font-medium text-3xl py-5 text-black font-serif mt-10 text-start border-b-2 border-y-gray-300 pl-4 md:pl-0">
        EYE EXAM
      </h1>

      <div className="container mx-auto flex px-4 lg:px-16 py-16 lg:flex-row flex-col  bg-gray-50">
        <div className="lg:flex-grow w-full lg:w-1/2 lg:pr-16 flex flex-col md:items-start text-left mb-8 md:mb-0 items-center">
          <p className="mb-8 leading-relaxed font-style">
            We are dedicated to providing exceptional eye care through
            comprehensive eye exams, advanced technology, and a patient-centered
            approach. Our experienced professionals use state-of-the-art
            diagnostic tools to ensure precise evaluations and effective
            treatments. Regular eye exams are essential for maintaining optimal
            vision and overall health, as they can detect early signs of eye
            conditions and systemic health issues. We prioritize your comfort
            and satisfaction, offering convenient online booking to make
            scheduling your eye exam quick and easy. Trust us for all your eye
            care needs and experience the highest standard of care for your
            vision. Book your eye exam online today!
          </p>
          <ul className="font-style py-5 list-disc list-inside lg:list-outside">
            <li className="my-2">
              <span className="text-black"> Visual Acuity Test: </span>Assessing
              how well you see at various distances.
            </li>
            <li className="my-2">
              <span className="text-black"> Refraction Assessment: </span>{" "}
              Determining the correct prescription for glasses or contact
              lenses.
            </li>
            <li className="my-2">
              <span className="text-black">Eye Health Evaluation: </span> Using
              advanced diagnostic tools to examine the internal and external
              structures of your eyes.
            </li>
            <li className="my-2">
              <span className="text-black">Glaucoma Test: </span> Measuring the
              pressure inside your eyes to check for glaucoma.
            </li>
            <li className="my-2">
              <span className="text-black"> Macular and Retinal Exam: </span>{" "}
              Screening for macular degeneration and other retinal conditions.
            </li>
          </ul>
          {/* <button className="inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 p-2 focus:outline-none px-4 rounded mt-4 md:mt-0 font-thin text-lg hover:bg-transparent hover:text-blue-900">
            Book Your Eye Test Now
          </button> */}
        </div>
        <div className="w-full lg:w-1/2">
          <img //eslint-disable-line
            className="object-cover object-center rounded"
            alt="hero"
            src="/EyeExamRoom.jpeg"
          />
        </div>
      </div>
      <h1
        className=" container mx-auto title-font font-medium text-3xl py-5 text-black font-serif mt-10 text-start border-b-2 border-y-gray-300 px-4 lg:px-0"
        id="book-appointment"
      >
        BOOK YOUR EYE EXAM BELOW
      </h1>
      <p className="container mx-auto my-5 font-style px-4 lg:px-0">
        To request your eye exam, please take a moment to complete the short
        form below with your personal details and your preferred location for
        the appointment. This information will help us ensure that we provide
        you with the best possible service. Once you have submitted the form,
        our team will review your request and reach out to you shortly to
        confirm and schedule your appointment. We are dedicated to making this
        process as convenient and efficient as possible, so you can receive the
        eye care you need without any hassle. Thank you for choosing us for your
        eye care needs. We look forward to assisting you.
      </p>

      <AppointmentForm />
      <Expectations />
      <Footer />
    </section>
  );
};

export default Exam;
