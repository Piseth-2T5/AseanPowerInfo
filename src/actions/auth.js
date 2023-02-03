import * as api from '../api/auth';

export const signin = (formData, navigate) => async (dispatch) =>{
    try {
        const {data}  = await api.signin(formData);
        dispatch({type: "AUTH", payload: data});
        navigate('/');
        window.location.reload();
    } catch (error) {
        const ERROR = error.response.data.message
        console.log(ERROR)
        dispatch({type: "ERROR", error: ERROR})
    }
}
export const signup = (formData, navigate) => async (dispatch) =>{
    try {
        const {data}  = await api.signup(formData);
        dispatch({type: "AUTH", payload: data});
        navigate('/auth-me');
        window.location.reload();
    } catch (error) {
        console.log(error)
    }
}