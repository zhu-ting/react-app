// import { createStore } from "redux";
//
// function counter(state = 0, action) {
//   switch (action.type) {
//   case 'INCREMENT':
//     return state + 1
//   case 'DECREMENT':
//     return state - 1
//   default:
//     return 10
//   }
// }
//
// let store = createStore(counter);
//
// store.subscribe(() =>
//   console.log(store.getState())
// )
//
// store.dispatch({ type: 'INCREMENT' })
// // 11
// store.dispatch({ type: 'INCREMENT' })
// // 12
// store.dispatch({ type: 'DECREMENT' })
// // 11

import React from "react"
import ReactDOM from "react-dom"
import { createStore } from "redux"
import App from "./App"
import { counter } from "./index.redux"

const store = createStore(counter)

function render(){
  ReactDOM.render(<App store={store}/>, document.getElementById("root"))
}

render()
store.subscribe(render)
