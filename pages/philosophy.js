import React from "react";
import Footer from "../components/Footer";

const philosophy = () => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <h1 className="text-4xl font-serif font-normal text-center mt-10">
        Our Philosophy
      </h1>
      <div className="container px-5 py-24 mx-auto">
        <div className="-my-8 divide-y-2 divide-gray-100">
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-96 md:mb-0 mb-6 flex-shrink-0">
              <span className="text-3xl font-serif title-font text-black">
                Putting People First
              </span>
            </div>
            <div className="md:flex-grow">
              <div className="mb-4">
                <h2 className="text-2xl font-medium text-black title-font font-sans mb-2">
                  Personalized Care
                </h2>
                <p className="leading-relaxed font-style">
                  We recognize that every individual has unique eye care needs.
                  Our approach is tailored to meet those specific needs through
                  comprehensive eye exams, advanced diagnostic tools, and
                  customized treatment plans. Whether you are coming in for a
                  routine check-up, dealing with a chronic condition, or seeking
                  corrective procedures, our team is dedicated to ensuring you
                  receive the best possible care.
                </p>
              </div>
              {/* <div className="mb-4">
                <h2 className="text-2xl font-medium text-black title-font font-sans mb-2">
                  Compassionate Service
                </h2>
                <p className="leading-relaxed font-style">
                  From the moment you walk through our doors, you will
                  experience a welcoming and compassionate environment. Our
                  friendly and knowledgeable staff are here to assist you with
                  any questions or concerns, making your visit as comfortable
                  and stress-free as possible. We believe that building strong
                  patient relationships is key to providing effective eye care.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-medium text-black title-font font-sans mb-2">
                  Expertise and Innovation
                </h2>
                <p className="leading-relaxed font-style">
                  Our commitment to putting people first extends to our
                  continuous pursuit of excellence. We invest in the latest
                  technologies and stay updated with the most recent
                  advancements in eye care. Our highly trained and experienced
                  professionals are dedicated to maintaining the highest levels
                  of clinical competence.
                </p>
              </div> */}
              <div className="mb-4">
                <h2 className="text-2xl font-medium text-black title-font font-sans mb-2">
                  Education and Empowerment
                </h2>
                <p className="leading-relaxed font-style">
                  We believe in empowering our patients through education.
                  Understanding your eye health is crucial to making informed
                  decisions about your care. We take the time to explain your
                  diagnosis, treatment options, and preventive measures in a
                  clear and accessible manner, ensuring you feel confident in
                  managing your eye health.
                </p>
              </div>
              <div className="mb-4" id="customer-service">
                <h2 className="text-2xl font-medium text-black title-font font-sans mb-2">
                  Community and Trust
                </h2>
                <p className="leading-relaxed font-style">
                  Our practice is built on trust and integrity. We are proud to
                  serve our community, offering eye care that not only meets but
                  exceeds expectations. Your trust in us is not taken lightly,
                  and we strive to earn it every day through our dedication to
                  your well-being.
                </p>
              </div>
            </div>
          </div>
          <div className="py-8 flex flex-wrap md:flex-nowrap">
            <div className="md:w-96 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="text-3xl font-serif title-font text-black">
                Our Customer Service
              </span>
            </div>
            <div className="md:flex-grow">
              <div className="mb-4">
                <h2 className="text-2xl font-medium text-black title-font font-sans mb-2">
                  Accessible and Friendly Support
                </h2>
                <p className="leading-relaxed font-style">
                  Our customer service team is here to assist you with all your
                  eye care needs. Whether you need to schedule an appointment,
                  have questions about your treatment, or require assistance
                  with insurance and billing, our friendly and knowledgeable
                  staff are ready to help. We pride ourselves on being
                  approachable and responsive, ensuring that your concerns are
                  addressed promptly and effectively.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-medium text-black title-font font-sans mb-2">
                  Convenient Scheduling
                </h2>
                <p className="leading-relaxed font-style">
                  We understand that your time is valuable. That’s why we offer
                  flexible scheduling options, including online appointment
                  booking and extended hours, to accommodate your busy
                  lifestyle. Our team works diligently to minimize wait times
                  and ensure that your visits are as convenient and efficient as
                  possible.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-medium text-black title-font font-sans mb-2">
                  Patient Satisfaction
                </h2>
                <p className="leading-relaxed font-style">
                  Your satisfaction is our top priority. We continuously seek
                  feedback from our patients to improve our services and ensure
                  we are meeting your expectations. Our commitment to excellence
                  in customer service is reflected in the positive experiences
                  of our patients, and we are dedicated to maintaining the
                  highest standards in all aspects of our practice.
                </p>
              </div>
            </div>
          </div>
          <div
            className="py-8 flex flex-wrap md:flex-nowrap"
            id="modern-technology"
          >
            <div className="md:w-96 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
              <span className="text-3xl font-serif title-font text-black">
                Modern Technology
              </span>
            </div>
            <div className="md:flex-grow">
              <div className="mb-4">
                <h2 className="text-2xl font-medium text-black title-font font-sans mb-2">
                  Advanced Diagnostic Tools
                </h2>
                <p className="leading-relaxed font-style">
                  Accurate diagnosis is the first step to effective treatment.
                  Our clinic is equipped with the latest diagnostic tools that
                  allow us to detect eye conditions with unparalleled precision.
                  From high-resolution digital imaging systems to cutting-edge
                  optical coherence tomography (OCT), our advanced diagnostic
                  technology helps us identify issues early and develop tailored
                  treatment plans.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-medium text-black title-font font-sans mb-2">
                  Innovative Treatment Options
                </h2>
                <p className="leading-relaxed font-style">
                  We utilize the most advanced treatment technologies to provide
                  effective and minimally invasive solutions for a wide range of
                  eye conditions. Our offerings include laser treatments for
                  vision correction, advanced cataract surgery with premium
                  intraocular lenses (IOLs), and modern therapies for glaucoma
                  and macular degeneration. These innovations allow us to
                  deliver better results with faster recovery times.
                </p>
              </div>
              <div className="mb-4">
                <h2 className="text-2xl font-medium text-black title-font font-sans mb-2">
                  Commitment to Safety
                </h2>
                <p className="leading-relaxed font-style">
                  Your safety is our top priority. The advanced technologies we
                  use are chosen not only for their effectiveness but also for
                  their safety. Our equipment undergoes rigorous testing and
                  regular maintenance to meet the highest standards of safety
                  and performance. This dedication to safety ensures that you
                  receive the best possible care in a secure environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default philosophy;
