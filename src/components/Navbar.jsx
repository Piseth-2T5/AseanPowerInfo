import React, { useState } from "react";
import {NavLink , useNavigate} from 'react-router-dom';
import { useDispatch } from "react-redux";

import logo from '../assets/aplogo.jpg'
const Navbar = () =>{
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = (e) =>{
        e.preventDefault();
        setUser(null);
        dispatch({type: "LOGOUT"});
        navigate('/');
    }
    const openHome = ()=>{
        navigate('/')
    }
    return(

        <div className="container">
     <nav className="navbar navbar-expand-lg">
            <div className="container-logo" onClick={openHome}>
                <img src={logo} alt="" className="img-navbar" />
                <h1 className="logo-heading">Asean<span className="logo-span">Power</span></h1>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav navbar-collapse-ul " id="navbarSupportedContent">
                    <li className="nav-item ">
                        <NavLink className={`nav-link `} to={"/"}>Home</NavLink>
                    </li>
                   
                    <li className="nav-item" >
                        <NavLink className={`nav-link `} to={"/products"}>Products</NavLink>
                    </li>
                    <li className="nav-item" >
                        <NavLink className={`nav-link `} to={"/events"}>Events</NavLink>
                    </li>
                 {  user && <li className="nav-item">
                        <NavLink className={`nav-link `} to={"/editpage"}>EDIT</NavLink>
                    </li>}
                    {user && 
                        (<div className="user-box">
                            <p className="me-2 user-name"><span className="user-span"><i className="fa-solid fa-user"></i></span>{" Admin"} </p> 
                            <button className="btn-user" onClick={handleLogout} >Log out</button>
                        </div>
                           
                    )}
                </ul>
                
            </div>
    </nav>
         </div>
    )
}


export default Navbar;