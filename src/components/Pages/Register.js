import React from 'react'
import './Login.css'


export default function Register() {
  return (
    <section className="body1">
      <div className="container1" >
        <h1>Login</h1>
        <form action=''>
          <div className="box">
            <i className="fa-solid fa-envelope"></i>
            <input type="text" name="email" id="email" placeholder="Example@email.com" />
          </div>
          <div className="box">
            <i className="fa-solid fa-key"></i>
            <input type="password" name="password" id="password" placeholder="Enter Password" />
          </div>
          <button className="btn1">Sign-Up</button>
        </form>
      </div>
    </section >
  )
}
