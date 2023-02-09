import React, {useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import './style.css';
import './media.css';
import { fetchProducts } from "../../actions/product";
const ProductDetail = () =>{
    const {id} = useParams();
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(fetchProducts())
    }, [dispatch])
    const product = useSelector(state=> state.products.find(p => p._id === id));
    const navigate = useNavigate();
    const goBack = () =>{
        navigate("/products");
    }
    return (
       <div className="container-fluid bg-light bg-opacity-10">
            {!product ?
                <div className="spinner-border text-secondary" role="status">
                  <span className="sr-only">Loading...</span>
                </div>
            :
            <div className="container overflow-hidden" key={product._id}>
                <div className="row">
                    <div className="col-12 position-relative">
                        <button className="cross-button" onClick={goBack}><i className="fa-solid fa-xmark"></i></button>
                    </div>
                </div>
                <div className="row mt-5 p-0">
                    <div className="col-12 col-lg-7 mt-5 mt-sm-0">
                        <img src={product.pimage} alt="" className="img-product-detail w-100 shadow rounded-5 bg-light bg-opacity-10" />
                    </div>
                    <div className="col-12  col-lg-5 pt-0 pt-lg-5">
                        <div className="content mt-0 mt-md-5 mt-5 p-2 py-4  p-sm-4 shadow bg-light bg-opacity-10 rounded-5">
                            <h4 className="heading-1 notranslate">{product.pname}</h4>
                            <p className="para-1">{product.pdescription}</p>
                            <h4 className="heading-2 notranslate">{product.heading2}</h4>
                            <p className="para-2 ">{product.description2}</p>
                            <h4 className="heading-3 notranslate">{product.heading3}</h4>
                            <p className="para-3">{product.description3}</p>
                        </div>
                    </div>
                </div>
                <div className="row mt-5 p-0">
                    {product.description4 && 
                    <div className="col-12 col-lg-6 ">
                        <div className="profit mt-0 mt-md-5 mt-0 mt-lg-5 py-4 p-2 p-sm-4 shadow bg-light bg-opacity-10 rounded-5">
                            <h4 className="list-heading notranslate">{product.heading4}</h4>
                            <ul>
                                { product.description4.split('\n').map(d => 
                                    <li className="list-item" key={`${d}`}>{d}</li>
                                )}
                            </ul>
                        </div>
                    </div>}
                    <div className="col-12 col-lg-6 mt-5 mt-sm-0">
                        <img src={product.pimage2} alt="" className="img-product-detail-2 w-100 shadow rounded-5 bg-light bg-opacity-10" />
                    </div>
                </div>
            </div>}
       </div>
    )
}


export default ProductDetail; 