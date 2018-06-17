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
// import './config'
import Login from './container/login/Login'
import Register from './container/register/Register'
import AuthRoute from './component/authrouter/AuthRoute'
import BossInfo from './container/bossinfo/BossInfo'
import GeniusInfo from './container/bossinfo/GeniusInfo'
import Dashboard from './component/Dashboard'

const store = createStore(reducers, compose(
  applyMiddleware(thunk),
  window.devToolsExtension?window.devToolsExtension():f=>f
))

// boss genius me msg
ReactDOM.render(
  <Provider store={store}>
    <div>
      <App />
      <BrowserRouter>
        <div>
          <AuthRoute></AuthRoute>
          <Switch>
            <Route path="/bossinfo" component={BossInfo}></Route>
            <Route path="/geniusinfo" component={GeniusInfo}></Route>
            {/* <Route path="/boss" component={Boss}></Route> */}
            <Route path="/login" component={Login}></Route>
            <Route path="/register" component={Register}></Route>
            <Route component={Dashboard}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
