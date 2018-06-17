import React from 'react'
import axios from 'axios'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'
import { getUserList } from '../../redux/chatuser.redux'
import { connect } from 'react-redux'
import Usercard from './Usercard'

@connect(
  state => state.chatuser,
  { getUserList }
)

class Boss extends React.Component{

  componentDidMount(){
    this.props.getUserList('genius')
  }

  render(){
    return <Usercard userlist={this.props.userlist}></Usercard>
  }
}

export default Boss
