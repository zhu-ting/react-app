import React from "react"
import { connect } from "react-redux"
import { increase, decrease, asyncIncrease } from "./index.redux.js"

const mapStateToProps = (state) => {
  return { num: state}
}

const actionCreators = { increase, decrease, asyncIncrease }

@connect(mapStateToProps, actionCreators)
class App extends React.Component{

  render(){
    const {num,increase,decrease,asyncIncrease} = this.props
    return(
      <div>
        <h1>Current{num}</h1>
        <button onClick={increase}>addOne</button>
        <button onClick={decrease}>minusOne</button>
        <button onClick={asyncIncrease}>asyncIncrease</button>
      </div>
    )
  }
}

// App = connect(mapStateToProps, actionCreator)(App)
export default App
