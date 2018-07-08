import React from 'react'
import axios from 'axios'
import { withRouter } from 'react-router-dom'
import { loadData } from '../redux/user.redux'
import { connect } from 'react-redux'

@withRouter
@connect(
	null,
	{loadData}
)
// to check if the route works, get userinfo and go to the right page
@withRouter
class AuthRoute extends React.Component{

  componentDidMount(){
    const publicList = ['/login', '/register']
    const pathname = this.props.location.pathname
    if(publicList.includes(pathname)){
      return null
    }
    // user === boss or genius
    axios.get('/user/info').then(res => {
      if(res.status===200){
        if(res.data.code==0){
          this.props.loadData(res.data.data)
        }else{
          this.props.history.push('/login')
        }
        console.log(res.data);
      }
    })
    // is login ?  current url?  finish userInfo?
  }
  render(){
    return null
  }
}

export default AuthRoute