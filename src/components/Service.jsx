import React from 'react'

const services = [
    {
        id: 1,
        title: "Web Development",
        description: "Building responsive and dynamic websites using modern technologies like React, Node.js, and more."
    },
    {
        id: 2,
        title: "UI/UX Design",
        description: "Creating user-friendly and visually appealing designs to enhance user experience."
    },
    {
        id: 3,
        title: "Consulting",
        description: "Providing expert advice on software development, project management, and technology strategies."
    },
    {
        id: 4,
        title: "Mobile App Development",
        description: "Designing and developing mobile applications for both iOS and Android platforms."
    },
    {
        id: 5,
        title: "SEO Optimization",
        description: "Improving website visibility and search engine rankings through effective SEO strategies."
    },
    {
        id: 6,
        title: "Content Creation",
        description: "Producing high-quality content for blogs, social media, and marketing materials."
    }
]
const Service = () => {
  return (
    <section id="services" className='scroll-mt-5 md:scroll-mt-5'>
        <div className='bg-black text-white py-20'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>My Skills</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {services.map(service => (
                    <div key={service.id}
                    className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-120'>
                    <div className='text-gray-800'
                    >
                        {service.id}
                    </div>
                    <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-blue-500'>  
                        {service.title}
                    </h3>
                    <p className='mt-2 text-gray-300'>{service.description}</p>
                    <a href='#' className='mt-4 inline-block text-rose-400 hover:text-blue-500'>Read More</a>
                    </div>
                ))}
            </div>
            </div>
        </div>
    </section>
  )
}

export default Service