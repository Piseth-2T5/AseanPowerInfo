import React, { useEffect } from "react";
import Product from "./Product";
import { useSelector, useDispatch  } from "react-redux";
import { fetchProducts } from "../actions/product";



const Products = ({setProductId}) =>{
    const dispatch = useDispatch();
    useEffect(() =>{

        dispatch(fetchProducts())
    }, [dispatch])

    const products = useSelector(state => state.products);
    return(
        <div className="container">
            <div className="row mt-5 justify-content-center" >
            { !products.length ? (    
                <div className="spinner-border" role="status">
                    <span className="sr-only"></span>
                </div> ) : (
                <React.Fragment>
                    <div className="container-product ">
                        <div className="row container-product-2">
                        {
                            products.map((product) => (
                                <Product product={product} setProductId={setProductId} key={product._id}/>
                             ))
                        }
                        </div>
                    </div>
                </React.Fragment>
                )
            }
            </div>
        </div>
    )
}

export default Products;