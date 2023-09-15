import React from 'react'
import logo from '../assets/user.webp'
import logo1 from '../assets/user1.webp'
import logo2 from '../assets/star.svg'

export default function Testimonial() {
  return (
    <div>
   
    <section className="testimonial">
        <div className="container">
            <div className="heading">
                <h1>What our students have to say</h1>
            </div>
        
            {/* <!-- content section --> */}
            <div className="contentsec">
                <div className="activetest">
                    <div className="testitem">
                        <div className="innertest">
                            <div className="profile">
                                <div className="aboutprofile">
                                    <img src={logo1} alt="surrounding"/>
                                    <div className="profileinfo">
                                        <h1>Themadbrains</h1>
                                        <span>Student</span>
                                    </div>
                                </div>
                                <div className="rating">
                                    <img src={logo2} alt="ratings"/>
                                    <img src={logo2} alt="ratings"/>
                                    <img src={logo2} alt="ratings"/>
                                    <img src={logo2} alt="ratings"/>
                                    <img src={logo2} alt="ratings"/>
                                </div>

                            </div>
                            <div className="testtext">
                                <i>Skillfy is a life saver. I don't have the time/money for a college education.My goal
                                    is to become a freelace web devloper, and thanks to Skillfy</i>.
                            </div>
                        </div>
                    </div>
                </div>
                <div className="secondtest">
                    <div className="testitem2">
                        <div className="innertest2">
                            <div className="profile2">
                                <div className="aboutprofile2">
                                    <img src={logo} alt="surroundings"/>
                                    <div className="profileinfo2">
                                        <h1>UIUX Designer</h1>
                                        <span>Student</span>
                                    </div>
                                </div>
                                <div className="rating2">
                                    <img src={logo2} alt="ratings"/>
                                    <img src={logo2} alt="ratings"/>
                                    <img src={logo2} alt="ratings"/>
                                    <img src={logo2} alt="ratings"/>
                                    <img src={logo2} alt="ratings"/>
                                </div>

                            </div>
                            <div className="testtext2">
                                <i>Skillfy is a life saver. I don't have the time/money for a college education.My goal
                                    is to become a freelace web devloper, and thanks to Skillfy</i>.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    </div>
  )
}
