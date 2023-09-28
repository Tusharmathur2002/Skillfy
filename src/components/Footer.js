import React from 'react'
import logo from '../assets/sociallogo1.png'
import logo1 from '../assets/sociallogo2.png'
import logo2 from '../assets/sociallogo3.png'
import logo3 from '../assets/sociallogo4.png'

export default function Footer() {
    return (
        <>
            <div>
                <section className="footer">
                    <div className="container">
                        <div className="row1">
                            <div className="col-sm">
                                Company
                            </div>
                            <div className="col-sm">
                                Community
                            </div>
                            <div className="col-sm">
                                Teaching
                            </div>
                            <div className="col-sm">
                                Support
                            </div>
                        </div>
                        <div className="row2">
                            <div className="col-sm1">
                                <a href="About">About</a>
                                <a href="Careers">Careers</a>
                                <a href="Press">Press</a>
                                <a href="Blog">Blog</a>
                                <a href="Affilates">Affilates</a>
                            </div>

                            <div className="col-sm2">
                                <a href="premium">Go premium</a>
                                <a href="plans">Team Plans</a>
                                <a href="Refrel">Refer a friend</a>
                                <a href="giftcard">Gift Cards</a>
                                <a href="Scholarship">Scholarships</a>
                                <a href="free class">Free Classes</a>

                            </div>

                            <div className="col-sm3">
                                <a href="premium">Became a Teacher</a>
                                <a href="plans">Taching Academy</a>
                                <a href="Refrel">Teacher Handbook</a>
                                <a href="giftcard">Partnerships</a>

                            </div>

                            <div className="col-sm4">
                                <a href="premium">Support</a>
                                <a href="plans">Contact Us</a>
                                <a href="Refrel">System requirements</a>
                                <a href="giftcard">Register Activation Key</a>
                                <a href="Scholarship">Site feedback</a>

                            </div>
                        </div>
                        <hr />
                        <h5 className="copyright">©️2015-2023 Skillfy Education Private Limited. All rights reserved

                        </h5>
                        <div className="sociallinks">
                            <a href="www.facebook.com"><img src={logo} alt="facebook link" /></a>
                            <a href="www.twitter.com"><img src={logo1} alt="facebook link" /></a>
                            <a href="www.google.com"><img src={logo2} alt="facebook link" /></a>
                            <a href="www.instagram.com"><img src={logo3} alt="facebook link" /></a>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
