import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-material-design/dist/css/bootstrap-material-design.css';

import { createStore } from 'redux';
import { Provider } from 'react-redux'
import app from './reducers'

const store = createStore(app);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
