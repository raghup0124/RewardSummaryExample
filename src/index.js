import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import productsReducer from './ducks/invoices';
import App from './App';
import invoiceData from './data/invoices';
import 'bootstrap/dist/css/bootstrap.css';

const rootReducer = combineReducers({
    products: productsReducer
});

let store = createStore(
    rootReducer,
    {
        products: invoiceData
    },
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // for debugging
);

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
