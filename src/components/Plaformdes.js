import React from 'react'
import logo from '../assets/circle2.png'
import logo1 from '../assets/circle1.png'
import logo2 from '../assets/redcircle.svg'
import logo3 from '../assets/circle3.png'
import logo4 from '../assets/circle5.png'
import logo5 from '../assets/circle6.png'
import logo6 from '../assets/circle7.png'
import logo7 from '../assets/circle.svg'

export default function Plaformdes() {
    return (
        <div>
            <section className="platformdesc">
                <img src={logo} alt="somethig" className="remote-circle" />
                <div className="container">
                    <div className="contdesc">
                        <div className="patterns">
                            <img src={logo1} alt="something" className="remotec1" />
                            <img src={logo2} alt="something" className="remotec2" />
                            <img src={logo3} alt="something" className="remotec3" />
                        </div>
                        <div className="learning">
                            <h2 className="sec-heading">Online Coaching Lessons for Remote Learning.</h2>
                            <p className="sec-desc">100% online learning from the world's best universities and companies</p>
                            <a href="./login page/login.html" className="btn-primary">Join Today</a>
                        </div>
                        <div className="patterns-right">
                            <img src={logo4} alt="something" className="remotec5" />
                            <img src={logo5} alt="something" className="remotec6" />
                            <img src={logo6} alt="something" className="remotec7" />
                            <img src={logo7} alt="something" className="remotec8" />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}
