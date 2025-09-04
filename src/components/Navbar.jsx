import React, { useEffect, useState } from 'react'
import IconImage from '../assets/icon.png'
import { FaLinkedin } from 'react-icons/fa'


export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 4);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
    <nav className={['fixed inset-x-0 top-0 z-50 bg-black text-white px-8 md:px-16 lg:px-24',
        scrolled
            ? 'bg-black/50 backdrop-blur border-b border-white/10 shadow-sm'
            : 'bg-transparent'
        ].join(' ')}
    >
            <div className='mx-auto max-w-7xl px-6 h-16 container py-2 flex 
            justify-center md:justify-between items-center'>
                <a href='#hero' className='hover:scale-110 transform transition-transform duration-300'>
                    <img src={IconImage} alt='logo' className='w-15 h-13 rounded-full object-cover hidden md:inline'/>
                </a>
                <div className='space-x-6'>
                    <a href="#hero" className='hover:text-gray-400'>Home</a>
                    <a href="#about" className='hover:text-gray-400'>About Me</a>
                    <a href="#services" className='hover:text-gray-400'>Services</a>
                    <a href="#projects" className='hover:text-gray-400'>Projects</a>
                    <a href="#contact" className='hover:text-gray-400'>Contact</a>
                </div>
                <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://www.linkedin.com/in/anna-y-yan/"
                >
                    <button 
                        className='bg-gradient-to-r from-rose-400 to-blue-500 
                            text-white hidden md:inline-flex transform transition-transform 
                            duration-300 hover:scale-110 px-4 py-2 rounded-full items-center space-x-2'
                    >
                        <FaLinkedin className="inline-block text-xl"/>
                        <span>
                            Connect with Me
                        </span>
                    </button>
                </a>
            </div>
        </nav>
  );
}

// const Navbar = () => {
//     return (
//         <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
//             <div className='container py-2 flex justify-center md:justify-between items-center'>
//                 {/* <div className='text-2xl font-bold hidden md:inline'>Anna</div> */}
//                 <img src={IconImage} alt='logo' className='w-15 h-13 rounded-full object-cover hidden md:inline'/>
//                 <div className='space-x-6'>
//                     <a href="#home" className='hover:text-gray-400'>Home</a>
//                     <a href="#about" className='hover:text-gray-400'>About Me</a>
//                     <a href="#services" className='hover:text-gray-400'>Services</a>
//                     <a href="#projects" className='hover:text-gray-400'>Projects</a>
//                     <a href="#contact" className='hover:text-gray-400'>Contact</a>
//                 </div>
//                 <a 
//                     target="_blank" 
//                     rel="noopener noreferrer" 
//                     href="https://www.linkedin.com/in/anna-y-yan/"
//                 >
//                     <button 
//                         className='bg-gradient-to-r from-rose-400 to-blue-500 
//                             text-white hidden md:inline-flex transform transition-transform 
//                             duration-300 hover:scale-120 px-4 py-2 rounded-full items-center space-x-2'
//                     >
//                         <FaLinkedin className="inline-block text-xl"/>
//                         <span>
//                             Connect with Me
//                         </span>
//                     </button>
//                 </a>
//             </div>
//         </nav>
//     )
// }

// export default Navbar