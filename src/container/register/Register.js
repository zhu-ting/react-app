import React, { Component } from 'react';
import { List, InputItem, Radio, Button } from "antd-mobile";
import { connect } from 'react-redux'
import { register } from '../../redux/user.redux'

const RadioItem = Radio.RadioItem;

@connect(
  state => state.user,
  {register}
)
class Register extends Component {
  constructor(props){
    super(props);
    this.register = this.register.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleRegister = this.handleRegister.bind(this)
    this.state = {
      type: 'genius',
      user: '',
      password: '',
      repassword: '',
    }

  }

  register() {
    this.props.history.push('/register')
  }

  handleChange(key, val){
    this.setState({
      [key]: val
    })
  }
  handleRegister(){
    this.props.register(this.state)
  }

  render() {
    return (
      <div className="App">
        <List>
          {this.props.msg?<p className="err">{this.props.msg}</p>:null}
          <InputItem
            onChange={v => this.handleChange('user', v)}
          >
            Username
          </InputItem>
          <InputItem
            type="password"
            onChange={v => this.handleChange('password', v)}
          >
              Password
          </InputItem>
          <InputItem
            type="password"
            onChange={v => this.handleChange('repassword', v)}
          >
              Congirm
          </InputItem>
          <RadioItem
            checked={this.state.type==='genius'}
            onChange={() => this.handleChange('type', 'genius')}
          >
            Genius
          </RadioItem>
          <RadioItem
            checked={this.state.type==='boss'}
            onChange={() => this.handleChange('type', 'boss')}
          >
            Boss
          </RadioItem>
          <Button type="primary" onClick={this.handleRegister}>Sign up</Button>
        </List>
      </div>
    );
  }
}

export default Register;
