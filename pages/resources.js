import React from "react";
import ContentC from "../components/ContentC";
import Footer from "../components/Footer";
import Expectations from "../components/Expectations";
import Link from "next/link";

const Resources = () => {
  return (
    <section className="text-gray-600 body-font">
      <h1 className="title-font font-medium text-3xl text-black font-serif mt-10 text-center">
        Free Resources! Must Know The Differenece.
      </h1>
      <ContentC />

      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif">
            Glaucoma
          </h1>
          <p className="mb-8 leading-relaxed font-style">
            Glaucoma is a progressive eye disease that damages the optic nerve,
            often caused by increased intraocular pressure, and is a leading
            cause of irreversible blindness. It typically develops slowly and
            without noticeable symptoms in the early stages, making regular eye
            exams crucial for early detection and treatment. Advanced diagnostic
            tools, such as Optical Coherence Tomography (OCT) and Visual Field
            Testing, are used to detect glaucoma at its earliest stages.
            Treatment options include medication, laser therapy, and surgical
            procedures, all aimed at lowering intraocular pressure and
            preserving vision. Early intervention and consistent management are
            essential to maintaining eye health and preventing vision loss.
          </p>
          <Link href={"https://en.wikipedia.org/wiki/Glaucoma"} target="_blank">
            <button className="inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 p-2 focus:outline-none px-4 rounded mt-4 md:mt-0 font-thin text-lg hover:bg-transparent hover:text-blue-900">
              Read More
            </button>
          </Link>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img //eslint-disable-line
            className="object-cover object-center rounded"
            alt="hero"
            src="/Glaucoma.png"
          />
        </div>
      </div>

      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img //eslint-disable-line
            className="object-cover object-center rounded"
            alt="hero"
            src="/Cataracts.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif">
            Cataracts
          </h1>
          <p className="mb-8 leading-relaxed font-style">
            Cataracts, a prevalent age-related condition, occur when the eyes
            natural lens becomes clouded, leading to blurred vision and visual
            impairment. Symptoms include blurry vision, increased sensitivity to
            glare, and difficulty seeing in dim light. Diagnosis involves a
            comprehensive eye exam, and treatment typically entails surgical
            removal of the cloudy lens and replacement with an artificial one.
            Advanced surgical techniques such as phacoemulsification and
            laser-assisted surgery offer precise and effective solutions. If you
            are experiencing symptoms of cataracts, it is essential to seek
            timely evaluation and treatment to regain clear vision and improve
            your quality of life.
          </p>
          <Link href={"https://en.wikipedia.org/wiki/Cataract"} target="_blank">
            <button className="inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 p-2 focus:outline-none px-4 rounded mt-4 md:mt-0 font-thin text-lg hover:bg-transparent hover:text-blue-900">
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif">
            Diabetic Retinopathy
          </h1>
          <p className="mb-8 leading-relaxed font-style">
            Diabetic retinopathy is a serious complication of diabetes that
            affects the eyes, leading to damage to the blood vessels in the
            retina. Over time, high blood sugar levels can weaken and damage
            these blood vessels, causing them to leak fluid or bleed, ultimately
            leading to vision loss if left untreated. Symptoms may not be
            noticeable in the early stages, but as the condition progresses,
            individuals may experience blurred or distorted vision, floaters, or
            even complete vision loss. Regular eye exams are crucial for early
            detection and management of diabetic retinopathy, and controlling
            blood sugar levels through proper diabetes management can help
            reduce the risk of vision loss. If you have diabetes, it is
            essential to prioritize your eye health and schedule regular eye
            examinations to monitor for diabetic retinopathy and other related
            eye conditions.
          </p>
          <Link
            href={"https://en.wikipedia.org/wiki/Diabetic_retinopathy"}
            target="_blank"
          >
            <button className="inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 p-2 focus:outline-none px-4 rounded mt-4 md:mt-0 font-thin text-lg hover:bg-transparent hover:text-blue-900">
              Read More
            </button>
          </Link>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img //eslint-disable-line
            className="object-cover object-center rounded"
            alt="hero"
            src="/DiabeticRetinopathy.png"
          />
        </div>
      </div>

      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img //eslint-disable-line
            className="object-cover object-center rounded"
            alt="hero"
            src="/RefractiveError.png"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif">
            Refractive Error
          </h1>
          <p className="mb-8 leading-relaxed font-style">
            Refractive error refers to an imperfection in the eyes ability to
            properly focus light, leading to blurred vision. Common types
            include nearsightedness (myopia), farsightedness (hyperopia), and
            astigmatism. Nearsighted individuals have difficulty seeing objects
            at a distance, while farsighted individuals struggle with close-up
            vision. Astigmatism results in blurry vision at all distances due to
            irregular curvature of the cornea or lens. Symptoms may include
            headaches, eyestrain, and difficulty seeing clearly, particularly at
            night or when performing tasks requiring sharp vision. Corrective
            measures such as eyeglasses, contact lenses, or refractive surgery
            can effectively address refractive errors and improve visual
            clarity. Regular eye exams are essential for accurate diagnosis and
            appropriate management of refractive errors to ensure optimal vision
            and eye health.
          </p>
          <Link
            href={"https://en.wikipedia.org/wiki/Refractive_error"}
            target="_blank"
          >
            <button className="inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 p-2 focus:outline-none px-4 rounded mt-4 md:mt-0 font-thin text-lg hover:bg-transparent hover:text-blue-900">
              Read More
            </button>
          </Link>
        </div>
      </div>

      <div className="container mx-auto flex px-5 py-16 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-8 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 font-serif">
            Age-Related Macular Degeneration
          </h1>
          <p className="mb-8 leading-relaxed font-style">
            Age-related macular degeneration (AMD) is a progressive eye
            condition that affects the macula, the central part of the retina
            responsible for sharp, central vision. As its name suggests, AMD
            primarily impacts older adults and is a leading cause of vision loss
            in individuals over 50. There are two main types of AMD: dry AMD,
            characterized by the gradual breakdown of light-sensitive cells in
            the macula, and wet AMD, marked by the growth of abnormal blood
            vessels beneath the macula, which can leak blood and fluid, leading
            to rapid and severe vision loss if left untreated. Symptoms may
            include blurred or distorted central vision, difficulty recognizing
            faces, and seeing straight lines as wavy or crooked. While there is
            currently no cure for AMD, early detection and timely intervention
            can help slow its progression and preserve remaining vision. Regular
            eye exams are essential for monitoring changes in vision and
            implementing appropriate treatment strategies to maintain eye health
            and quality of life.
          </p>
          <Link
            href={"https://en.wikipedia.org/wiki/Macular_degeneration"}
            target="_blank"
          >
            <button className="inline-flex items-center bg-blue-900 text-white border-2 border-blue-900 p-2 focus:outline-none px-4 rounded mt-4 md:mt-0 font-thin text-lg hover:bg-transparent hover:text-blue-900">
              Read More
            </button>
          </Link>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img //eslint-disable-line
            className="object-cover object-center rounded"
            alt="hero"
            src="/MacularDegeneration.png"
          />
        </div>
      </div>
      <Expectations />
      <Footer />
    </section>
  );
};

export default Resources;
