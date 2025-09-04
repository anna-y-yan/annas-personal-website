import React from 'react'
import HeroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <section id="hero" className='scroll-mt-5 md:scroll-mt-10'>
        <div className='bg-forestgreen text-lightblue text-center py-25'>
            <img src={HeroImage} alt='profile picture' 
            className= 'mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-110'/>
            <h1 className='text-4xl font-bold'>
                Hi! I'm {" "}
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-sage to-seaglass'>Anna Yan</span>
                , Aspiring Software Engineer
            </h1>
            <p className='mt-6 text-lg text-almond'>
                I'm a passionate computer science student at the University of Chicago, with a strong interest in analytical problem solving and innovative tech solutions.
            </p>
            <div className='mt-6 space-x-10'>
                <a href="#contact">
                    <button
                    className='bg-gradient-to-r from-seaglass to-almond text-forestgreen hover:text-maroon
                    md:inline transform transition-transform duration-300 hover:scale-120 px-4 py-2 rounded-full text-lg'
                    >
                        Contact Me
                    </button>
                </a>
                <a href="/AnnaYan_Resume_Sep25.pdf" target="_blank" rel="noopener noreferrer">
                    <button
                        className='bg-gradient-to-r from-seaglass to-almond text-forestgreen hover:text-maroon
                        md:inline transform transition-transform duration-300 hover:scale-120 px-4 py-2 rounded-full text-lg'
                    >
                        Resume
                    </button>
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero