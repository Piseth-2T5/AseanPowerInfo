import React from "react";
import { useState, useEffect } from 'react';
import Input from "./Input";
import Products from "./Products";
import Event from "./Event";

import {useDispatch , useSelector} from 'react-redux';
import { addProduct, updatedProduct } from "../actions/product";
import { addEvent, updatedEvent } from "../actions/event"; 
const Edit = ()=>{
    const dispatch = useDispatch();
    const [isproduct, setIsproduct] = useState(true);
    const [isEvent, setIsEvent] = useState(false);

    const [product, setProduct] = useState({pname: "", pcategory: "", pdescription: "", pimage: "", heading2: "", description2: "", heading3: "", description3: "", pimage2: "", heading4: "",description4: " "})
    const [productId, setProductId] = useState(null)
    const updateProduct = useSelector((state)=> productId? state.products.find(product => product._id === productId): null);
    
    useEffect(()=> { 
        if(updateProduct) setProduct(() => updateProduct)
       }, [updateProduct]);

    const handleProductSubmit = (e) =>{
        e.preventDefault();
        if (productId) {dispatch(updatedProduct(productId, product))}
        else {dispatch(addProduct(product))};
    }
    const handleProductFile = (e) =>{
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => setProduct({...product, pimage: reader.result})
    }
    const handleProductDetailFile = (e)=>{
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => setProduct({...product, pimage2: reader.result});
    }
    const clear = () =>{
        setProductId(null);
        setEventId(null);
        setProduct({pname: "", pcategory: "", pdescription: "", pimage: "", heading2: "", description2: "", heading3: "", description3: "", pimage2: "", heading4: "",description4: " "});
        setEvent({title: "", location: "", helddate: "", poster: "", description: "", createdAt: "", fbname: "", telname: "", fblink: "", tellink: "", number: ""})
    }

// event ================================

    const [event, setEvent] = useState({title: "", location: "", helddate: "", poster: "", description: "", createdAt: "", fbname: "", telname: "", fblink: "", tellink: "", number: ""})
    const [eventId, setEventId] = useState(null)
    const eventData = useSelector(state => eventId? state.events.find(event => event._id === eventId): null)
    useEffect(()=>{
        if (eventData) setEvent(eventData);
    }, [eventData])
    const handleEventSubmit = (e)=>{
        e.preventDefault();
        if (eventId) dispatch(updatedEvent(eventId, event))
        else dispatch(addEvent(event)); 

    }

    const handleEventFile= (e) =>{
        const reader = new FileReader();
        reader.readAsDataURL(e.target.files[0]);
        reader.onload = () => setEvent({...event, poster: reader.result})
    }

    const handleScroll = () =>{
        document.getElementById('form').scrollHeight();
    }
    return(
        <div className="container-fluid text-center position-relative bg-white">
            <p className="pt-4">Hello You are in edit mode right now with this power you can edit, delete, and add something in the database.</p>
            <button className={`btn btn-light ${isproduct && 'active'}`} onClick={()=>{ setIsEvent(false); setIsproduct(true)}}>Product</button>
            <button className={`btn btn-light ${isEvent && 'active'}`} onClick={()=>{ setIsEvent(true); setIsproduct(false)}}>Event</button>
            <div className="d-flex flex-row ">
            {isproduct && (<Products setProductId = {setProductId}/>)}
            {isEvent && (<Event setEventId={setEventId}/>) }
            {/* ------- product -------- */}
            {isproduct && 
            (
            <div onLoad={handleScroll}>
                <form action="" 
                    id="form"
                    className="form text-start shadow px-4 pt-2 pb-4 rounded"
                    onSubmit={handleProductSubmit}
                >
                    <h4 className="my-0 text-center">{"Product"}</h4>
                    <Input 
                        type={'text'}
                        name={"product"}   
                        label ={"Product Name"}    
                        handleChange={(e) => (setProduct({...product, pname: e.target.value}))}
                        value = {product.pname}
                    />
                    <Input 
                        type={'text'}
                        name={"category"} 
                        label ={"Product Category"} 
                        handleChange={(e) => (setProduct({...product, pcategory: e.target.value}))}
                        value = {product.pcategory}
                    />
                    <label htmlFor="" className="lebel-control mt-4">Product Description *</label>
                    <textarea  
                        type = "text"
                        onChange={(e) => (setProduct({...product, pdescription: e.target.value}))}
                        placeholder="description.."
                        className="form-control"
                        value={product.pdescription}
                    ></textarea>
                    <Input 
                        type="file" 
                        name={"Product Image"}
                        label="Product Picture"
                        handleChange={handleProductFile}
                    />
                    <div className="product-detail-a">
                        <p className=" my-2 mt-4​" type="button" data-bs-toggle="collapse" data-bs-target={`#product-detail`} aria-expanded="false" aria-controls={`#product-detail`}>
                            <span className="btn btn-secondary mt-4">Detail's Product:</span>
                        </p>
                        <div className="collapse" id={`product-detail`}>
                            <div className="" >
                                <Input
                                    type={'text'}
                                    name="heading2"
                                    label={"Heading 2"}
                                    value = {product.heading2}
                                    handleChange={(e) => (setProduct({...product, heading2: e.target.value}))}
                                />
                                <label htmlFor="" className="lebel-control mt-4">Product Description2 *</label>
                                <textarea  
                                    type = "text"
                                    onChange={(e) => (setProduct({...product, description2: e.target.value}))}
                                    placeholder="description2.."
                                    className="form-control"
                                    value={product.description2}
                                ></textarea>
                                <Input 
                                    type={'text'}
                                    name="heading3"
                                    label={"Heading 3"}
                                    value = {product.heading3}
                                    handleChange={(e) => (setProduct({...product, heading3: e.target.value}))}
                                />
                                <label htmlFor="" className="lebel-control mt-4">Product Description3 *</label>
                                <textarea  
                                    type = "text"
                                    onChange={(e) => (setProduct({...product, description3: e.target.value}))}
                                    placeholder="description3.."
                                    className="form-control"
                                    value={product.description3}
                                ></textarea>
                                <Input 
                                    type={'text'}
                                    name="Heading4"
                                    label={"Heading 3"}
                                    value = {product.heading4}
                                    handleChange={(e) => (setProduct({...product, heading4: e.target.value}))}
                                />
                                <label htmlFor="" className="lebel-control mt-4">Product Advantages *</label>
                                <textarea  
                                    type = "text"
                                    onChange={(e) => (setProduct({...product, description4: e.target.value}))}
                                    placeholder="advantages"
                                    className="form-control"
                                    value={product.description4}
                                ></textarea>
                                <Input
                                    type={'file'}
                                    name = "Product detail image"
                                    label={"Product Detail Image"}
                                    handleChange = {handleProductDetailFile}
                                    />
                            </div>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <button className="btn btn-primary me-1" type="submit">Submit</button>
                        <button className="btn btn-secondary ms-1"type='reset' onClick={clear}>Clear</button>
                    </div>
                    
                </form>
            </div>
            )}
            {/* ---------- Event ---------- */}
            {isEvent && 
            (
            <div>
                <form action="" 
                    className="form text-start shadow px-4 pt-2 pb-4 rounded"
                    onSubmit={handleEventSubmit}
                >
                <h4 className="my-0 text-center">{"Event"}</h4>
                <Input 
                    type={'text'}
                    name={"title"}   
                    label ={"Event Title"}    
                    value = {event.title}
                    handleChange={(e) =>(setEvent({...event, title: e.target.value}))}
                />
                <Input 
                    type={'text'}
                    name={"date"} 
                    label ={"Event Date"} 
                    value={event.helddate}
                    handleChange={(e) =>setEvent({...event, helddate: e.target.value})}
                />
                <Input 
                    type={'text'}
                    name={"location"} 
                    label ={"Event Location"} 
                    value = {event.location}
                    handleChange={(e)=>setEvent({...event, location: e.target.value})}
                />
                <label htmlFor="" className="lebel-control mt-4">Event Description *</label>
                <textarea  
                    value={event.description}
                    onChange={(e)=>setEvent({...event, description: e.target.value})}
                    placeholder="description.."
                    className="form-control"
                ></textarea>
                <Input
                    type={"text"}
                    name="Telegram Name"
                    label={"Telegram Name"}
                    value = {event.telname}
                    handleChange = { e => setEvent({...event, telname: e.target.value})}
                />
                <Input
                    type={"url"}
                    name="Telegram Link"
                    label={"Telegram Link"}
                    value = {event.tellink}
                    handleChange = { e => setEvent({...event, tellink: e.target.value})}
                />
                <Input
                    type={"text"}
                    name="Facebook Name"
                    label={"Facebook Name"}
                    value = {event.fbname}
                    handleChange = { e => setEvent({...event, fbname: e.target.value})}
                />
                <Input
                    type={"url"}
                    name="Facebook Link"
                    label={"Facebook Link"}
                    value = {event.fblink}
                    handleChange = { e => setEvent({...event, fblink: e.target.value})}
                />
                <Input
                    type={"text"}
                    name="phone number"
                    label={"Phone Number"}
                    value = {event.number}
                    handleChange = { e => setEvent({...event, number: e.target.value})}
                />
                <Input 
                    type='file'
                    name={'poster'}
                    label="Event Poster"
                    handleChange={handleEventFile}
                />
                <div className="mt-4 text-center">
                    <button className="btn btn-primary me-1" type="submit">Submit</button>
                    <button className="btn btn-secondary ms-1" type="reset" onClick={clear}>Clear</button>
                </div>
                </form>
            </div>
            )}
            
            </div>
        </div>
    )
}


export default Edit;