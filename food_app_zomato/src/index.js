import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import { applyMiddleware,createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import { Provider } from 'react-redux';
import reducer from "./reducer/Reducer"
import rootSaga from './sagas/index';
import App from './App';
  
const sagaMiddleware=createSagaMiddleware()
const store=createStore(reducer,applyMiddleware(sagaMiddleware))
sagaMiddleware.run(rootSaga)
 console.log(  store)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Provider store={store}>
    <App />
  </Provider>
);


