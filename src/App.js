import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import News from "./components/News";
import ProductDetail from "./components/ProductDetail";
import EventDetail from "./components/EventDetail";
import Edit from "./components/Edit"
import P from "./components/P";
import Login from "./components/Login";
import Contact from "./components/Contact";


import './style.css'
import './media.css'

const App = () =>{
    const user = JSON.parse(localStorage.getItem('profile'))

    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/products" element={<P/>}/>
                <Route exact path="/events" element={<News/>}/>
                <Route exact path="/events/:id" element={<EventDetail/>}/>
                <Route exact path="/products/:id" element={<ProductDetail/>}/>
                <Route exact path="/contact" element={<Contact/>}/>
                {user && <Route exact path='/editpage' element={ <Edit/>}/>}
                <Route exact path="/auth-me" element={ <Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;