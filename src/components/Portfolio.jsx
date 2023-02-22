import React, { useState } from "react";
import hotel from "../assets/portfolio/hotel.png";
import movies from "../assets/portfolio/movies.png";
import parking from "../assets/portfolio/parking.png";
import chat from "../assets/portfolio/chat.png";
import quiz from "../assets/portfolio/quiz.png";
import typing from "../assets/portfolio/type.png";
// import weather from "../assets/portfolio/reactWeather.jpg";
const Portfolio = () => {
    const[openDesc,setOpenDesc] = useState(false);
    const[index,setIndex] = useState(undefined)
    const handleOpen = (i) => {
      setIndex(i)
      setOpenDesc(!openDesc)
    }
    const image = [
        {
            id: 1,
            src: hotel,
            name:'Hotel Booking',
            link: "https://hotelbooking-ecru.vercel.app/",
            git: "https://github.com/Yogeshkumar-24/hotelbooking",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo neque reiciendis at ab perferendis obcaecati. Nostrum reiciendis doloribus quos laboriosam, dolorum quo dolores ex consequatur veniam minus non sequi repellendus!"
        },
        {
            id: 2,
            src: movies,
            name:'Movie List',
            link : "https://yogeshkumar-24.github.io/movies-list/",
            git: "https://github.com/Yogeshkumar-24/movies-list",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo neque reiciendis at ab perferendis obcaecati. Nostrum reiciendis doloribus quos laboriosam, dolorum quo dolores ex consequatur veniam minus non sequi repellendus!"

        },
        {
            id: 3,
            src: parking,
            name:'Parking App',
            git:"https://github.com/Yogeshkumar-24/parking",
            link:"https://parking-app-v2.000webhostapp.com/index.php",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo neque reiciendis at ab perferendis obcaecati. Nostrum reiciendis doloribus quos laboriosam, dolorum quo dolores ex consequatur veniam minus non sequi repellendus!"

        },
        {
            id: 4,
            src: chat,
            name:'Simple Chat',
            git:"https://github.com/Yogeshkumar-24/simple-chat",
            link:"https://simple-chat-alpha.vercel.app/",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo neque reiciendis at ab perferendis obcaecati. Nostrum reiciendis doloribus quos laboriosam, dolorum quo dolores ex consequatur veniam minus non sequi repellendus!"

        },
        {
            id: 5,
            src: quiz,
            name:'Online Quiz',
            git:"https://github.com/Yogeshkumar-24/quiz",
            link:"https://main--guileless-hummingbird-e8cf9e.netlify.app/",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo neque reiciendis at ab perferendis obcaecati. Nostrum reiciendis doloribus quos laboriosam, dolorum quo dolores ex consequatur veniam minus non sequi repellendus!"

        },
        {
            id: 6,
            src: typing,
            name:'Typing Test',
            git:"https://github.com/Yogeshkumar-24/type",
            link:"https://github.com/Yogeshkumar-24/type",
            desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo neque reiciendis at ab perferendis obcaecati. Nostrum reiciendis doloribus quos laboriosam, dolorum quo dolores ex consequatur veniam minus non sequi repellendus!"
           
        },
    ]

  return (
    <div name='projects' className="bg-gradient-to-b from-gray-800 to-black text-white w-full md:h-screen">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full pb-10 ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work here!</p>
        </div>

        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mx-auto sm:px-0 ">
        {image.map(({src,id,name,link,git,desc}) => (
              <div key={id} className=" shadow-md my-10 shadow-gray-900 rounded-large h-44 w-80 md:h-40 md:w-72 ">
                <img src={src} className="hover:scale-105 duration-200 h-full w-full" alt="" />
                <div className="flex justify-center text-xl font-bold pt-2">{name}</div>
              <div className="  ">
              <div className="flex justify-between px-4">
                  <a target={"_blank"} href={link} className="w-1/3 py-4 hover:scale-105 duration-200 font-semibold">Demo</a>
                  <button onClick={() => handleOpen(id)} className="w-1/2  hover:opacity-70 duration-200 my-2 rounded-md font-bold   bg-gray-500">Desciption</button>
                  <a target={"_blank"} href={git} className="w-1/3 py-4 hover:scale-105 duration-200 font-semibold text-right">Code</a>
                </div>
                <div key={id} className= {!openDesc && index == id? 'hidden' : 'flex  '}>
                  <p className={openDesc && id === index? " z-10 bg-gray-800  p-4 " :"hidden"} >{desc}</p>
                  </div>
              </div>
              </div>
        ))}
        </div>
      
      </div>
    </div>
  );
};

export default Portfolio;
