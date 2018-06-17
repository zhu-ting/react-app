import React from 'react'
import { connect } from 'react-redux'
import { NavBar } from 'antd-mobile'
import NavLinkBar from '../component/NavLink'
import { Switch } from 'react-redux'
import Boss from '../../component/Boss'
import Genius from '../../component/Genius'

@connect(
  state => state
)

class Dashboard extends React.Component{

  render(){
    const { pathname } = this.props.location
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
        icon: 'genius',
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
        icon: 'me',
        title: 'profile',
        component: User,
      },
    ]
    return(
      <div>
        <NavBar mode="dark" className="fixed-header">
          {navList.find(v=>v.path==pathname).title}
        </NavBar>
        <div style={{marginTop: 45}}>
          <Switch>
            {navList.map(v=>(
              <Route key={v.path} path={v.path} component={v.component}></Route>
            ))}
          </Switch>
        </div>
        <NavLinkBar />
      </div>
    )
  }
}

export default Dashboard
