import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
const Navbar = () => {
  const [open, setOpen] = useState(true);
  const [close, setClose] = useState(false);

  const links = [
    { id: 1, link: "home" },
    { id: 2, link: "skills" },
    { id: 3, link: "projects" },
    { id: 4, link: "contact" },
  ];

  const handleClick = () => {
    setClose(!close);
    setOpen(!open);
  };

  return (
    <div className="rounded-lg flex z-10 justify-between px-5 backdrop-blur-sm   items-center w-full h-20 bg-gray-black fixed">
      <div>
        <h1 className=" text-white  font-bold caret-transparent ">YOGESH KUMAR</h1>
      </div>
      <div className="hidden md:flex backdrop-blur-sm h-20 items-center">
        <ul className="flex gap-10 text-sm text-gray-200 ">
          {links.map(({ link, id }) => (
            <li
              key={id}
              className="hover:text-gray-500 duration-200 capitalize cursor-pointer caret-transparent active:text-gray-500"
            >
              <Link to={link} smooth duration={500}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:hidden block ">
        {open && (
          <FaBars
            onClick={handleClick}
            className="text-gray-200  text-2xl cursor-pointer hover:text-gray-500 duration-200"
          />
        )}
      </div>

      {!open && close && (
        <>
          <FaTimes
            className="flex  right-0 text-white cursor-pointer  duration-200 hover:text-gray-500"
            onClick={handleClick}
          />
        </>
      )}

      {!open && (
        <div className="rounded-lg  backdrop-blur-lg bg-gradient-to-b from-black to-gray-800 flex animate-[wiggle_0.3s_ease-in-out] flex-col  p-10  items-center absolute h-screen w-48 right-0 duration-100 top-20 opacity-90    ">
          <div className=" ">
            <ul className=" flex flex-col pt-5 gap-20 text-sm text-gray-200 backdrop-blur-sm ">
              {links.map(({ link, id }) => (
                <li
                  key={id}
                  className=" hover:text-gray-500 text-xl duration-200 capitalize cursor-pointer caret-transparent active:text-gray-500"
                >
                  <Link to={link} smooth duration={500}>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
