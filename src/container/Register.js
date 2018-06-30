import React, { Component } from 'react';
import { InputItem, Button } from 'antd-mobile';
import { connect } from 'react-redux';
import { register } from '../redux/user.redux';
import App from '../App';

@connect(
  state => state.user,
  {register}
)

class Register extends Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',
    }
  }

  handleChange(key, value){
    this.setState({
      [key]: value
    })
  }

  handleRegister(){
    this.props.register(this.state)
  }

  render() {
    return (
      <div className="App">
       <App />
       <InputItem onChange={v => this.handleChange('username', v)}>
       Username
       </InputItem>
       <InputItem onChange={v => this.handleChange('password', v)}>
       Password
       </InputItem>
       <Button onClick={() => this.handleRegister()}>Sign up</Button>
      </div>
    );
  }
}

export default Register;