import React from 'react'
import logo from '../assets/sponsor1.png'
import logo1 from '../assets/sponsor2.png'
import logo2 from '../assets/sponsor3.png'
import logo3 from '../assets/sponsor4.png'
import logo4 from '../assets/sponsor5.png'
import logo5 from '../assets/sponsor6.png'

export default function Sponsor() {
  return (
    <div>
        <section className="sponsors">
        <div className="container">
            <div className="heading">
                <h1>Trusted by our awesome partners</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-sm">
                        <img src={logo} alt="something"/>
                    </div>
                    <div className="col-sm">
                        <img src={logo1} alt=""/>
                    </div>
                    <div className="col-sm">
                        <img src={logo2} alt=""/>
                    </div>
                    <div className="col-sm">
                        <img src={logo3} alt=""/>
                    </div>
                    <div className="col-sm">
                        <img src={logo4} alt=""/>
                    </div>
                    <div className="col-sm">
                        <img src={logo5} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div>
   
  );
}



// import React, { useState } from "react";
// import logo from '../assets/sponsor1.png'
// import logo1 from '../assets/sponsor2.png'
// import logo2 from '../assets/sponsor3.png'
// import logo3 from '../assets/sponsor4.png'
// import logo4 from '../assets/sponsor5.png'
// import logo5 from '../assets/sponsor6.png'

// const Carousel = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const items = [
//     <img src={logo} alt="something"/> ,
//     <img src={logo1} alt="something"/> ,
//     <img src={logo2} alt=""/>,
//     <img src={logo3} alt=""/>,
//     <img src={logo4} alt=""/>,
//     <img src={logo5} alt=""/>
//   ];

//   const handlePreviousClick = () => {
//     setCurrentIndex(currentIndex - 1);
//   };

//   const handleNextClick = () => {
//     setCurrentIndex(currentIndex + 1);
//   };

//   return (
//     <div className="carousel">
//       <button onClick={handlePreviousClick}><i class="fa-solid fa-arrow-left" style={{color: "#000000;"}}></i></button>
//       <div className="carousel-items">
//         {items.map((item, index) => (
//           <div
//             key={index}
//             className={currentIndex === index ? "carousel-item active" : "carousel-item"}
//           >
//             {item}
//           </div>
//         ))}
//       </div>
//       <button onClick={handleNextClick}><i class="fa-solid fa-arrow-right" style={{color: "#000000;"}}></i></button>
//     </div>
//   );
// };

// export default Carousel;