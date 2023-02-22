import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-scroll'

const Home = () => {
  return (
      <div name='home'>
        <div className='pt-20 bg-gradient-to-b h-screen from-black to-gray-800'>
       <div className='flex p-20 flex-col h-full mx-auto max-w-full items-center justify-center '>
     <h1 className='text-white pb-7 text-xl font-bold '>I'm a Full stack developer</h1>
        <p className='text-white '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore porro sint quas. Itaque suscipit blanditiis earum odit alias? Provident numquam eaque corrupti non labore tenetur vitae asperiores officia doloribus neque.</p>   
        <button className='group mt-7 flex gap-3 justify-center items-center text-white cursor-pointer px-6 py-2 rounded-md bg-gradient-to-r from-cyan-600 to-blue-600  hover:opacity-80 duration-200'><Link to={'projects'} smooth duration={500}>Projects </Link><span  className='group-hover:rotate-90 duration-200'><FaArrowRight /></span></button>
       </div>
      </div>
      </div>
  )
}

export default Home