import React from 'react'
import { TabBar } from 'antd-mobile'
import { withRouter } from
class NavLink extends React.component{
  render(){
    const navList = this.props.data.filter(v=>!v.hide)
    return(
      <TabBar>
        {navList.map(v=>(
          <TabBar.Item
            title={text}
            key={v.path}
            icon={{uri: require(`./img/${v.icon}.png`)}}
            selectedIcon={{uri: require(`./img/${v.icon}.png`)}}
            selected={pathname===v.path}
            onPress={()=>{
              this.props.history.push(v.path)
            }}
          >

          </TabBar.Item>
        ))}
      </TabBar>
    )
  }
}

export default NavLink
