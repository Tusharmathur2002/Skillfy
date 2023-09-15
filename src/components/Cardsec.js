import React from 'react'
import logo from '../assets/apply-crd-img.webp'

export default function Cardsec() {
  return (
    <div>
       <section className="applycard-sec">
        <div className="container">
            <div className="sec-container">
                <div className="card-list">
                    <div className="cardcolumn">
                        <div className="card-row">
                            <div className="card-img">
                                <img src={logo} alt="something"/>
                            </div>
                            <div className="card-content">
                                <h4 className="card-title">
                                    Become a Teacher
                                </h4>
                                <p className="card-more-content">Teach what you love.Coursector gives you the tools to
                                    create a course.</p>
                                <a href="#" className="card-button">Apply as teacher</a>
                            </div>
                        </div>
                    </div>
                    <div className="cardcolumn">
                        <div className="card-row">
                            <div className="card-img">
                                <img src={logo} alt="something"/>
                            </div>
                            <div className="card-content">
                                <h4 className="card-title">
                                    Coursector for Buisness
                                </h4>
                                <p className="card-more-content">Get unlimited acces to 3000+ of Coursector's top courses
                                    for your team</p>
                                <a href="#" className="card-button">Get skillfy for business</a>
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
