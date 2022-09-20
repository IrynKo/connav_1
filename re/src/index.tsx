import React from 'react';
import ReactDOM from 'react-dom';//react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { applyMiddleware, compose, createStore, Dispatch, Store } from 'redux';
import { Provider  } from 'react-redux';
import { rootReducer } from './redux/rootReduser';
import thunk from "redux-thunk";
import './index.css';

//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,applyMiddleware(thunk)
 // composeEnhancer(applyMiddleware(thunk)),
);


//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render(
  ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
 //| Dispatch<any>
//store.dispatch as typeof store.dispatch | Dispatch<any>

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
