import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './container/Login'
import Register from './container/Register'
import BossInfo from './container/BossInfo'
import GeniusInfo from './container/GeniusInfo'
import Dashboard from './component/Dashboard'

import reducers from './reducer'
import './config'
import AuthRoute from './component/AuthRoute'
import './index.css'

// Not store found  https://github.com/zalmoxisus/redux-devtools-extension/issues/126#issuecomment-222605604
const store = createStore(reducers, compose(
	applyMiddleware(thunk),
	window.devToolsExtension ? window.devToolsExtension() : f => f
))

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <div>
          
            <AuthRoute></AuthRoute>
            <Switch>
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route path="/bossinfo" component={BossInfo}></Route>
            <Route path="/geniusinfo" component={GeniusInfo}></Route>
            <Route component={Dashboard}></Route>
          </Switch>
        </div>
      </BrowserRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
