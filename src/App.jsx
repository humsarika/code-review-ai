import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";

import Home from './pages/home';
import About from './components/about';
import FAQ from './components/faq';
import Footer from './components/footer';
import Navbar from './components/navbar';
import './styles/global.css';

const App = () => {
  return (
    <>

      <Navbar/>


      <Home />
      <About />
      <FAQ />

      <Footer />
      <Analytics />
      </>
  );
};

export default App;
