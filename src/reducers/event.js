export const events = (events=[], action) => {
    switch (action.type) {
        case "FETCH_EVENTS":
            return action.payload;
        case "ADD_EVENT":
            return [...events, action.payload];
        case "UPDATE_EVENT":
            return events.map(event => event._id === action.payload._id ? action.payload: event);
        case "DELETE_EVENT":
            return events.filter(event => event._id !== action.payload._id);
        default:
            return events;
    }
}