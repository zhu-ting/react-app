import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'

@withRouter
class AuthRoute extends React.Component{

  componentDidMount(){
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    if(publicList.indexOf(pathname)>-1){
      return null
    }
    // user === boss or genius
    axios.get('/user/info').then(res => {
      if(res.status===200){
        if(res.data.code==0){

        }else{
          // console.log(this.props.history);
          this.props.history.push('/login')
        }
        console.log(res.data);
      }
    })
    // is login ?  current url?  finish userInfo?
  }
  render(){
    return(
      <div> AuthRoute judge </div>
    )
  }
}

export default AuthRoute
