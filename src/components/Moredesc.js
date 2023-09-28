import React from 'react'
import logo from '../assets/projectdescpic.webp'

export default function Moredesc() {
    return (
        <div>
            <section className="platform-moredesc">
                <div className="container">
                    <div className="content-row" style={{ alignItems: 'center', display: 'flex', flexWrap: 'wrap' }}>
                        <div className="heading">
                            <h1>Know about learning learning platform</h1>
                            <p>With our growing catalog of over 30 Nanodegree programs from beginner to advanced, you're sure to
                                find one that fits your career goals</p>
                            <div className="points"> <i className="far fa-check-square" style={{ color: "#4dcbb5" }}></i>
                                <h6>Free E-book, Video & Consolation</h6>
                                <i className="far fa-check-square" style={{ color: "#4dcbb5" }}> </i>
                                <h6>Top instructors for your team</h6>
                                <i className="far fa-check-square" style={{ color: "#4dcbb5" }}></i>
                                <h6> Top courses for your team</h6>
                            </div>
                        </div>
                        <div className="registerbtn">
                            <a href="login page/login.html">Start learning now</a>
                        </div>
                        <div className="picture">
                            <img src={logo} alt="something" className="projectdescpic" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
