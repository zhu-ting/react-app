import React, { Component } from 'react';
import { Button, WingBlank, WhiteSpace } from "antd-mobile";
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { login } from '../../redux/user.redux'

@connect(
  state => state.user,
  {login}
)

class Login extends Component {
  constructor(props){
    super(props);
    this.register = this.register.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.state = {
      user: '',
      password: ''
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

  handleLogin(){
    this.props.login(this.state)
  }

  render() {
    return (
      <div className="App">
        {this.props.redirectTo?<Redirect to={this.props.redirectTo} />:null}
        {this.props.msg?<p className="err">{this.props.msg}</p>:null}
        <WingBlank>

          <WhiteSpace />
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
          <Button type="primary" onClick={this.handleLogin}>Sign in</Button>
          <WhiteSpace />
          <Button onClick={this.register}>Sign up</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Login;
