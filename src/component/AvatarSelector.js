import React from 'react'
import { Grid } from 'antd-mobile'

class AvatarSelector extends React.component{

  render(){
    const avatarList = 'a,b,c,d,e,f,g,i,j,k'.split(',').map(v=>({
      icon: require(`../img/${v}.png`),
      text: v
    }))
    const gridHeader = this.state.text ?
      (<div>
        <span>selected
          <img src={this.state.icon}></img>
        </span>
      </div>) : <div>Please select avatar</div>
    return (
      <div>
        <List renderHeader={() => gridHeader}>
          <Grid
            data={avatarList}
            columnNum={5}
            onClick={elm=>{
              this.setState(elm)
              this.props.selectAvatar(elm.text)
            }}
         />
        </List>
      </div>
    )
  }
}

export default AvatarSelector
