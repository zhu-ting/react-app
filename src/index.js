import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"
import { Provider } from "react-redux"
import { BrowserRouter, Route, Link, Redirect, Switch } from 'react-router-dom'
import Auth from "./Auth"
import Dashboard from "./Dashboard"

import { counter } from "./index.redux"

const reduxDevtools = window.devToolsExtension ? window.devToolsExtension() : null

const store = createStore(counter, compose(
  applyMiddleware(thunk),
  reduxDevtools
))
// Login
//   without login info
// Page  nav+view+logout
//   01
//   02
//   03
  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Auth}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Redirect to="./dashboard"></Redirect>
        </Switch>
      </BrowserRouter>
    </Provider>,
     document.getElementById("root"))
