import React, { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import logo from '../../assets/aplogo.jpg'
import './style.css'
import './media.css'
const Navbar = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const logout = (e)=>{
        e.preventDefault();
        setUser(null);
        dispatch({type: "LOGOUT"});
        navigate('/');
    }
    return (
        <div className={`container-fluid header bg-light`}>
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <Link className="navbar-brand heading-container" to={"/"}>
                        <img src={logo} alt="logo" className="img-navbar"/>
                        <h1 className="heading-navbar notranslate">Asean<span className="span-navbar">power</span></h1>
                    </Link>
                    <div className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <i className="fa-solid fa-bars"></i>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-lg-auto mb-2 mb-lg-0 text-center">
                            <li className="nav-item">
                                <NavLink className="nav-link " aria-current="page" to={"/"}>មាតិកា</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/products"}>ផលិតផល</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to={"/events"}>កម្មវិធី</NavLink>
                            </li>
                            {user && <li className="nav-item">
                                <NavLink className="nav-link" to={"/crud-page"}>crud</NavLink>
                            </li>}
                            {user && 
                            <li className=" user-box">
                                <div className=" user">Admin<i className="fa-regular fa-face-smile"></i> <i className="fa-solid fa-right-from-bracket log-out" onClick={logout}></i></div>
                            </li>}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
export default Navbar;