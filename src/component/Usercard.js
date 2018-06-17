import React from 'react'
import { Card, WhiteSpace, WingBlank } from 'antd-mobile'

class Usercard extends React.Component{
  render(){
    return(
      <WingBlank>
        {this.state.data.map(v=>(
          v.avatar?<Card key={v._id}>
            <Card.Header
              title={v.user}
              thumb={require(`../img/${v.avatar}.png`)}
              extra={<span>{v.title}</span>}
            >
              <Card.Body>
                {v.type==='boss'?<div>company:{v.company}</div>:null}
                {v.desc.split('\n').map(v=>(
                  <div key={v}>{v}</div>
                ))}
                {v.type==='boss'?<div>wage:{v.money}</div>:null}
              </Card.Body>
            </Card.Header>
          </Card>:null
        ))}
      </WingBlank>
    )
  }
}

export default Usercard
