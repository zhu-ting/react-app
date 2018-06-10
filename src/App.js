import React from "react"
import { increase, decrease } from "./index.redux"

class App extends React.Component{

  render(){
    const store = this.props.store
    const num = store.getState()
    return(
      <div>
        <h1>Current{num}</h1>
        <button onClick={()=>store.dispatch(increase())}>addOne</button>
        <button onClick={()=>store.dispatch(decrease())}>minusOne</button>
      </div>
    )
  }
}

export default App
