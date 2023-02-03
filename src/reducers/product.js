export const products = (products=[], action) => {
    switch (action.type) {
        case "FETCH":
            return action.payload;
        case "ADD":
            return [...products, action.payload];
        case "UPDATE":
            return products.map(product => product._id === action.payload._id ? action.payload: product);
        case "DELETE":
            return products.filter(product => product._id !== action.payload._id);
        default:
            return products;
    }
}