import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Login from './container/Login'
import Register from './container/Register'
import BossInfo from './container/BossInfo'
import GeniusInfo from './container/GeniusInfo'
import reducers from './reducer'
import './config'
import AuthRoute from './component/AuthRoute';

const store = createStore(reducers, applyMiddleware(thunk))

// https://github.com/ReactTraining/react-router/blob/master/packages/react-router/docs/api/Switch.md

ReactDOM.render(
  <Provider store={store}>
      <BrowserRouter>
        <div>
            {/* <Switch> */}
                <AuthRoute></AuthRoute>
                <Route path="/login" exact component={Login}></Route>
                <Route path="/register" component={Register}></Route>
                <Route path="/bossinfo" component={BossInfo}></Route>
                <Route path="/geniusinfo" component={GeniusInfo}></Route>
                <Redirect to="/login"></Redirect>
            {/* </Switch> */}
        </div>
      </BrowserRouter>
  </Provider>
, document.getElementById('root'));
registerServiceWorker();
