import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';

// Lazy loading pages
const Home = lazy(() => import('./pages/Home'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const ProjectPage = lazy(() => import('./pages/ProjectPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<div className='flex justify-center items-center min-h-screen w-screen'><Loader/></div>}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/projects' element={<ProjectPage />} />
          <Route path='/blogs' element={<BlogPage />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
