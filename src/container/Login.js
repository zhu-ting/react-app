import React from 'react';
import { InputItem, Button } from 'antd-mobile'
import App from '../App';

class Login extends React.Component {
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
    console.log("login")
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
       <Button onClick={() => this.handleLogin()}>Sign in</Button>
       <div onClick={() => this.props.history.push('/register')}>
       Don't have an account? Sign up
       </div>
      </div>
    );
  }
}

export default Login;