import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AdoptionSection from './components/AdoptionSection';
import Menu from './components/Menu';
import PhotoGallery from './components/PhotoGallery';
import Footer from './components/Footer';
import './App.css'; // Add a global stylesheet for the full-width image
import banner from './banner1.jpg'
import one from './1.png'
import two from './2.png'
import three from './3.png'
import logo from './logo2.jpg'



function App() {
  return (
    
    <Router>
      <header className="header-image">
        <img src={banner} alt="Cat Café Banner" />
        <div className="moving-message">
          Welcome to the Cat Café! Enjoy a purr-fect time with us!
        </div>
        <img src="/banner-image.jpeg" alt="Cat Café Banner" />
        <div className="icon-container">
          <div className="icon-item">
          <img src={one} alt="Café Logo" className="logo-icon" />
            <span className="icon-text phone">Contact no: 98287389 <br /> Gmail: catcafe@gmail.com </span>
          </div>
          <div className="icon-item">
          <img src={two} alt="Café Logo" className="logo-icon" />
            <span className="icon-text location">Location: <br /> 123, Pine Street, MeowTown </span>
          </div>
          <div className="icon-item">
          <img src={three} alt="Café Logo" className="logo-icon" />
            <span className="icon-text clock">Opening timings: <br />  Monday: closed <br />Tuesday-Sunday: 11am to 9pm</span>
          </div>
          <div className="logo">
            <img src={logo} alt="Café Logo" className="logo" />
            <span className="logo"> paws cafe </span>
          </div>
          
        </div>


      </header>

      

      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adopt" element={<AdoptionSection />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/gallery" element={<PhotoGallery />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
