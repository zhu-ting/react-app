import axios from 'axios'
import { getRedirectPath } from '../util'
const AUTH_SUCCESS = 'AUTH_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'
const initialState = {
  redirectTo:'',
  msg: '',
  isAuth: false,
  user: '',
  password: '',
  type: ''
}

export function user(state=initialState, action){
  switch (action.type) {
    case AUTH_SUCCESS:
      return {...state, msg:'', isAuth: true, redirectTo:getRedirectPath(action.payload), ...action.payload}
    case AUTH_SUCCESS:
      return {...state, msg:'', isAuth: true, redirectTo:getRedirectPath(action.payload), ...action.payload}
    case LOAD_DATA:
      return {...state, ...action.payload}
    case ERROR_MSG:
      return {...state, msg:action.msg, isAuth: false}
    default:
      return state
  }
  return state
}

function authSuccess(data){
  return {type: AUTH_SUCCESS, payload: data}
}

function errorMsg(msg){
  return {msg, type: ERROR_MSG}
}

export function loadData(userInfo){
  return { type: LOAD_DATA, payload: userInfo}
}

export function update(data){
  return dispatch => {
    axios.post('/user/update', data).then(
      res => {
        if(res.status===200&&res.data.code===0){
          dispatch(authSuccess(res.data.data))
        }else{
          dispatch(errorMsg(res.data.msg))
        }
      }
    )
  }
}

export function login({user, password}){
  if(!user||!password){
    return errorMsg('Please input Username and Password')
  }
  return dispatch => (
    axios.post('/user/register', {user,password,type}).then(res => {
      if(res.status===200&&res.data.code===0){
        dispatch(authSuccess(res.data.data))
      }else{
        dispatch(errorMsg(res.data.msg))
      }
    })
  )
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
        dispatch(authSuccess({user,password,type}))
      }else{
        dispatch(errorMsg(res.data.msg))
      }
    })
  )

}
