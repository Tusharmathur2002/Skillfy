import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Loginpage from './components/Pages/Loginpage';
import Heropage from './components/Heropage';
import Coursesec from './components/Coursesec';
import Plaformdes from './components/Plaformdes';
import Moredesc from './components/Moredesc';
import Testimonial from './components/Testimonial';
import Sponsor from './components/Sponsor';
import Cardsec from './components/Cardsec';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
    <div>  
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="login" element={<Loginpage />} />
        </Route>
      </Routes>
    </BrowserRouter>
      <Navbar/>
      <Heropage/>
      <Coursesec/>
      <Plaformdes/>
      <Moredesc/>
      <Testimonial/>
      <Sponsor/>
      <Cardsec/>
      <Footer/>
    </div>
    </>
  );
};

