import React from 'react'
import './Login.css'

export default function Register() {
  return (
    <div>
      <div className="container" id='main-container'>
        <h1>Login</h1>
        <div className="box">
          <i className="fa-solid fa-envelope"></i>
          <input type="text" name="email" id="email" placeholder="Example@email.com" />
        </div>
        <div className="box">
          <i className="fa-solid fa-key"></i>
          <input type="password" name="password" id="password" placeholder="Enter Password" />
        </div>
        <button className="btn1">Sign-Up</button>
      </div>
    </div>
  )
}
