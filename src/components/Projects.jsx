import React, { useEffect } from 'react'
import { useState } from 'react'
import { createPortal } from 'react-dom'
import blokusImage from '../assets/blokus.svg'
import workingsnoopy from '../assets/workingsnoopy.png'
import splunk from '../assets/splunk.png'

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
        progress: "In Progress: Currently enhancing the AI opponent using \
        minimax algorithm with alpha-beta pruning for improved decision-making."
    },
    {
        id: 2,
        name: "Detection Rule Tuning Dashboard",
        technologies: "Splunk ES, Splunk SPL, Dashboards, ServiceNow Integration",
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
        name: "Alumni Network Web App",
        technologies: "React, Node.js, Express, MongoDB",
        image: workingsnoopy,
        description: "A web application for connecting alumni and facilitating \
        networking opportunities. Built with a MERN stack (MongoDB, Express, React, Node.js) \
        and includes features like user profiles, messaging, and event management.",
        progress: "Completed: Launched the app with over 100 active users and \
        received positive feedback on the user interface and functionality."
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
                className='w-full max-w-xl max-h-[85vh] rounded-2xl bg-gray-800 p-5 rounded-lg drop-shadow-lg
                ring-1 ring-white/10 overflow-hidden flex flex-col'
                role='document'
                onMouseDown={(e) => e.stopPropagation()} // prevent outside click
            >
                <div className='flex items-start justify-between p-3'>
                    <h3
                        id='project-title'
                        className='text-white text-2xl font-bold mt-3 mb-2'
                    >
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

                {/* scrollable content area */}
                <div className='flex-1 overflow-y-auto px-4 pt-4 mb-5'>
                    <p className='text-white mb-4'>{description}</p>
                    <div className="mt-2">
                        <h4 className="text-gray-300 text-sm mb-2">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {toTechList(technologies).map((tech, i) => (
                            <span
                                key={i}
                                className="inline-flex items-center rounded-full
                                        bg-blue-500/50 text-white text-sm px-3 py-1 mb-3"
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
                        <p className='text-gray-400 italic mb-2'>{progress}</p>
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
            <div className='bg-black text-white py-20'>
                <div className='container mx-auto px-8 md:px-16 lg:px-24'>
                    <h2 className='text-4xl font-bold text-center mb-12'>My Projects</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {projects.map(project => (
                        <div key={project.id} className='bg-gray-800 p-6 rounded-lg 
                        hover:shadow-lg transform transition-transform duration-300 
                        hover:scale-105'>
                            <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-60 object-cover" />
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
                    progress={selectedProject ? selectedProject.progress : ''}
                />
            </div>
            </div>
        </section>
  )
}

export default Projects