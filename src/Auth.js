import React from "react"
import axios from "axios"
import { connect } from "react-redux"
import { getUserData } from "./Auth.redux.js"

@connect(
  state => state.auth,
  {getUserData}
)
class Auth extends React.Component{
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     data: {}
  //   }
  // }
  //
  componentDidMount(){
    this.props.getUserData()
    // axios.get("/data").then(res => {
    //   // console.log(res);
    //   if(res.status === 200){
    //     this.setState({data: res.data})
    //   }
    // })
  }

  render(){
    return(
      <div>
        <h1>Auth</h1>
        <h2>My name is {this.props.user} and age{this.props.age}</h2>
      </div>
    )
  }
}

export default Auth
