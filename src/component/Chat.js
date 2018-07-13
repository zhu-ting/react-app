import React from 'react';
import io from 'socket.io-client';
import { List, InputItem } from 'antd-mobile';
import Input from 'antd-mobile/lib/input-item/Input';
const socket = io('ws://localhost:7000')

class Chat extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text: '',
            msg: []
        }
    }

    componentDidMount(){
       socket.on('recvmsg', (data) => {
           console.log(data)
           this.setState({
               msg: [...this.state.msg, data.text]
           })
       })
    }

    handleSubmit(){
        socket.emit('sendmsg', {text: this.state.text})
        this.setState({text: ''})
    }
   render(){
       return (
           <div>
               {this.state.msg.map(v => {
                   return <p key={v}>{v}</p>
               })}
               <List>
                   <InputItem
                     placeholder='please input'
                     value={this.state.text}
                     onChange={v=>{this.setState({text:v})}}
                     extra={<span onClick={() => this.handleSubmit}>Submit</span>}
                  >
                  </InputItem>
               </List>
           </div>
       )
   }
}

export default Chat;