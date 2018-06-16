import React, { Component } from 'react';
import { List, InputItem, Radio, Button } from "antd-mobile";
const RadioItem = Radio.RadioItem;

class Register extends Component {
  constructor(props){
    super(props);
    this.register = this.register.bind(this)
    this.state = {
      type: 'genius',
    }

  }

  register() {
    this.props.history.push('/register')
  }

  render() {
    return (
      <div className="App">
        <List>
          <InputItem>Username</InputItem>
          <InputItem>Password</InputItem>
          <InputItem>Congirm</InputItem>
          <RadioItem checked={this.state.type==='genius'}>
            Genius
          </RadioItem>
          <RadioItem checked={this.state.type==='boss'}>
            Boss
          </RadioItem>
          <Button type="primary">Sign up</Button>
        </List>
      </div>
    );
  }
}

export default Register;
