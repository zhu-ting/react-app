import axios from 'axios';

const USER_LIST = 'USER_LIST';

const initialState = { userlist: [] }

export function chatuser(state = initialState, action) {
    switch (action.type) {
        case USER_LIST:
            return { ...state, userlist: action.payload }
        default:
            return state
    }
}

function userlist(data) {
    return { type:USER_LIST, payload: data}
}

export function getUserList(type){
    return dispatch=>{
        axios.get('/user/list?type='+type)
          .then(res=>{
              if(res.data.code===0){
                  dispatch(userlist(res.data.data))
              }
          })
    }
}