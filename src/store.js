import {createStore} from 'redux'

const counter = (state = [], action) => {
    if(action.type === 'INCREMENT'){
        return state + 1
    }else if(action.type === 'DECREMENT'){
        return state - 1
    }else if(action.type === 'RESET'){
        return state = 0
    }
    return state
}

export const store = createStore(counter)

export const increment = {type: "INCREMENT"}
export const decrement = {type: "DECREMENT"}
export const reset = {type: "RESET"}