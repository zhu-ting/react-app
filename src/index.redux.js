const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";

export function counter(state = 0, action) {
  switch (action.type) {
  case INCREMENT:
    return state + 1
  case DECREMENT:
    return state - 1
  default:
    return 10
  }
}
// action creator
export function increase(){
  return {type: INCREMENT}
}

export function decrease(){
  return {type: DECREMENT}
}
