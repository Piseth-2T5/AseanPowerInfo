import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './style.css';
import './media.css';
import { fetchProducts } from "../../actions/product";


const Products = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts());
    }, [dispatch])

    const products = useSelector(state=>state.products);
    const openProduct = (id) =>{
        navigate(`/products/${id}`)
    }
    return(

        (<div className="container-fluid">
            <div className="container overflow-hidden pb-5">
                <div className="row pt-5 pb-5">
                    <div className="col-12​">
                        <h2 className="text-center m-0">ផលិតផល</h2>
                    </div>
                </div>
                <div className="row g-5">
                    {!products[0] ?
                        <span>
                            <p className="text-center">សូមរងចាំ...</p>
                            <p className="text-center">{`(តិចជាង៣០វិនាទី)`}</p>
                        </span>
                    :
                    products.map(product =>
                    <div className="col-sm-6 col-lg-3 product" key={product._id}>
                        <div className="rounded-5 px-0 shadow bg-transparent">
                            <div className="rounded-3">
                                <img src= {product.pimage} alt="" className="card-img" />
                            </div>
                            <div className="card-body px-4">
                                <h5 className="card-title mb-2 notranslate">{product.pname}</h5>
                                <p className="card-text opacity-75 mb-2">{product.pdescription}</p>
                            </div>
                            <div className="read-more bg-light m-0 overflow-hidden" onClick={()=>openProduct(product._id)}>
                                <p className="p-4 "><i className="fa-regular fa-eye me-2"></i> អានបន្ថែម <i className="fa-solid fa-arrow-right ms-2"></i></p>
                            </div>
                        </div>
                    </div>)}
                </div>
            </div>
        </div>)
    )
}


export default Products; 