import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import StatsSection from '../components/StatsSection'
import DirectorMessage from '../components/DirectorMessage'
import WhyChooseUs from '../components/WhyChooseUs'
import ProjectSection from '../components/ProjectSection'
import Footer from '../components/Footer'

function Home() {
  return (
    <>
    <Header/>
    <HeroSection/>
    <AboutSection/>
    <StatsSection/>
    <DirectorMessage/>
    <WhyChooseUs/>
    <ProjectSection/>
    <Footer/>
    </>
  )
}

export default Home