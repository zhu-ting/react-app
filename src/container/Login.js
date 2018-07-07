import React from 'react'
import { InputItem, Button } from 'antd-mobile'
import { connect } from 'react-redux'
import App from '../App'
import { login } from '../redux/user.redux'

@connect(
  state => state.user,
  {login}
)
class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: '',
      pwd: '',
    }
  }

  handleChange(key, value){
    this.setState({
      [key]: value
    })
  }

  handleLogin(){
    this.props.login(this.state)
  }

  render() {
    return (
      <div className="App">
      <App />
      <InputItem onChange={v => this.handleChange('user', v)}>
       Username
       </InputItem>
       <InputItem onChange={v => this.handleChange('pwd', v)}>
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