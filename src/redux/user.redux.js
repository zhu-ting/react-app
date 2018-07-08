import axios from 'axios'
import { getRedirectPath } from '../util.js'

const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const ERROR_MSG = 'ERROR_MSG'
const LOAD_DATA = 'LOAD_DATA'

const initialState = {
    redirectTo: '',
    msg: '',
    isAuth: '',
    user: '',
    pwd: '',
    type: ''
}
// reducer
export function user(state = initialState, action) {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload }
        case LOGIN_SUCCESS:
            return { ...state, msg: '', redirectTo: getRedirectPath(action.payload), isAuth: true, ...action.payload }
        case LOAD_DATA:
            return { ...state, ...action.payload }
        case ERROR_MSG:
            return { ...state, isAuth: false, msg: action.msg }
        default:
            return state
    }
}

function showError(msg) {
    return { msg, type: ERROR_MSG }
}

function authSuccess(data) {
    return { type: REGISTER_SUCCESS, payload: data }
}

export function loadData(userinfo) {
    return { type: LOAD_DATA, payload: userinfo }
}

function loginSuccess(data) {
    return { type: LOGIN_SUCCESS, payload: data }
}

export function login({ user, pwd }) {
    if (!user || !pwd) {
        return showError('user and pwd required')
    }
    return dispatch => {
        axios.post('/user/login', { user, pwd })
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(loginSuccess(res.data.data))
                } else {
                    dispatch(showError(res.data.msg))
                }
            })
    }

}

export function register({ user, pwd, type }) {
    if (!user || !pwd) {
        return showError('user and pwd required')
    }
    return dispatch => {
        axios.post('/user/register', { user, pwd, type })
            .then(res => {
                if (res.status === 200 && res.data.code === 0) {
                    dispatch(authSuccess({ user, pwd, type }))
                } else {
                    dispatch(showError(res.data.msg))
                }
            })
    }
}

export function update(data) {
    return dispatch => {
        axios.post('/user/update', data)
            .then(res => {
                if (res.status == 200 && res.data.code === 0) {
                    dispatch(authSuccess(res.data.data))
                } else {
                    dispatch(showError(res.data.msg))
                }
            })
    }
}