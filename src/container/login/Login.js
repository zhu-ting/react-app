import React, { Component } from 'react';
import { Button, WingBlank, WhiteSpace } from "antd-mobile";

class Login extends Component {
  constructor(props){
    super(props);
    this.register = this.register.bind(this)

  }

  register() {
    this.props.history.push('/register')
  }

  render() {
    return (
      <div className="App">
        <WingBlank>
          <WhiteSpace />
          <Button type="primary">Sign in</Button>
          <WhiteSpace />
          <Button onClick={this.register}>Sign up</Button>
        </WingBlank>
      </div>
    );
  }
}

export default Login;
