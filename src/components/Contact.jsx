import React from "react";
import { FaEye } from "react-icons/fa";
import { FaDownload } from "react-icons/fa";
import resume from "../assets/Yogesh_Kumar_Resume.pdf"
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  // const url = "Yogesh_Kumar_Resume.pdf";

  const downloadCV = () => {
    // console.log("Clicked")
    toast.success("Download initiated", {
      position: toast.POSITION.TOP_RIGHT,
    });
    // toast("hello file has been downloaded!")
  }

  return (
    <div
      name="contact"
      className="bg-gradient-to-b from-gray-800 to-black h-screen w-full"
    >
      <div className=" max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full ">
        <div>
          <div className="py-10 flex flex-col justify-center ">
           <div>
           <h2 className="text-3xl text-white font-bold">
              Like my profile, then do check my Resume!
            </h2>
           </div>
           <div className="flex justify-center gap-10">
           <a href={resume} target="#">
              <button className="font-bold group mt-7 flex gap-3 justify-center items-center text-white cursor-pointer px-10 py-2 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600  hover:opacity-80 duration-200">
                View Resume
                <FaEye></FaEye>
              </button>
            </a>
            <a href={resume} download="Yogesh_Kumar_Resume">
              <button onClick={downloadCV} className="font-bold group mt-7 flex gap-3 justify-center items-center text-white cursor-pointer px-6 py-2 rounded-md bg-gradient-to-r from-blue-600 to-cyan-600  hover:opacity-80 duration-200">
                Download Resume
                <FaDownload></FaDownload>
              </button>
           <ToastContainer theme="dark" autoClose={500} />
            </a>
           </div>
          </div>

          <p className="text-white  text-4xl inline font-bold border-b-4 border-gray-500">
            Contact
          </p>
          <p className="text-white py-6">
            Submit the form to get in touch with me!
          </p>
        </div>
        <div className="flex  justify-center items-center">
          <form
            action="https://getform.io/f/c324ae42-4314-47ba-b071-a189718e5b99"
            method="POST"
            className="flex flex-col w-full mx-8 sm:mx-20 mt-10  md:w-1/2"
          >
            <input
              name="name"
              className="p-2   bg-gray-600 rounded-md text-white focus:outline-none focus:border-b-2 border-blue-600"
              type="text"
              placeholder="Enter Your Name"
            />
            <input
              name="email"
              className="p-2  bg-gray-600 my-4 rounded-md text-white focus:outline-none focus:border-b-2 border-blue-600"
              type="text"
              placeholder="Enter Your Email"
            />
            <textarea
              placeholder="Enter Message"
              className="p-2  bg-gray-600 rounded-md text-white focus:outline-none focus:border-b-2 border-blue-600"
              name="message"
              rows="10"
            ></textarea>
            <button className="mt-4 text-white cursor-pointer px-6 py-2 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600  hover:scale-105 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="bg-black pt-10 pb-10 w-full flex justify-center ">
        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/yogesh-kumar-0ba549231"
          className="m-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5  text-white mx-auto hover:scale-110 duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
          </svg>
        </a>
        <a
          href="https://github.com/Yogeshkumar-24"
          target={"_blank"}
          className="m-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white mx-auto hover:scale-110 duration-200"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Contact;
