// import React, { useState } from "react";
// import ReCAPTCHA from "react-google-recaptcha";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const AppointmentForm = () => {
//   const formInitialDetails = {
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     message: "",
//     patientType: "new",
//     location: "location1",
//   };

//   const [captchaVal, setCaptchaVal] = useState("");
//   const [formDetails, setFormDetails] = useState(formInitialDetails);
//   const [buttonText, setButtonText] = useState("SUBMIT");
//   const [status, setStatus] = useState({});

//   const onFormUpdate = (category, value) => {
//     setFormDetails({
//       ...formDetails,
//       [category]: value,
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setButtonText("SUBMITTING...");

//     try {
//       let response = await fetch(
//         `${process.env.NEXT_PUBLIC_HOST}/api/bookAppointment`,
//         {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json;charset=utf-8",
//           },
//           body: JSON.stringify(formDetails),
//         }
//       );

//       let result = await response.json();

//       setButtonText("SUBMIT");
//       setFormDetails(formInitialDetails);

//       if (result.status === "Message Sent") {
//         setStatus({ success: true, message: "Message sent Successfully" });
//         toast.success("Message sent Successfully");
//       } else {
//         setStatus({
//           success: false,
//           message: "Something went wrong, Please try again later",
//         });
//       }
//     } catch (error) {
//       console.error("Error:", error.message);
//       setButtonText("SUBMIT");
//       setStatus({
//         success: false,
//         message: "Something went wrong, Please try again later",
//       });
//     }
//   };

//   return (
//     <section className="text-gray-600 body-font relative">
//       <div className="container px-4 lg:px-0 py-16 mx-auto">
//         <div className="lg:w-1/2 w-full bg-gray-50 p-6 md:p-12 flex flex-col  md:mt-0 border-2 font-style">
//           <div className="relative mb-4">
//             <label
//               htmlFor="firstName"
//               className="leading-7 text-md text-gray-900 font-sans"
//             >
//               First Name
//               <span className="ml-1 text-blue-900 text-xl">*</span>
//             </label>
//             <input
//               type="text"
//               id="firstName"
//               name="firstName"
//               className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               spellCheck="false"
//               data-ms-editor="true"
//               value={formDetails.firstName}
//               onChange={(e) => onFormUpdate("firstName", e.target.value)}
//               required
//             />
//           </div>
//           <div className="relative mb-4">
//             <label
//               htmlFor="lastName"
//               className="leading-7 text-md text-gray-900 font-sans"
//             >
//               Last Name
//               <span className="ml-1 text-blue-900 text-xl">*</span>
//             </label>
//             <input
//               type="text"
//               id="lastName"
//               name="lastName"
//               className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               spellCheck="false"
//               data-ms-editor="true"
//               value={formDetails.lastName}
//               onChange={(e) => onFormUpdate("lastName", e.target.value)}
//               required
//             />
//           </div>
//           <div className="relative mb-4">
//             <label
//               htmlFor="email"
//               className="leading-7 text-md text-gray-900 font-sans"
//             >
//               Email
//               <span className="ml-1 text-blue-900 text-xl">*</span>
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               value={formDetails.email}
//               onChange={(e) => onFormUpdate("email", e.target.value)}
//               required
//             />
//           </div>
//           <div className="relative mb-4">
//             <label
//               htmlFor="phone"
//               className="leading-7 text-md text-gray-900 font-sans"
//             >
//               Phone
//               <span className="ml-1 text-blue-900 text-xl">*</span>
//             </label>
//             <input
//               type="number"
//               id="phone"
//               name="phone"
//               className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               value={formDetails.phone}
//               onChange={(e) => onFormUpdate("phone", e.target.value)}
//               required
//             />
//           </div>
//           <div className="relative mb-4">
//             <label
//               htmlFor="location"
//               className="leading-7 text-md text-gray-900 font-sans"
//             >
//               Select Nearest Location
//               <span className="ml-1 text-blue-900 text-xl">*</span>
//             </label>
//             <select
//               id="location"
//               name="location"
//               className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               value={formDetails.location}
//               onChange={(e) => onFormUpdate("location", e.target.value)}
//             >
//               <option value=" Hakim Optical (222 Glendale Ave, St. Catharines, ON L2T 2K5)">
//                 Hakim Optical (222 Glendale Ave, St. Catharines, ON L2T 2K5)
//               </option>
//               <option value="location2">Location 2</option>
//               <option value="location3">Location 3</option>
//               <option value="location4">Location 4</option>
//               <option value="location5">Location 5</option>
//             </select>
//           </div>

//           <div className="relative mb-4">
//             <label className="leading-7 text-md text-gray-900 font-sans">
//               Patient Type
//               <span className="ml-1 text-blue-900 text-xl">*</span>
//             </label>
//             <div className="flex items-center mt-2">
//               <input
//                 type="radio"
//                 id="new-patient"
//                 name="patient-type"
//                 value="new"
//                 className="mr-2 "
//                 checked={formDetails.patientType === "new"}
//                 onChange={(e) => onFormUpdate("patientType", e.target.value)}
//               />
//               <label
//                 htmlFor="new-patient"
//                 className="text-md text-gray-900 font-sans mr-4"
//               >
//                 New Patient
//               </label>
//               <input
//                 type="radio"
//                 id="existing-patient"
//                 name="patient-type"
//                 value="existing"
//                 className="mr-2"
//                 checked={formDetails.patientType === "existing"}
//                 onChange={(e) => onFormUpdate("patientType", e.target.value)}
//               />
//               <label
//                 htmlFor="existing-patient"
//                 className="text-md text-gray-900 font-sans"
//               >
//                 Existing Patient
//               </label>
//             </div>
//           </div>
//           <div className="relative mb-4">
//             <label
//               htmlFor="message"
//               id="label-message"
//               className="leading-7 text-md text-gray-900 font-sans"
//             >
//               Ask a question or leave us a specific request
//             </label>
//             <textarea
//               id="message"
//               name="message"
//               rows="4"
//               className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//               value={formDetails.message}
//               onChange={(e) => onFormUpdate("message", e.target.value)}
//             ></textarea>
//           </div>
//           <ReCAPTCHA
//             className="my-2"
//             sitekey="6Lf0Q-YpAAAAANFtyYKB1KWbKv1lZLaecMU_-J_a"
//             onChange={(val) => setCaptchaVal(val)}
//           />
//           <button
//             disabled={!captchaVal}
//             type="submit"
//             onClick={handleSubmit}
//             className="inline-flex items-center mr-auto bg-blue-900 text-white border-2 border-blue-900 p-2 focus:outline-none  rounded mt-4 md:mt-0 font-thin text-lg hover:bg-transparent hover:text-blue-900"
//           >
//             {buttonText}
//           </button>
//           <p className="text-xs text-gray-500 mt-3">
//             We will be in touch with you soon.
//           </p>
//           <ToastContainer
//             position="top-center"
//             autoClose={2000}
//             hideProgressBar={false}
//             newestOnTop={false}
//             closeOnClick
//             rtl={false}
//             pauseOnFocusLoss
//             draggable
//             pauseOnHover
//             theme="dark"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AppointmentForm;
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppointmentForm = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
    patientType: "new",
    location: "location1",
  };

  const [captchaVal, setCaptchaVal] = useState("");
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("SUBMIT");
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("SUBMITTING...");

    try {
      let response = await fetch(
        `${process.env.NEXT_PUBLIC_HOST}/api/bookAppointment`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify(formDetails),
        }
      );

      let result = await response.json();

      setButtonText("SUBMIT");
      setFormDetails(formInitialDetails);

      if (result.status === "Message Sent") {
        setStatus({ success: true, message: "Message sent Successfully" });
        toast.success("Message sent Successfully");
      } else {
        setStatus({
          success: false,
          message: "Something went wrong, Please try again later",
        });
        toast.error("Something went wrong, Please try again later");
      }
    } catch (error) {
      console.error("Error:", error.message);
      setButtonText("SUBMIT");
      setStatus({
        success: false,
        message: "Something went wrong, Please try again later",
      });
      toast.error("Something went wrong, Please try again later");
    }
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-4 lg:px-0 py-16 mx-auto">
        <div className="lg:w-1/2 w-full bg-gray-50 p-6 md:p-12 flex flex-col  md:mt-0 border-2 font-style">
          <div className="relative mb-4">
            <label
              htmlFor="firstName"
              className="leading-7 text-md text-gray-900 font-sans"
            >
              First Name
              <span className="ml-1 text-blue-900 text-xl">*</span>
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              spellCheck="false"
              value={formDetails.firstName}
              onChange={(e) => onFormUpdate("firstName", e.target.value)}
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="lastName"
              className="leading-7 text-md text-gray-900 font-sans"
            >
              Last Name
              <span className="ml-1 text-blue-900 text-xl">*</span>
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              spellCheck="false"
              value={formDetails.lastName}
              onChange={(e) => onFormUpdate("lastName", e.target.value)}
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="leading-7 text-md text-gray-900 font-sans"
            >
              Email
              <span className="ml-1 text-blue-900 text-xl">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={formDetails.email}
              onChange={(e) => onFormUpdate("email", e.target.value)}
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="phone"
              className="leading-7 text-md text-gray-900 font-sans"
            >
              Phone
              <span className="ml-1 text-blue-900 text-xl">*</span>
            </label>
            <input
              type="number"
              id="phone"
              name="phone"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={formDetails.phone}
              onChange={(e) => onFormUpdate("phone", e.target.value)}
              required
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="location"
              className="leading-7 text-md text-gray-900 font-sans"
            >
              Select Nearest Location
              <span className="ml-1 text-blue-900 text-xl">*</span>
            </label>
            <select
              id="location"
              name="location"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={formDetails.location}
              onChange={(e) => onFormUpdate("location", e.target.value)}
            >
              <option value=" Hakim Optical (222 Glendale Ave, St. Catharines, ON L2T 2K5)">
                Hakim Optical (222 Glendale Ave, St. Catharines, ON L2T 2K5)
              </option>
              <option value="location2">Location 2</option>
              <option value="location3">Location 3</option>
              <option value="location4">Location 4</option>
              <option value="location5">Location 5</option>
            </select>
          </div>

          <div className="relative mb-4">
            <label className="leading-7 text-md text-gray-900 font-sans">
              Patient Type
              <span className="ml-1 text-blue-900 text-xl">*</span>
            </label>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                id="new-patient"
                name="patient-type"
                value="new"
                className="mr-2"
                checked={formDetails.patientType === "new"}
                onChange={(e) => onFormUpdate("patientType", e.target.value)}
              />
              <label
                htmlFor="new-patient"
                className="text-md text-gray-900 font-sans mr-4"
              >
                New Patient
              </label>
              <input
                type="radio"
                id="existing-patient"
                name="patient-type"
                value="existing"
                className="mr-2"
                checked={formDetails.patientType === "existing"}
                onChange={(e) => onFormUpdate("patientType", e.target.value)}
              />
              <label
                htmlFor="existing-patient"
                className="text-md text-gray-900 font-sans"
              >
                Existing Patient
              </label>
            </div>
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              id="label-message"
              className="leading-7 text-md text-gray-900 font-sans"
            >
              Ask a question or leave us a specific request
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-800 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              value={formDetails.message}
              onChange={(e) => onFormUpdate("message", e.target.value)}
            ></textarea>
          </div>
          <ReCAPTCHA
            className="my-2"
            sitekey="6Lf0Q-YpAAAAANFtyYKB1KWbKv1lZLaecMU_-J_a"
            onChange={(val) => setCaptchaVal(val)}
          />
          <button
            disabled={!captchaVal}
            type="submit"
            onClick={handleSubmit}
            className="inline-flex items-center mr-auto bg-blue-900 text-white border-2 border-blue-900 p-2 focus:outline-none hover:bg-transparent hover:text-blue-900 rounded mt-4 md:mt-0 font-thin text-lg"
          >
            {buttonText}
          </button>
          <p className="text-xs text-gray-500 mt-3">
            We will be in touch with you soon.
          </p>
          <ToastContainer
            position="top-center"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="dark"
          />
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
