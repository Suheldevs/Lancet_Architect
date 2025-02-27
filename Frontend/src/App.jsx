import React, { Suspense, lazy, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import Gallery from './pages/GalleryPage';
import TestimonialPage from './pages/TestimonialPage';
import ContactUs from './pages/ContactUs';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import ProjectDetailPage from './pages/ProjectDetail';
import BlogDetail from './pages/BlogDetail';
import ScrollToTop from './components/ScrollToTop';
import ScrollToTopButton from './components/ScrollToTopButton';
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensures animation runs only once
      easing: "ease-in-out", // Smooth animation
    });
  }, []);
  return (
    <BrowserRouter>
      <Suspense fallback={<div className='flex justify-center items-center min-h-screen w-screen'><Loader/></div>}>
      <ScrollToTop/>
      <ScrollToTopButton/>
      <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/blogs' element={<BlogPage />} />
          <Route path="/blogs/:slug" element={<BlogDetail />} />
          <Route path='/gallery' element={<Gallery/>} />
          <Route path='/testimonial' element={<TestimonialPage/>} />
          <Route path='/contact' element={<ContactUs/>} />
          <Route path="/projects/:slug" element={<ProjectDetailPage />} />
          <Route path='*' element={<Home/>} />
        </Routes>
      <Footer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
