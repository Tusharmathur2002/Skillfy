import React from 'react'

export default function Login() {
  return (
    <div>
  
    <div className="container">
        <h1>Login</h1>
        <div className="box">
            <i className="fa-solid fa-envelope"></i>
<input type="text" name="email" id="email" placeholder="Example@email.com"/>
        </div>
        <div className="box">
            <i className="fa-solid fa-key"></i>
<input type="password" name="password" id="password" placeholder="Enter Password"/>
        </div>
        <buttin className="btn">Sign-Up</buttin>
    </div>
    </div>
  )
}
