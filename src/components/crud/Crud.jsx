import React, {useState, useEffect} from "react";
import { useDispatch , useSelector } from "react-redux";
import FormProduct from "../form/FormProduct";
import FormEvent from "../form/FormEvent";
import TableProduct from "../table/TableProduct";
import {addEvent, fetchEvents, updatedEvent} from '../../actions/event'
import {addProduct, fetchProducts, updatedProduct} from '../../actions/product'

import './style.css'
import TableEvent from "../table/TableEvent";

const Crud = () =>{
    const [swicher, setSwicher] = useState(false);
    const [hide, setHide] = useState(true);
    const [product, setProduct] = useState({pname: "", pcategory: "", pdescription: "", pimage: "", heading2: "", description2: "", heading3: "", description3: "", pimage2: "", heading4: "",description4: ""})
    const [event, setEvent] = useState({title: "", location: "", helddate: "", poster: "", description: "", createdAt: "", fbname: "", telname: "", fblink: "", tellink: "", number: ""})
    const [pid, setPid] = useState(null);
    const [eid, setEid] = useState(null);
    const dispatch = useDispatch();
    useEffect(()=>{
        !swicher?dispatch(fetchEvents()) :dispatch(fetchProducts())}
    , [dispatch, swicher])
    const products = useSelector(state => state.products);
    const events = useSelector(state=> state.events);
    const handleSubmit = (e) =>{
        e.preventDefault();
        if (pid) dispatch(updatedProduct(pid, product))
        else dispatch(addProduct(product));
        if (eid) dispatch(updatedEvent(eid, event))
        else dispatch(addEvent(event));
    }

    return(
    <>
        <div className="container-fluid bg-dark bg-opacity-10">
            {swicher && !hide && <FormProduct product = {product} setProduct = {setProduct} handleSubmit= {handleSubmit} setPid={setPid}/>}
            {!swicher && !hide && <FormEvent event = {event} setEvent = {setEvent} handleSubmit= {handleSubmit} setEid={setEid}/>}
        </div> 
        <div className="container-fluid">
            <div className="container">
                <div className="controller pt-4">
                    <button 
                        className={`p-1 px-4  border-0 rounded me-2 ${swicher? "text-white bg-primary": "text-black bg-light"}`}
                        onClick={()=> (setSwicher(true))}>Products
                        <i className="fa-solid fa-cart-shopping ms-2"></i>
                    </button>
                    <button 
                        className={`p-1 px-4  border-0 rounded me-2 ${!swicher? "text-white bg-primary": "text-black bg-light"}`}
                        onClick={()=> (setSwicher(false))}>Events 
                        <i className="fa-solid fa-calendar-days ms-2"></i>
                    </button>
                    <button className="text-white bg-primary p-1 px-4 border-0 rounded me-2" onClick={()=> setHide(false)}>Add 
                        <i className="fa-solid fa-plus ms-2"></i>
                    </button>
                    <button className={`p-1 px-4 border-0 rounded ${hide? "bg-primary text-white" : "bg-warning text-dark"}`} onClick={()=> setHide(!hide)}>{hide? "Show" : "Hide"} </button>

                </div>
                {swicher ? 
                    <TableProduct setSwicher = {setSwicher} setHide = {setHide} products = {products} setPid = {setPid} setProduct = {setProduct}/>
                :
                    <TableEvent setSwicher = {setSwicher} setHide = {setHide} events = {events} setEid = {setEid} setEvent = {setEvent}/>
                }
            </div>
        </div>       
    </>
    )
}



export default Crud;