import React from 'react'
import AboutImage from '../assets/aboutme-image.png'

const About = () => {
  return (
    <section id="about" className='scroll-mt-5 md:scroll-mt-5'>
        <div className='bg-black text-white py-20'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
                <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                    <img src={AboutImage} alt='About Me Image'
                    className='w-72 h-80 rounded object-cover mb-8 md:mb-0'/>
                    <div className='flex-1'>
                        <p className='text-lg mb-8'>
                            I am a passionate computer science student at the University of Chicago, 
                            eager to explore the world of technology and innovation. My journey 
                            into coding began in high school, where I discovered my love for problem-solving 
                            and creating digital solutions. Since then, I have honed my skills in 
                            various programming languages and frameworks, including JavaScript, Python, and React.
                        </p>
                        {/* Skills progress bars */}
                        <div className='space-y-4'>
                            <div className='flex items-center'>
                                <label htmlFor="htmlandcss" className='w-2/12'>HTML & CSS</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className='bg-gradient-to-r from-rose-400 to-blue-500 h-2.5 
                                        rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="reactjs" className='w-2/12'>React JS</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className='bg-gradient-to-r from-rose-400 to-blue-500 h-2.5 
                                        rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'>
                                    </div>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <label htmlFor="nodejs" className='w-2/12'>Node JS</label>
                                <div className="grow bg-gray-800 rounded-full h-2.5">
                                    <div className='bg-gradient-to-r from-rose-400 to-blue-500 h-2.5 
                                        rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='mt-12 flex justify-between text-center'>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-500'>
                                    3+
                                </h3>
                                <p>Years Working Experience</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-500'>
                                    5+
                                </h3>
                                <p>Projects Completed</p>
                            </div>
                            <div>
                                <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-500'>
                                    20+
                                </h3>
                                <p>Tools Learned</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About