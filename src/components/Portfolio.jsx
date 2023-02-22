import React, { useState } from "react";
import hotel from "../assets/portfolio/hotel.png";
import movies from "../assets/portfolio/movies.png";
import parking from "../assets/portfolio/parking.png";
import chat from "../assets/portfolio/chat.png";
import quiz from "../assets/portfolio/quiz.png";
import typing from "../assets/portfolio/type.png";
import quizApp from '../assets/portfolio/quizApp.png'
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
            desc: <div>
              <b>Technology used:</b> MERN <br />
              Users can Register and Login , and can choose the hotel they want and select select the room they wish for the desierd date.Used JWT for authentication.
            </div>
        },
        {
            id: 2,
            src: quizApp,
            name:'Quiz App',
            link: "https://quiz-app-swart-five.vercel.app/",
            git: "https://github.com/Yogeshkumar-24/quizApp",
            desc : <div>
              <b>Technology used:</b> MERN <br />
              The questions and answers are fetched from the database . And users can start the quiz with their username, and can also change or update the answers 
              before they submit the quiz. And the score board is displayed in the result section.
            </div>
          },
        {
            id: 3,
            src: movies,
            name:'Movie List',
            link : "https://yogeshkumar-24.github.io/movies-list/",
            git: "https://github.com/Yogeshkumar-24/movies-list",
            desc: <div>
              A simple website where user can search for the movie they want and the details are fetched from the api and are displayed
            </div>
        },
        {
            id: 4,
            src: parking,
            name:'Parking App',
            git:"https://github.com/Yogeshkumar-24/parking",
            link:"https://parking-app-v2.000webhostapp.com/index.php",
            desc: <div>
              <b>Technology Used: </b>Php,Mysql <br /> 
              A useful app which would solve the problem of heavy crowd for the parking in Shopping malls,etc. Admin can make a entry of a vehicle and the customer
              has a choice to either pay at moment or pay later within 1 day without fine.
            </div>
        },
        {
            id: 5,
            src: chat,
            name:'Simple Chat',
            git:"https://github.com/Yogeshkumar-24/simple-chat",
            link:"https://simple-chat-alpha.vercel.app/",
            desc : <div>
              <b>Technology Used:</b> React, socket.io <br />
              A simple website where people can connect with others just by enter the room with same id and can chat with many people .
            </div>
        },
        {
            id: 6,
            src: typing,
            name:'Typing Test',
            git:"https://github.com/Yogeshkumar-24/type",
            link:"https://yogeshkumar-24.github.io/type/",
            desc: <div>
              Using this , people can know their typing speed and accuracy given 60 seconds and displays the WPM (words per minute) at the end.
            </div>          
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
                  <p className={openDesc && id === index? " z-10 bg-gray-800 rounded-md p-4 " :"hidden"} >{desc}</p>
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
