import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Service from './components/Service'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      {/* <Service /> */}
      <Projects />
      <Contact />
      <Footer />
      <Analytics />
      {/* <h1 className="font-pollerone text-[50px] text-rose-600 text-center">Hello World!</h1>
      <h1 className="font-DMSerif text-[50px] text-violet-400 hover:text-sky-600 text-center">My name is Anna and this is my website</h1> */}
    </div>
  )
}

export default App
