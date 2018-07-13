import React from 'react'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLinkBar from './NavLink'
import { Route, Switch } from "react-router-dom"
import Boss from './Boss'
import Genius from './Genius'
import User from './User'
import Msg from './Msg'

@connect(
  state => state
)

class Dashboard extends React.Component{

  render(){
    const { pathname } = this.props.location
    const user = this.props.user
    const navList = [
      {
        path: '/boss',
        text: 'genius',
        icon: 'boss',
        title: 'genius list',
        component: Boss,
        hide: user.type == 'genius'
      },
      {
        path: '/genius',
        text: 'boss',
        icon: 'job',
        title: 'boss list',
        component: Genius,
        hide: user.type == 'boss'
      },
      {
        path: '/msg',
        text: 'msg',
        icon: 'msg',
        title: 'msg list',
        component: Msg,
      },
      {
        path: '/me',
        text: 'me',
        icon: 'user',
        title: 'profile',
        component: User,
      },
    ]

    return(
      <div>
        {/* <NavBar mode="light" className="fixed-header">
          {navList.find(v=>v.path===pathname).title}
        </NavBar> */}
        <div style={{marginTop: 45}}>
          <Switch>
            {navList.map(v=>(
              <Route key={v.path} path={v.path} component={v.component}></Route>
            ))}
          </Switch>
        </div>
        <NavLinkBar data={navList}></NavLinkBar>
      </div>
    )
  }
}

export default Dashboard