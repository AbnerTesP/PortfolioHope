import React from 'react'
import Style from '../../../src/App.module.css';
import { About } from '../../components/About/About'
import { Contact } from '../../components/Contact/Contact'
import { Experience } from '../../components/Experience/Experience'
import { Hero } from '../../components/Hero/Hero'
import Navbar from '../../components/Navbar/Navbar'
import { Projects } from '../../components/Projects/Projects'

export const Home = () => {
    return (
      <div className={Style.App}>
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Contact />
      </div>
    )
  }
  
  export default Home
