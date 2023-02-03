import axios from "axios";

const api  = axios.create({baseURL: 'https://aseanpowerinfo2.onrender.com/'});




export const signin = (formData) => api.post('/admins/signin', formData);
export const signup = (formData) => api.post('/admins/signup', formData);