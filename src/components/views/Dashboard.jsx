import React from 'react'
import Navbar from '../Navbar/Navbar';
import Heropage from '../Heropage'
import Coursesec from '../Coursesec';
import Plaformdes from '../Plaformdes';
import Moredesc from '../Moredesc';
import Testimonial from '../Testimonial';
import Sponsor from '../Sponsor';
import Cardsec from '../Cardsec';
import Footer from '../Footer';


export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Heropage />
      <Coursesec />
      <Plaformdes />
      <Moredesc />
      <Testimonial />
      <Sponsor />
      <Cardsec />
      <Footer />
    </div>
  )
}
