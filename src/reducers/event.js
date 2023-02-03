export const events = (events=[], action) => {
    switch (action.type) {
        case "FETCH":
            return action.payload;
        case "ADD":
            return [...events, action.payload];
        case "UPDATE":
            return events.map(event => event._id === action.payload._id ? action.payload: event);
        case "DELETE":
            return events.filter(event => event._id !== action.payload._id);
        default:
            return events;
    }
}