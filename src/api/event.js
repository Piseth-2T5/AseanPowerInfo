import axios from 'axios';

const api  = axios.create({baseURL: 'https://aseanpowerinfo2.onrender.com/'});

api.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers["authorization"] = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
})
export const fetchEvents = () => api.get('/events');
export const addEvent = (newEvent) => api.post('/events', newEvent);
export const updateEvent = (id, event) => api.patch(`/events/${id}`, event);
export const deleteEvent = (id) => api.delete(`/events/${id}`);



