import React from 'react'
import axios from 'axios'
import { getUserList } from '../../redux/chatuser.redux'
import { connect } from 'react-redux'
import Usercard from './Usercard'

@connect(
  state => state.chatuser,
  { getUserList }
)

class Genius extends React.Component{

  componentDidMount(){
    this.props.getUserList('boss')
  }

  render(){
    return <Usercard userlist={this.props.userlist}></Usercard>
  }
}

export default Genius
