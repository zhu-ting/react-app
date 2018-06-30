import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Login from './container/Login'
import Register from './container/Register'
import BossInfo from './container/BossInfo'
import GeniusInfo from './container/GeniusInfo'
import reducers from './reducer'

const store = createStore(reducers, applyMiddleware(thunk))
ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <div>
            <Switch>
                <Route path="/login" component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/bossinfo" component={BossInfo}></Route>
                <Route path="/geniusinfo" component={GeniusInfo}></Route>
            </Switch>
        </div>
      </BrowserRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
