import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import reducers from './reducer'
import './config'
import Login from './container/login/Login'
import Register from './container/register/Register'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))
ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <BrowserRouter>
        <div>
          <Route path="/login" component={Login}></Route>
          <Route path="/register" component={Register}></Route>

        </div>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
