import axios from "axios"

const LOGIN = "LOGIN"
const LOGOUT = "LOGOUT"
const USER_DATA = "USER_DATA"

const initialState = {
  isAuth:false,
  user:"Judy",
  age:20
}

export function auth(state=initialState, action){
  switch (action.type) {
    case LOGIN:
      return {...state, isAuth:true}
    case LOGOUT:
      return {...state, isAuth:false}
    case USER_DATA:
      return {...state, ...action.payload}
    default:
      return state
  }
}

// action creator
export function login(){
  return {type: LOGIN}
}

export function logout(){
  return {type: LOGOUT}
}

export function getUserData(){
  return dispatch => {
    axios.get("/data").then(res => {
      // console.log(res);
      if(res.status === 200){
        this.setState({data: res.data})
      }
    })
  }
}

export function userData(data){
  return {type: USER_DATA, payload: data}
}
