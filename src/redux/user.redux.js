import axios from 'axios'
import { getRedirectPath } from '../util.js'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'

const initialState = {
    redirectTo: '',
    msg: '',
    isAuth: '',
    user: '',
    pwd: '',
    type: ''
}
// reducer
export function user(state=initialState, action){
    switch(action.type){
        case REGISTER_SUCCESS:
          return {...state, msg:'', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload}
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
    return { type: REGISTER_SUCCESS, payload: data}
}

export function register({user, pwd, type}){
    if(!user || !pwd){
        return showError('user and pwd required')
    }
    return dispatch => {
        axios.post('/user/register', {user, pwd, type})
        .then(res => {
            if(res.status===200 && res.data.code===0){
                dispatch(registerSuccess({user, pwd, type}))
            } else {
                dispatch(showError(res.data.msg))
            }
        })
    }
}