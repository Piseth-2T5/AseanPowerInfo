import React, {useEffect} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { fetchProducts } from '../actions/product';

const ProductDetail = ({productData}) =>{
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {id} = useParams();
    useEffect(()=>{
        dispatch(fetchProducts());
    }, [])
    let product;
    if(id) {product =  useSelector(state=>state.products.find(p => p._id === id))}
    else { product = productData;}
    const goBack = ()=>{
        navigate('/products');
    }
    return( 
        <>
        {!product ?
        (<div className="d-flex justify-content-center text-white">
            <div className="spinner-border" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div> 
        ) :
        (<div className="container-fluid bg-white position-relative">
            <button className='go-back' onClick={goBack}>Back</button>
            <div className="container">
                <div className="row product-detail-2">
                    <div className="col-md-6 col-lg-5 position-relative overflow-hidden">
                        <img src={product && product.pimage} alt="" className="img-detail" />
                    </div>
                    <div className="col-md-6 col-lg-7">
                        <div className="product-det-content">
                            <h3 className="heading-det-1">{product.pname}</h3>
                            <p className="para-det">{product.pdescription}</p>
                            <h3 className="heading-det-2">{product.heading2}</h3>
                            <p className="para-det">{product.description2}</p>
                            <h3 className='heading-det-1'>{product.heading3}</h3>
                            <p className='para-meaning'>{product.description3}</p>
                            
                        </div>
                    </div>
                </div>
                <div className="row">
                <div className="col-sm-6">
                    <h3 className='aventages'>{product.heading4}</h3>
                    <ul className=''>
                        {product.description4 && product.description4.split('\n').map(d => 
                            <li className="aventage" key={`${d}`}>{d}</li>
                        )}
                    </ul>
                </div>
                <div className="col-sm-6 overflow-hidden">
                    <img src={product.pimage2} alt="" className="img-detail" />
                </div>
                </div>
            </div>
        </div>)}
        </>
    )
}

export default ProductDetail;