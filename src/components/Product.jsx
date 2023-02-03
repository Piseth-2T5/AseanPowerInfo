
import React, { useState } from "react";

import { useDispatch  } from "react-redux";
import { deleteProduct } from "../actions/product";
import ProductDetail from "./ProductDetail";


const Product = ({product, setProductId}) =>{
    const [isProductDetail, setIsProdcutDetail] = useState(false)
    const dispatch = useDispatch();
    return(
        product===""
            ?
            <div className="spinner-border" role="status">
                <span className="sr-only"></span>
            </div>
            :
        <>
            <div className="col-sm-4 mt-4" >
                <div className="product-card">
                    <div className="edit-button " >
                        <button className="btn btn-primary btn-collapse" type="button" data-bs-toggle="collapse" data-bs-target={`#edit-menu${product._id}`} aria-expanded="false" aria-controls={`#edit-menu${product._id}`}>
                            <i className="fa-solid fa-gear"></i>
                        </button>
                        <div className="collapse menu-collapse" id={`edit-menu${product._id}`}>
                            <div className="card ps-2 pt-4" >
                                <p className="text-start m-0 mt-2" onClick={()=>setProductId(()=> product._id)}>Edit</p>
                                <p className="text-start m-0 mt-2" onClick={()=>dispatch(deleteProduct(product._id))}>Delete</p>
                            </div>
                        </div>
                    </div>
                    <img src={product.pimage} alt="" className="img-card"/>
                    <div className="card-body">
                        <h3 className="card-title">{product.pname}</h3>
                        <p className="card-text">{product.pdescription}</p>
                        <p className="btn-card" onClick={()=> setIsProdcutDetail(!isProductDetail)}>Read More</p>
                    </div>
                </div>
            </div>
            {isProductDetail && <ProductDetail productData={product}/>}
        </>
    )
}
export default Product;