import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts } from "../actions/product";

const P = () =>{
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(()=>{
        dispatch(fetchProducts());
    }, [dispatch])
    const products = useSelector(state => state.products);
    const openProduct = (id) => {
        navigate(`/products/${id}`)
   }
    return(
        <>
        { !products?
        (<div className="d-flex justify-content-center text-dark mt-5">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> ) :
        (<div className="container-fluid container-product ">
            <div className="container">
                <h1 className="heading-product">Our Products</h1>
                <div className="row container-product-2">
                    {products.map((product => 
                    <div className="product-card" key={product._id}>
                        <img src={product.pimage} alt="" className="img-card"/>
                        <div className="card-body">
                        <h3 className="card-title">{product.pname}</h3>
                        <p className="card-text">{product.pdescription}</p>
                        <p className="btn-card" onClick={()=> {openProduct(product._id)}}>Read More</p>
                    </div>
                </div>))}
                    
            </div>
        </div>
        </div>)}
        </>

    )
}

export default P; 