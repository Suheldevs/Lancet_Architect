import React from 'react'
import Header from '../components/Header'
import HeroSection from '../components/HeroSection'
import AboutSection from '../components/AboutSection'
import StatsSection from '../components/StatsSection'
import DirectorMessage from '../components/DirectorMessage'
import WhyChooseUs from '../components/WhyChooseUs'
import ProjectSection from '../components/ProjectSection'
import Testimonial from '../components/Testimonials'
import BlogSection from '../components/BlogSection'
import HowWeWork from '../components/HowWeWork'

function Home() {
  return (
    <>
    <HeroSection/>
    <AboutSection/>
    <StatsSection/>
    <DirectorMessage/>
    <HowWeWork/>
    <WhyChooseUs/>
    <ProjectSection/>
    <Testimonial/>
    <BlogSection/>
  
    </>
  )
}

export default Home