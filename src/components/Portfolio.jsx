import React, { useState } from "react";
import hotel from "../assets/portfolio/hotel.png";
import movies from "../assets/portfolio/movies.png";
import parking from "../assets/portfolio/parking.png";
import chat from "../assets/portfolio/chat.png";
import quiz from "../assets/portfolio/quiz.png";
import typing from "../assets/portfolio/type.png";
import quizApp from '../assets/portfolio/quizApp.png'

import memoryGame from "../assets/portfolio/memoryGame.png";
import virtualKeyboard from "../assets/portfolio/virtualKeyboard.png";
import snakeGame from "../assets/portfolio/snakeGame.png";
import pathFinder from "../assets/portfolio/pathFinder.png";
import telegramBot from "../assets/portfolio/telegramBot.png";
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

    const pImage = [
      {
        id: 1,
        src: pathFinder,
        name:'Path Finder',
        git:"https://github.com/Yogeshkumar-24/path-finder-visualizer",
        // link:"https://yogeshkumar-24.github.io/type/",
        desc: <div>
          This program allows the user to create barriers, set the start and end points, and find the shortest path between them using the A* search algorithm.
        </div>          
    },


    {
        id: 2,
        src: virtualKeyboard,
        name:'Virtual Keyboard',
        git:"https://github.com/Yogeshkumar-24/virtual-keyboard",
        // link:"https://yogeshkumar-24.github.io/type/",
        desc: <div>
          This Python script allows you to control a virtual keyboard using hand gestures captured through your webcam.
        </div>          
    },


    {
        id: 3,
        src: snakeGame,
        name:'Snake Game',
        git:"https://github.com/Yogeshkumar-24/snake-python",
        // link:"https://yogeshkumar-24.github.io/type/",
        desc: <div>
          This is a simple snake game created using python
        </div>          
    },


    {
        id: 4,
        src: telegramBot,
        name:'Dictionary Bot - Telegram',
        git:"https://github.com/Yogeshkumar-24/telegram-dictionary-bot",
        link:"https://t.me/dictionary_dictionary_bot",
        desc: <div>
         Created a dictionary bot which provides meaning for a given word.
        </div>          
    },

    ]


    const aImage = [
      
      {
        id: 1,
        src: memoryGame,
        name:'Memory Game',
        git:"https://github.com/Yogeshkumar-24/memory-game-lcd",
        // link:"https://yogeshkumar-24.github.io/type/",
        desc: <div>
          This is a Arduino game designed using arduino nano, lcd display and LED's.
        </div>          
    },
    ]

  return (
    <div name='projects' className="bg-gradient-to-b from-gray-800 to-black text-white w-full md:h-full ">
      <div className=" max-w-screen-lg p-4 mx-auto flex flex-col  w-full h-full pb-10 ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work here!</p>
        </div>

          <h2 className="text-3xl font-bold ">Web projects</h2>
        <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 mx-auto sm:px-0 ">
        {image.map(({src,id,name,link,git,desc}) => (
              <div key={id} className=" shadow-md my-16 shadow-gray-900 rounded-large h-44 w-80 md:h-40 md:w-72 ">
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
          {/* <br /><br /><br /> <br /> */}
          
      </div>
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full pb-10 md:pt-32">
      <h2 className="text-3xl font-bold ">Python projects</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 mx-auto sm:px-0 md:pb-10">
            {pImage.map(({id,src,name,git,desc}) => (
              <div key={id} className="shadow-md my-16 shadow-gray-900 rounded-large h-44 w-80 md:h-40 md:w-72">

<img src={src} className="hover:scale-105 duration-200 h-full w-full" alt="" />
                <div className="flex justify-center text-xl font-bold pt-2">{name}</div>
              <div className="  ">
              <div className="flex justify-between px-4">
                  {/* <a target={"_blank"} href={link} className="w-1/3 py-4 hover:scale-105 duration-200 font-semibold">Demo</a> */}
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


      <div className="max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full pb-10 md:pt-12">
      <h2 className="text-3xl font-bold ">Arduino projects</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-16 mx-auto sm:px-0 md:pb-10">
            {aImage.map(({id,src,name,git,desc}) => (
              <div key={id} className="shadow-md my-16 shadow-gray-900 rounded-large h-44 w-80 md:h-40 md:w-72">

<img src={src} className="hover:scale-105 duration-200 h-full w-full" alt="" />
                <div className="flex justify-center text-xl font-bold pt-2">{name}</div>
              <div className="  ">
              <div className="flex justify-between px-4">
                  {/* <a target={"_blank"} href={link} className="w-1/3 py-4 hover:scale-105 duration-200 font-semibold">Demo</a> */}
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
