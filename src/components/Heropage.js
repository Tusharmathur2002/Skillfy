import React from 'react';
import logo from '../assets/home-img.jpg'

export default function Heropage() {
  return (
    <>
    <div>
    <div className='header'>
      <section className="home" id="home">
            <div className="container">
                <div className="row">
                    <div className="column">
                        <div className="banner">
                            <h1>Turn your ambition into a success story</h1>
                            <p>Choose from over 100,000 online video courses with new addition published every month.</p>
                            
                                <div className="input">
                                    <form action="/action_page.php">
                                        <input type="text" placeholder="Search your favourite course" name="search" className="search-area"/>
                                        <button type="submit" id="search-icon"><i className="fas fa-search"
                                                style={{color: "#ffffff"}}></i></button>
                                    </form>
                                </div>
                            
                        </div>
                        <div className="home-img">
                            <img src={logo}alt="something" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>
    </div>
    </>
  );
}
