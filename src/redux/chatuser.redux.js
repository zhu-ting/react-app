import axios from 'axios'

const USER_LIST = 'USER_LIST'

const initialState = {
  userList: []
}

function chatuser(state, action){
  switch (action.type) {
    case USER_LIST:
      return {...state, userList: action.payload}
    default:
      return state
  }
}

function userList(){
  return {type: USER_LIST, payload: data}
}

export function getUserList(type){
  return dispatch => {
    axios.get('/user/list?type=genius')
      .then(res=>{
        if(res.data.code==0){
          dispatch(userList(res.data.data))
        }
      })
  }
}
