import * as api from "../api/event"

export const fetchEvents = () => async (dispatch) =>{
    try {
        const {data}  = await api.fetchEvents();
        dispatch({type: "FETCH", payload: data});
    } catch (error) {
        console.log(error);
    }
}

export const addEvent = (event) => async (dispatch) =>{
    try {
        const { data } = await api.addEvent(event);
        dispatch({type: "ADD", payload: data});
    } catch (error) {
        console.log(error);
    }
}
export const updatedEvent = (id, event) => async (dispatch) =>{
    try {
        const { data } = await api.updateEvent(id, event);
        dispatch({type: "UPDATE", payload: data});
    } catch (error) {
        console.log(error);
    }
}
export const deleteEvent = (id) => async (dispatch) =>{
    try {
        const { data } = await api.deleteEvent(id);
        dispatch({type: "DELETE", payload: data});
    } catch (error) {
        console.log(error);
    }
}