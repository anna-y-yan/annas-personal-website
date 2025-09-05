import React, { useEffect } from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import blokusImage from '../assets/blokus.svg'
import topsyturvy from '../assets/topsyturvy2.svg'
import myshell from '../assets/myshell.svg'
import smalloc from '../assets/smalloc.svg'
import splunk from '../assets/splunk.svg'
import webcode from '../assets/websitecode.svg'

const projects = [
    {
        id: 1,
        name: "Blokus Game",
        technologies: "Python, Pygame, Curses Library, TUI Development",
        image: blokusImage,
        description: "A terminal-based implementation of the classic board game \
        Blokus. Players can compete against each other or an AI opponent. \
        Features include a graphical interface using Pygame and a text-based \
        interface using the Curses library. \ Code for this project is available upon request.",
        progress: "In Progress: Currently enhancing the AI opponent using \
        minimax algorithm with alpha-beta pruning for improved decision-making."
    },
    {
        id: 2,
        name: "Detection Rule Tuning Dashboard",
        technologies: "Splunk ES, Splunk SPL, Dashboards, ServiceNow",
        image: splunk,
        description: "A web-based dashboard for tuning detection rules in Splunk ES. \
        This project involved creating custom dashboards using Splunk SPL and \
        integrating with ServiceNow for incident management. The dashboard \
        provides real-time insights into rule performance and allows for easy \
        adjustments to improve detection accuracy. (Real dashboard includes \
        confidential company data and is not publicly available.)",
        progress: "Completed: Successfully deployed the dashboard and integrated \
        with ServiceNow, resulting in a 20% reduction in false positives."
    },
    {
        id: 3,
        name: "Topsy-Turvy Game",
        technologies: "C, TUI Development",
        description: "A terminal-based game where where 2-players take turns dropping \
        pieces onto a grid, aiming to connect a pre-defined number of their pieces \
        in a row, but the twist is that a player can choose to reverse the gravity of the board, \
        causing all pieces to fall to the opposite side. The game features a text-based \
        user interface (TUI) for an engaging experience. Game has two modes, matrix mode and bitboard mode. \
        Code for this project is available upon request.",
        image: topsyturvy,
        progress: "Completed: Developed the game mechanics and user interface, \
        achieving a fun and challenging experience for players."
    },
    {
        id: 4,
        name: "Personal Website",
        technologies: "React, Tailwind CSS, JavaScript",
        description: "A personal portfolio website to showcase my projects, skills, \
        and experiences. Built using React for the frontend and styled with Tailwind CSS. \
        The website is responsive and includes sections for about me, projects, and contact information.",
        image: webcode,
        progress: "Completed: Deployed the website and continuously updating it with new projects and content."
    },
    {
        id: 5,
        name: "Personal Shell Project",
        technologies: "C, Linux, System Programming",
        description: "A custom shell implemented from scratch in C that mimics basic functionalities of Unix shells. \
        Features include command execution, piping, redirection, and built-in commands like cd and exit. \
        The shell is designed to be lightweight and efficient, providing a simple interface for users to interact with the system.",
        image: myshell,
        progress: "Completed: Successfully implemented core shell functionalities and tested on various Linux distributions."
    },
    {
        id: 6,
        name: "Malloc Project",
        technologies: "C, Memory Management, Linux",
        description: "A custom memory allocator implemented in C that provides \
        dynamic memory allocation functionalities similar to malloc, free, and realloc. \
        The allocator uses a best-fit strategy to minimize fragmentation and optimize memory usage. \
        It includes features like coalescing free blocks and splitting larger blocks for efficient allocation.",
        image: smalloc,
        progress: "Completed: Developed and tested the memory allocator, achieving \
        performance comparable to standard library implementations."
    },
]

const toTechList = (technologies) => 
    Array.isArray(technologies) 
        ? technologies
        : String(technologies)
            .split(',')
            .map(t => t.trim())
            .filter(Boolean);

function ReadMoreModal({ open, onClose, description, name, technologies, image, progress }) {
    useEffect(() => {
        if (!open) return;
        const onKey = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [open, onClose]);

    useEffect(() => {
        if (!open) return;
        const {overflow } = document.body.style;
        document.body.style.overflow = 'hidden';
        return () => (document.body.style.overflow = overflow);
    }, [open]);

    if (!open) return null;

    return createPortal(
        <div
            className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/10'
            aria-hidden='false'
            role='dialog'
            aria-modal='true'
            onMouseDown={onClose} // outside click (see stopPropagation below)
        >
            <div
                className='w-full max-w-xl max-h-[85vh] rounded-2xl bg-lightblue p-5 rounded-lg drop-shadow-lg
                ring-1 ring-white/10 overflow-hidden flex flex-col'
                role='document'
                onMouseDown={(e) => e.stopPropagation()} // prevent outside click
            >
                <div className='flex items-start justify-between p-3'>
                    <h3
                        id='project-title'
                        className='text-maroon text-2xl font-bold mt-3 mb-2'
                    >
                        {name}
                    </h3>
                    <div
                        onClick={onClose}
                        className='text-matcha hover:text-maroon cursor-pointer text-xl font-bold'
                        aria-label='Close'
                    >
                        x
                    </div>
                </div>

                {/* scrollable content area */}
                <div className='flex-1 overflow-y-auto px-4 pt-4 mb-5'>
                    <p className='text-matcha mb-4'>{description}</p>
                    <div className="mt-2">
                        <h4 className="text-matcha mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                            {toTechList(technologies).map((tech, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center rounded-full
                                        bg-forestgreen/75 text-almond text-sm px-3 py-2 mb-2"
                            >
                                {tech}
                            </span>
                            ))}
                            <img 
                                src={image}
                                alt={name}
                                className="rounded-lg mb-4 w-full h-100 object-cover" 
                            />
                        </div>
                    </div>
                    <div>
                        <p className='text-matcha text-sm italic mb-2'>{progress}</p>
                    </div>

                </div>
            </div>
        </div>,
        document.body
    );
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    return (
        <section id="projects" className='scroll-mt-5 md:scroll-mt-5'>
            <div className='bg-forestgreen text-lightblue py-20'>
                <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                    <h2 className='text-4xl font-bold text-center mb-12 
                    text-almond'
                    >
                        My Projects
                    </h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {projects.map(project => (
                        <div key={project.id} className='bg-lightblue p-6 rounded-lg 
                        hover:shadow-lg transform transition-transform duration-300 
                        hover:scale-105'>
                            <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
                            <h3 className='text-2xl font-bold mb-2 text-chocolate'>{project.name}</h3>
                            <p className='text-matcha mb-4'>{project.technologies}</p>
                            <div className='mt-4 inline-block text-maroon 
                            hover:text-chocolate cursor-pointer'
                                onClick={() => setSelectedProject(project)}
                            >
                                    Read More
                            </div>
                        </div>
                    ))}
                </div>

                <ReadMoreModal
                    open={selectedProject !== null}
                    onClose={() => setSelectedProject(null)}
                    description={selectedProject ? selectedProject.description : ''}
                    name={selectedProject ? selectedProject.name : ''}
                    technologies={selectedProject ? selectedProject.technologies : ''}
                    image={selectedProject ? selectedProject.image : ''}
                    progress={selectedProject ? selectedProject.progress : ''}
                />
            </div>
            </div>
        </section>
  )
}

export default Projects