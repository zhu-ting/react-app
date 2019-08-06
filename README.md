Redux 101

通过https://github.com/facebook/create-react-app  新建项目，安装redux后修改index.js

1 首先通过createStore新建store，随时通过store.getState获取状态

所以这里打印初始状态是10
```
// index.js
import { createStore } from "redux";

function counter(state=0, action){
   switch(action.type){
       case '加1': return state+1;
       case '减1': return state-1;
       default: return 10
    }
} 

const store = createStore(counter);

const init = store.getState();
console.log(init);  // 10
```
2 Reducer 函数接收 state 和 action 返回新的state

状态变更store.dispatch(action) 来修改

```
import { createStore } from "redux";

function counter(state=0, action){
   switch(action.type){
       case '加1': return state+1;
       case '减1': return state-1;
       default: return 10
    }
} 

const store = createStore(counter);

const init = store.getState();
console.log(init); //10

store.dispatch({type: '加1'});
console.log(store.getState());  // 11

store.dispatch({type: '减1'});
console.log(store.getState());  // 10
```

3 可以用store.subscribe来监听每次修改

```
import { createStore } from "redux";

function counter(state=0, action){
   switch(action.type){
       case '加1': return state+1;
       case '减1': return state-1;
       default: return 10
    }
} 

const store = createStore(counter);

const init = store.getState();
console.log(init);

function listener(){
  const current = store.getState();
  console.log(current);
}

store.subscribe(listener);

store.dispatch({type: '加1'});
store.dispatch({type: '减1'});
```

4 Redux和React一起使用

把store.dispatch方法传递给组件，内部可以调用修改状态
subscribe订阅render函数，每次修改都重新渲染
redux相关的内容，移到单独文件进行管理

```
// index.redux.js
const ADD = '加1';
const REMOVE = '减1';

export function counter(state=0, action){
  switch(action.type){
      case '加1': return state+1;
      case '减1': return state-1;
      default: return 10
   }
} 

//action creator
export function add(){
  return {type: ADD}
}

export function remove(){
  return {type: REMOVE}
}


// App.js
import React from 'react';

class App extends React.Component{
  render(){
    const store = this.props.store;
    const number = store.getState();

    return (
      <h1>now the number is {number}</h1>
    )
  }
}

export default App;

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { counter } from './index.redux';

const store = createStore(counter);

ReactDOM.render(<App store={store}/>, document.getElementById('root'));
```

5 新增一个按钮发送事件

```
// App.js
import React from 'react';
import { add } from './index.redux';

class App extends React.Component{
  render(){
    const store = this.props.store;
    const number = store.getState();

    return (
      <div>
        <h1>now the number is {number}</h1>
        <button onClick={()=>store.dispatch(add())}>Add one</button>
      </div>
    )
  }
}

export default App;
为了让事件顺利执行，需要监听render

// index.js
function render(){
  ReactDOM.render(<App store={store}/>, document.getElementById('root'));
}

render();
store.subscribe(render); 
```

6 但是上面的 App 组件耦合严重，为了优化我们要组件解耦

在index.js通过属性传递

在组件内add方法通过props方法获取

```
// index.js
import { counter, add } from './index.redux';

function render(){
  ReactDOM.render(<App store={store} add={add}/>, document.getElementById('root'));
}

// App.js   
 const add = this.props.add;
 ```

7 同理也可以添加减法方法，完整App.js index.js

```
// App.js
import React from 'react';
import { add } from './index.redux';

class App extends React.Component{
  render(){
    const store = this.props.store;
    const number = store.getState();
    const add = this.props.add;
    const remove = this.props.remove;

    return (
      <div>
        <h1>now the number is {number}</h1>
        <button onClick={()=>store.dispatch(add())}>Add one</button>
        <button onClick={()=>store.dispatch(remove())}>Remove one</button>
      </div>
    )
  }
}

export default App;

// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { createStore } from 'redux';
import { counter, add, remove } from './index.redux';

const store = createStore(counter);

function render(){
  ReactDOM.render(<App store={store} add={add} remove={remove}/>, document.getElementById('root'));
}

render();
store.subscribe(render);  
```

8 更进一步处理异步 redux-thunk 为例

异步的例子是在过几秒后再执行操作

yarn add redux-thunk --save 安装

```
// index.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

const store = createStore(counter, applyMiddleware(thunk));
使用applyMiddleware开启thunk中间件

异步总体流程和同步相同，区别在添加action

// index.redux.js
export function addAsync(){
  return dispatch => {
    setTimeout(() => {
      dispatch(add())
    }, 2000)
  }
}
```

9 如果有更多子组件，我们需要把store一层层往下传

所以我们借助 react-redux

yarn add react-redux --save

这时我们就可以忘记subscribe，记住reducer action 和 dispatch 即可

react-redux 提供 Provider 和 connect 两个接口来连接

```
// index.js
import { Provider } from 'react-redux';

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('root'));

// App.js
import React from 'react';
import { connect } from 'react-redux';
import { add, remove, addAsync } from './index.redux';
class App extends React.Component{
  render(){
    const {number, add, remove, addAsync} = this.props;
    return (
      <div>
        <h1>now the number is {number}</h1>
        <button onClick={()=>add()}>Add one</button>
        <button onClick={()=>remove()}>Remove one</button>
        <button onClick={()=>addAsync()}>addAsync one</button>
      </div>
    )
  }
}

const mapStatetoProps = (state) => {
  return {number: state}
}

const actionCreators = { add, remove, addAsync };
App = connect(mapStatetoProps, actionCreators)(App);
export default App; 

```



01 install the following dependencies


```
yarn add react-router react-router-dom redux redux-thunk express axios antd-mobile babel-plugin-transform-decorators-legacy
yarn add babel-plugin-import --dev
```

02 yarn eject




