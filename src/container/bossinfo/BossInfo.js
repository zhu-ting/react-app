import React from 'react'
import { NavBar, InputItem, TextareaItem, Button } from 'antd-mobile'
import { AvatarSelector } from '../../component/AvatarSelector'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

@connect(
  state => state.user,
  {update}
)
class BossInfo extends React.component{
  constructor(props){
    super(props);
    this.state = {
      title: '',
      company: '',
      money: '',
      desc: ''
    }
  }

  onChange(key, val){
    this.setState({
      [key]: val
    })
  }

  render(){
    const path = this.props.location.pathname
    const { redirectTo } = this.props
    return (
      <div>
        {redirectTo&&redirectTo!==path ?<Redirect to={this.props.redirectTo} /> :null}
        <NavBar
          mode='dark'
        >
          BossInfo Page
        </NavBar>
        {/* choose avatar */}
        <AvatarSelector selectAvatar={this.selectAvatar}></AvatarSelector>
        <InputItem onChange={v=>this.onChange('title', v)}>
          title
        </InputItem>
        <InputItem onChange={v=>this.onChange('company', v)}>
          company
        </InputItem>
        <InputItem onChange={v=>this.onChange('money', v)}>
          money
        </InputItem>
        <TextareaItem
          onChange={v=>this.onChange('desc', v)}
          rows={3}
          autoHeight
          title="requirment"
        >
          desc
        </TextareaItem>
        <Button
          type="primary"
          onClick={()=>this.props.update(this.state)}
        >
          Save
        </Button>
      </div>
    )
  }
}

export default BossInfo
