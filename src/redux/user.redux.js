import axios from 'axios'
import { getRedirectPath } from '../util.js'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initialState = {
    redirectTo: '',
    msg: '',
    isAuth: '',
    username: '',
    password: ''
}
// reducer
export function user(state=initialState, action){
    switch(action.type){
        case REGISTER_SUCCESS:
          return {...state, msg:'', redirectTo: getRedirectPath(), isAuth: true, ...action.payload}
        case ERROR_MSG:
          return {...state, isAuth: false, msg: action.msg}
        default:
          return state
    }
}

function showError(msg){
    return {msg, type: ERROR_MSG}
}

function registerSuccess(data){
    return { type: ERROR_MSG, payload: data}
}

export function register({username, password}){
    if(!username || !password){
        return showError('username and password required')
    }
    return dispatch => {
        axios.post('/user/register', {username, password})
        .then(res => {
            if(res.status===200 && res.data.code===0){
                dispatch(registerSuccess({username, password}))
            } else {
                dispatch(showError(res.data.msg))
            }
        })
    }
}