import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, compose, applyMiddleware  } from 'redux';
import { Provider} from 'react-redux';
import Thunk from 'redux-thunk';

import reducers from './reducers/index';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"
import App from './App';

let store = createStore(reducers, compose(applyMiddleware(Thunk)))

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <App />
    </Provider>
)

