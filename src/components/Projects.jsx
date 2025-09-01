import React from 'react'
import blokusImage from '../assets/blokus.png'
import workingsnoopy from '../assets/workingsnoopy.png'

const projects = [
    {
        id: 1,
        name: "Blokus Game",
        technologies: "Python, Pygame, Curses Library, TUI",
        image: blokusImage,
        github: "https://github.com/yourusername/project-one",
    },
    {
        id: 2,
        name: "Working Snoopy",
        technologies: "Python, Pygame, Curses Library, TUI",
        image: workingsnoopy,
        github: "https://github.com/yourusername/project-two",
    }, 
    {
        id: 3,
        name: "Project Three",
        technologies: "React, Node.js, Express, MongoDB",
        image: workingsnoopy,
        github: "https://github.com/yourusername/project-three"
    },
    {
        id: 4,
        name: "Project Four",
        technologies: "React, Node.js, Express, MongoDB",
        image: workingsnoopy,
        github: "https://github.com/yourusername/project-four"
    },
    {
        id: 5,
        name: "Project Five",
        technologies: "React, Node.js, Express, MongoDB",
        image: workingsnoopy,
        github: "https://github.com/yourusername/project-five"
    },
    {
        id: 6,
        name: "Project Six",
        technologies: "React, Node.js, Express, MongoDB",
        image: workingsnoopy,
        github: "https://github.com/yourusername/project-six"
    },
]

const Projects = () => {
  return (
    <div className='bg-black text-white py-20' id='about'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {projects.map(project => (
                    <div key={project.id} className='bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105'>
                        <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
                        <h3 className='text-2xl font-bold mb-2'>{project.name}</h3>
                        <p className='text-gray-400 mb-4'>{project.technologies}</p>
                        <a href={project.github} className='inline-block bg-gradient-to-r from-rose-400 to-blue-500 text-white py-2 px-4 rounded-full' target="_blank" rel='noopener noreferrer'>GitHub</a>
                        </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Projects