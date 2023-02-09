import axios from "axios";
import { connection_url } from './url';
const api  = axios.create({baseURL: connection_url});




export const signin = (formData) => api.post('/admins/signin', formData);
export const signup = (formData) => api.post('/admins/signup', formData);