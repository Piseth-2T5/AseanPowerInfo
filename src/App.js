import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import ProductDetail from "./components/product_detail/ProductDetail";
import Products from "./components/products/Products";
import Events from "./components/events/Events";
import EventDetail from "./components/event_detail/EventDetail";
import Crud from './components/crud/Crud';



import './style.css';
import './media.css';
import Login from "./components/login/Login";

const App = () =>{
    const user = JSON.parse(localStorage.getItem('profile'))
    return(
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/products" element={<Products/>}/>
                <Route exact path="/events" element={<Events/>}/>
                <Route exact path="/products/:id" element={<ProductDetail/>}/>
                <Route exact path="/events/:id" element={<EventDetail/>}/>
                {user && <Route exact path="/crud-page" element={<Crud/>}/>}
                <Route exact path="/auth" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App;