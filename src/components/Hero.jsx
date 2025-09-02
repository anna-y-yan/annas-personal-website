import React from 'react'
import HeroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt='profile picture' 
        className= 'mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-500'>Anna Yan</span>
            , Aspiring Software Engineer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            Welcome to my personal website! I'm a passionate computer science student at the University of Chicago, eager to explore the world of technology and innovation.
        </p>
        <div className='mt-8 space-x-4'>
            <a href="#contact">
                <button
                className='bg-gradient-to-r from-rose-400 to-blue-500 text-white hidden 
                md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
                >
                    Contact Me
                </button>
            </a>
            <a href="">
                <button
                className='bg-gradient-to-r from-yellow-500 to-pink-500 text-white hidden 
                md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
                >
                    Resume
                </button>
            </a>
        </div>
    </div>
  )
}

export default Hero