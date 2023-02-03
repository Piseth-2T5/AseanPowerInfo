
export const auth = (state = {authData: null}, action) => {
    switch (action.type) {
        case "ERROR":
            return action.error;
        case "AUTH": 
            localStorage.setItem('profile', JSON.stringify({...action.payload}))
            return {...state, authData: action.payload};
        case "LOGOUT": 
            localStorage.clear();
            return {...state, authData: null};
        default:
            return state; 
    }
}


