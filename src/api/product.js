import axios from 'axios';

const api  = axios.create({baseURL: 'https://aseanpowerinfo2.onrender.com/'});

api.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers["authorization"] = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})
export const fetchProduct = () => api.get('/products');
export const addProduct = (newProduct) => api.post('/products', newProduct);
export const updateProduct = (id, product) => api.patch(`/products/${id}`, product);
export const deleteProduct = (id) => api.delete(`/products/${id}`);



