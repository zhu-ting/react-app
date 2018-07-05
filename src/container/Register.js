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

  handleRegister(){import React, { Component } from 'react';
  import { List, InputItem, Button, Radio } from 'antd-mobile';
  import App from '../App';
  import { connect } from 'react-redux';
  import { register } from '../redux/user.redux';
  import { Redirect } from 'react-router-dom'
  @connect(
    state => state.user,
    { register }
  )
  
  class Register extends Component {
    constructor(props) {
      super(props);
      this.handleRegister = this.handleRegister.bind(this)
      this.handleChange = this.handleChange.bind(this)
      this.state = {
        user: '',
        pwd: '',
        type: 'genius'
      }
    }
  
    handleChange(key, value) {
      console.log(this.state)
      this.setState({
        [key]: value
      })
    }
  
    handleRegister() {
      
      this.props.register(this.state)
    }
  
    render() {
      const RadioItem = Radio.RadioItem
      return (
        <div className="App">
        {this.props.redirectTo? <Redirect to={this.props.redirectTo}></Redirect>:null}
          <App />
          <InputItem onChange={v => this.handleChange('user', v)}>
            Username
         </InputItem>
          <InputItem onChange={v => this.handleChange('pwd', v)} type='password'>
            Password
         </InputItem>
         <List>
         <RadioItem checked={this.state.type === 'boss'} onChange={() => this.handleChange('type', 'boss')}>
            boss
          </RadioItem>
          <RadioItem checked={this.state.type === 'genius'} onChange={() => this.handleChange('type', 'genius')}>
            genius
          </RadioItem>
           </List>
          <Button onClick={() => this.handleRegister()}>Sign up</Button>
        </div>
      );
    }
  }
  
  export default Register;
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