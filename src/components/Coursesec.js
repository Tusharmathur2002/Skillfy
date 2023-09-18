import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import logo from '../assets/card1.jpg'
import logo1 from '../assets/card2.jpg'
import logo2 from '../assets/card3.jpg'

export default function Coursesec() {
  return (
      <div> 
            <h1 className='carousel-heading'>Get choice of your course</h1>
      <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className=" w-20"
          src={logo}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>Learn Python Programming Beginner</h5>
          <div className="card-author">Nicole Brown</div>
                        <div className="card-price" style={{textDecorationLine: 'line-through'}}>$100.00</div>
                        <span className='card-real-price'>$70.00</span>
                        
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-20"
          src={logo1}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Statistics Data Science and Buisness Analysis</h5>
          <div className="card-author">Nicole Brown</div>
                        <div className="card-price" style={{textDecorationLine: 'line-through'}}>$100.00</div>
                        <span className='card-real-price'>$70.00</span>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" w-20"
          src={logo2}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Learn HTML5 programming beginning</h5>
        
          <div className="card-author">Nicole Brown</div>
                        <div className="card-price" style={{textDecorationLine: 'line-through'}}>$100.00</div>
                        <span className='card-real-price'>$70.00</span>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
