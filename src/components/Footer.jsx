import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin, FaMedium } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-sage text-maroon py-5'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <div className='flex flex-col md:flex-row md:space-x-12 items-center mb-4'>
                <div className='flex-1 mb-4 md:mb-0'>
                    <h3 className='text-3xl font-bold mb-2 font-DMSerif'>Anna Yan</h3>
                </div>
                <div className='flex-1 w-full'>
                    <p className='text-matcha text-center md:text-center lg:text-right'>
                        Computer Science Student | University of Chicago<br/>
                        Passionate about coding, problem-solving, and innovation.<br/>
                    </p>
                    {/* <form className='flex items-center justify-center'>
                        <input 
                            type='email' 
                            placeholder='Enter your email'
                            className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600 
                            focus:outline-none focus:border-rose-400'
                        />
                        <button 
                            type='submit'
                            className='bg-gradient-to-r from-rose-400 to-blue-500 text-white px-4 py-2 rounded-r-lg'
                        >
                            Subscribe
                        </button>
                    </form> */}
                </div>
            </div>

            <div
                className='border-t border-matcha pt-4 flex flex-col md:flex-row
                justify-between items-center'
            >
                <p className='text-forestgreen'>
                    &copy; {new Date().getFullYear()} Anna Yan. All rights reserved.
                </p>
                <div className='flex space-x-4 my-4 md:my-0 text-xl'>
                    <a 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://www.linkedin.com/in/anna-y-yan/" 
                        className='text-matcha hover:text-maroon'
                    >
                        <FaLinkedin />
                    </a>
                    <a
                        target="_blank" 
                        rel="noopener noreferrer" 
                        href="https://github.com/anna-y-yan" 
                        className='text-matcha hover:text-maroon'
                    >
                        <FaGithub />
                    </a>
                </div>
                <div className='flex space-x-4'>
                    <p className='text-matcha italic'>
                        This page was last updated September 2025.
                    </p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer