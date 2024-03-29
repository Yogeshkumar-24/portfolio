import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-scroll";
import computerGif from "../assets/comp.gif"


const Home = () => {
  return (
    <div name="home">
      <div className=" bg-gradient-to-b h-screen from-black to-gray-800">
        <div className="flex p-20 pt-0 flex-col h-full mx-auto max-w-full items-center justify-center ">

          {/* <img src={computerGif} alt="" /> */}
          <p className="text-white text-lg">
            As a current graduate in Information Technology with a keen interest
            in full stack development, I am excited to apply my skill to and
            knowledge to create user friendly and dynamic websites. I am eager
            to learn with a fast paced environment that challenges me to grow and
            develop my skills. I do solve competitive programs in my free time,
            which helps to develop programming skills and think of an efficient
            solution.Overall, I am committed to delivering high-quality work and
            contributing to the success of any project I am a part of.
          </p>
          <Link to={'projects'} smooth duration={500}>
            {" "}
            <button className="group mt-7 flex gap-3 font-bold  justify-center items-center text-white cursor-pointer px-6 py-2 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600  hover:opacity-80 duration-200">
              <Link to={"projects"} smooth duration={500}>
               <p className="tracking-wider"> Projects{" "}</p>
              </Link>
              <span className="group-hover:rotate-90 duration-200">
                <FaArrowRight />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
