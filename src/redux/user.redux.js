import axios from 'axios'
const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initialState = {
  msg: '',
  isAuth: false,
  user: '',
  password: '',
  type: ''
}

export function user(state=initialState, action){
  switch (action.type) {
    case REGISTER_SUCCESS:
      return {...state, msg:'', isAuth: true, ...action.payload}
    case ERROR_MSG:
      return {...state, msg:action.msg, isAuth: false}
    default:
      return state
  }
  return state
}

function registerSuccess(data){
  return {type: REGISTER_SUCCESS, payload: data}
}
function errorMsg(msg){
  return {msg, type: ERROR_MSG}
}

export function register({user,password,type,repassword}){
  if(!user||!password){
    return errorMsg('Please input Username and Password')
  }
  if(password!==repassword){
    return errorMsg('the password are not the same')
  }
  return dispatch => (
    axios.post('/user/register', {user,password,type}).then(res => {
      if(res.status===200&&res.data.code===0){
        dispatch(registerSuccess({user,password,type}))
      }else{
        dispatch(errorMsg(res.data.msg))
      }
    })
  )

}
