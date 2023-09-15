import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Heropage from './components/Heropage';
import Coursesec from './components/Coursesec';
import Plaformdes from './components/Plaformdes';
import Moredesc from './components/Moredesc';
import Testimonial from './components/Testimonial';
import Sponsor from './components/Sponsor';
import Cardsec from './components/Cardsec';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
    <div>
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

