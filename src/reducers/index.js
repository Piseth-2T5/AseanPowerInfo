import { combineReducers } from "redux";
import { products  } from "./product";
import { events } from './event';
import { auth } from "./auth";

const reducers = combineReducers({products, events, auth});

export default reducers;