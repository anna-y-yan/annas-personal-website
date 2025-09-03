import React, { useEffect } from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import blokusImage from '../assets/blokus.svg'
import workingsnoopy from '../assets/workingsnoopy.png'
import dashboard from '../assets/dashboard.jpg'


const projects = [
    {
        id: 1,
        name: "Blokus Game",
        technologies: "Python, Pygame, Curses Library, TUI",
        image: blokusImage,
        description: "A terminal-based implementation of the classic board game \
        Blokus. Players can compete against each other or an AI opponent. \
        Features include a graphical interface using Pygame and a text-based \
        interface using the Curses library. \ Code for this project is available upon request.",
    },
    {
        id: 2,
        name: "Detection Rule Tuning Dashboard",
        technologies: "Splunk ES, Splunk SPL, Dashboards, ServiceNow Integration",
        image: dashboard,
        description: "A web-based dashboard for tuning detection rules in Splunk ES. \
        This project involved creating custom dashboards using Splunk SPL and \
        integrating with ServiceNow for incident management. The dashboard \
        provides real-time insights into rule performance and allows for easy \
        adjustments to improve detection accuracy. (Real dashboard includes \
        confidential company data and is not publicly available.)",
    },
    {
        id: 3,
        name: "Alumni Network Web App",
        technologies: "React, Node.js, Express, MongoDB",
        image: workingsnoopy,
        description: "A web application for connecting alumni and facilitating networking opportunities. Built with a MERN stack (MongoDB, Express, React, Node.js) and includes features like user profiles, messaging, and event management."
    },
]

function ReadMoreModal({ open, onClose, description, name, technologies, image }) {
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
            className='fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-blur-sm'
            aria-hidden='false'
            role='dialog'
            aria-modal='true'
            onMouseDown={onClose} // outside click (see stopPropagation below)
        >
            <div
                className='w-full max-w-xl rounded-2xl bg-gray-800 p-5 rounded-lg drop-shadow-lg'
                role='document'
                onMouseDown={(e) => e.stopPropagation()} // prevent outside click
            >
                <div className='flex items-start justify-between p-4'>
                    <h3 className='mt-2 text-2xl font-bold text-transparent 
                        bg-clip-text bg-gradient-to-r from-rose-400 to-blue-500'>
                        {name}
                    </h3>
                    <div
                        onClick={onClose}
                        className='text-white hover:text-rose-400 cursor-pointer'
                        aria-label='Close'
                    >
                        x
                    </div>
                </div>
                <img src={image} alt={name} className="rounded-lg mb-4 w-full h-80 object-cover" />
                <div className='px-4 pb-4'>
                    <p className='text-white mb-4'>
                        {description}
                    </p>
                </div>
                <div className='px-4 pb-4'>
                    <p className='text-gray-400 italic mb-4'>
                        Technologies: {technologies}
                    </p>
                </div>
            </div>
        </div>,
        document.body
    );
}

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    return (
        <div className='bg-black text-white py-20' id='projects'>
            <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {projects.map(project => (
                    <div key={project.id} className='bg-gray-800 p-6 rounded-lg 
                    hover:shadow-lg transform transition-transform duration-300 
                    hover:scale-105'>
                        <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
                        <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                        <p className='text-gray-400 mb-4'>{project.technologies}</p>
                        <div className='mt-4 inline-block text-rose-400 
                        hover:text-blue-400 cursor-pointer'
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
            />
        </div>
    </div>
  )
}

export default Projects