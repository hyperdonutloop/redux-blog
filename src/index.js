import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import postReducer from './reducers/postReducer.js';

const store = createStore(postReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
document.getElementById('root'));


// the Provider uses React context which allows you to pass the store object to any components that need to access it without having to pass props.
// When we wrap the APP component (the parent) with the Provider, all child components get access to the store