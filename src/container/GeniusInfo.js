import React, { Component } from 'react';
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile';
import AvatarSelector from '../component/AvatarSelector';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { update } from '../redux/user.redux';

@connect(
  state => state.user,
  {update}
)
class GeniusInfo extends Component {
  constructor(props){
    super(props);
    this.state = {
      title: '',
      title: ''
    }
  }

  handleChange(key, value){
    this.setState({
      [key]: value
    })
  }

  render() {
    const path = this.props.location.pathname
    const redirect = this.props.redirectTo
    return (
      <div>
        {redirect&&redirect!==path?
        <Redirect to={this.props.redirectTo}></Redirect>: null}

        <NavBar mode="dark">Genius info to complete</NavBar>
       <AvatarSelector
         selectAvatar={(imgname) => {this.setState({avatar: imgname})}}
       ></AvatarSelector>
      
       <InputItem onChange={v => this.handleChange('title', v)}>
       title
       </InputItem>
       <TextareaItem
        title="experience"
        row={3}
        autoHeight
        onChange={v => this.handleChange('desc', v)}>
       </TextareaItem>
       <Button type="primary" onClick={() => this.props.update(this.state)}>Save</Button>
      </div>
      
    );
  }
}

export default GeniusInfo;