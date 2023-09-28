import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Navbar() {
    let navigate = useNavigate();

    return (
        <div>
            <nav>
                <div className="logo">Skillfy</div>
                <div className="menu" id="mymenu">
                    <a href="#home">Home <i className="fa-solid fa-angle-down" style={{ color: "#212121" }} ></i></a>
                    <a href="#pages">Pages <i className="fa-solid fa-angle-down" style={{ color: "#212121" }} ></i></a>
                    <a href="#courses">Courses <i className="fa-solid fa-angle-down" style={{ color: "#212121" }} ></i></a>
                    <a href="#features">Features <i className="fa-solid fa-angle-down" style={{ color: "#212121" }} ></i></a>
                    <a href="#blog">Blog <i className="fa-solid fa-angle-down" style={{ color: "#212121" }} ></i></a>
                    <a href="#shop"> Shop <i className="fa-solid fa-angle-down" style={{ color: "#212121" }} ></i></a>
                </div>
                <div className="search-icon">
                    <i className="fas fa-search" style={{ color: "#101011" }}></i>
                </div>
                <div className="cart-icon">
                    <i className="fa-solid fa-cart-shopping" style={{ color: "#0a0a0b" }}></i>
                </div>
                <div className="register-icon">
                    <button color="primary" onClick={() => navigate('/Register')} className="px-4 btn btn-danger mt-3"> Register</button>
                </div>
            </nav>
        </div>
    )
}
