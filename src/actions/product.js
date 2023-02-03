import * as api from "../api/product"

export const fetchProducts = () => async (dispatch) =>{
    try {
        const {data}  = await api.fetchProduct();
        dispatch({type: "FETCH", payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const addProduct = (product) => async (dispatch) =>{
    try {
        const { data } = await api.addProduct(product);
        dispatch({type: "ADD", payload: data});
    } catch (error) {
        console.log(error);
    }
}
export const updatedProduct = (id, product) => async (dispatch) =>{
    try {
        const { data } = await api.updateProduct(id, product);
        dispatch({type: "UPDATE", payload: data});
    } catch (error) {
        console.log(error);
    }
}
export const deleteProduct = (id) => async (dispatch) =>{
    try {
        const { data } = await api.deleteProduct(id);
        dispatch({type: "DELETE", payload: data});
    } catch (error) {
        console.log(error);
    }
}