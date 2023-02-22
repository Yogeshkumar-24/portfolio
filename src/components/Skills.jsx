import React from 'react'
import cssim from "../assets/css.png";
import html from "../assets/html.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import reactImg from "../assets/react.png";
import tailwind from "../assets/tailwind.png";

const Skills = () => {

    const images = [
      {
        id: 4,
        src: reactImg,
        title:"REACT",
        style:"shadow-blue-300"
    },
    {
        id: 5,
        src: node,
        title:"NODE JS",
        style:"shadow-green-500"
    },
    {
        id: 6,
        src: tailwind,
        title:"TAILWIND",
        style:"shadow-blue-700"
    },
        {
            id: 1,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id: 2,
            src: cssim,
            title: 'CSS',
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: javascript,
            title: "JAVASCRIPT",
            style:"shadow-yellow-500"
        },
      
    ]

  return (
    <div name='skills' className="pt-20 bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-screen">
    <div className=" max-w-screen-lg p-4 mx-auto  flex flex-col justify-center w-full h-full  ">
      <div className="pb-8">
        <p className=" text-4xl font-bold inline border-b-4 border-gray-500">
          Skills
        </p>
        <p className="py-6">Check out some of my work here!</p>
      </div>

      <div  className=" grid grid-cols-2 sm:grid-cols-3  md:grid-cols-3 text-center gap-8 px-12  sm:px-0 ">
      {images.map(({src,id,title,style}) => (
            <div key={id} className={`shadow-md ${style}  rounded-lg`}>
              <img src={src} className="pt-3 hover:scale-105 w-20 mx-auto duration-200" alt="" />
              {/* <div className="flex justify-between px-4">
                <button className="w-1/2 py-4 hover:scale-105 duration-200 font-semibold">Demo</button>
                <button className="w-1/2 py-4 hover:scale-105 duration-200 font-semibold">Code</button>
              </div> */}
              <p className='text-md pt-2 font-medium'>{title}</p>
            </div>
      ))}
      </div>
    
    </div>
  </div>
  );
}

export default Skills