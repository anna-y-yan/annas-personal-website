import React, { useEffect, useState } from 'react'
import IconImage from '../assets/icon.png'
import { FaLinkedin } from 'react-icons/fa'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 4);
            setOpen(false);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
    <>
    <nav className={['fixed inset-x-0 top-0 z-50 bg-black text-white px-8 md:px-16 lg:px-24',
        scrolled
            ? 'bg-forestgreen/50 backdrop-blur border-b border-white/10 shadow-sm'
            : 'bg-transparent'
        ].join(' ')}
    >
        {/* logo hidden on mobile */}
        <div className='mx-auto max-w-7xl px-6 h-16 container py-2 flex 
            justify-center md:justify-between items-center'>
                <a href='#hero' className='hover:scale-110 transform 
                    transition-transform duration-300 text-3xl text-lightblue 
                    font-pollerone inline'
                >
                    Anna
                    {/* <img 
                        src={IconImage} 
                        alt='logo' 
                        className='w-15 h-13 rounded-full object-cover md:inline'
                    /> */}
                </a>
                {/* center links on desktop only */}
                <div className='hidden md:flex space-x-6'>
                    <a href="#hero" className='text-lightblue hover:text-maroon'>Home</a>
                    <a href="#about" className='text-lightblue hover:text-maroon'>About Me</a>
                    {/* <a href="#services" className='text-lightblue hover:text-maroon'>Services</a> */}
                    <a href="#projects" className='text-lightblue hover:text-maroon'>Projects</a>
                    <a href="#contact" className='text-lightblue hover:text-maroon'>Contact</a>
                </div>
                {/* linkedin button on desktop only */}
                <a
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://www.linkedin.com/in/anna-y-yan/"
                >
                    <button 
                        className='bg-gradient-to-r from-seaglass to-almond text-forestgreen 
                            hover:text-maroon hidden md:inline-flex transform transition-transform 
                            duration-300 hover:scale-110 px-4 py-2 rounded-full items-center space-x-2'
                    >
                        <FaLinkedin className="inline-block text-xl"/>
                        <span>
                            Connect with Me
                        </span>
                    </button>
                </a>
                
                {/* hamburger menu mobile only */}
                <button
                    className='md:hidden ml-auto p-2 rounded-lg border border-lightblue text-lightblue hover:text-maroon'
                    aria-label='Open menu'
                    aria-expanded={open}
                    aria-controls='mobile-menu'
                    onClick={() => setOpen(!open)}
                >
                    <FiMenu className='text-2xl'/>
                </button>
        </div>
    </nav>
        
    {/* mobile overlay and right slideout menu */}
    {/* overlay */}
    <div
        className={`md:hidden fixed inset-0 bg-black/40 transition-opacity z-[60] ${
            open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setOpen(false)}
       />
        {/* slide-out panel */}
        <aside
            id='mobile-menu'
            className={`md:hidden fixed top-0 right-0 h-full w-72 bg-forestgreen/50 backdrop-blur-sm
                border-l border-white/10 transform transition-transform duration-300 
                z-[70] ${open ? 'translate-x-0' : 'translate-x-full'}`}
            role='dialog'
            aria-modal='true'
        >
                <div className='flex items-center justify-between h-16 px-5'>
                    <span className='text-lg font-bold text-sage'>Menu</span>
                    <button
                        className='p-2 rounded-lg border border-white/20 text-lightblue hover:text-maroon'
                        aria-label='Close menu'
                        onClick={() => setOpen(false)}
                    >
                        <FiX className='text-2xl' />
                    </button>
                </div>
                <nav className="px-5 py-4 space-y-4">
                    <a href="#hero" onClick={() => setOpen(false)} className="block text-lightblue hover:text-maroon">
                        Home
                    </a>
                    <a href="#about" onClick={() => setOpen(false)} className="block text-lightblue hover:text-maroon">
                        About Me
                    </a>
                    <a href="#projects" onClick={() => setOpen(false)} className="block text-lightblue hover:text-maroon">
                        Projects
                    </a>
                    <a href="#contact" onClick={() => setOpen(false)} className="block text-lightblue hover:text-maroon">
                        Contact
                    </a>

                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://www.linkedin.com/in/example/"
                        className="block pt-2"
                        onClick={() => setOpen(false)}
                    >
                        <span
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-seaglass to-almond 
                                    text-forestgreen hover:text-maroon px-4 py-2 rounded-full"
                        >
                        <FaLinkedin className="text-xl" />
                        Connect with Me
                        </span>
                    </a>
                </nav>
            </aside>
        </>
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