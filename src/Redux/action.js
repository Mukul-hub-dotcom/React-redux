import {ADD_TODO} from "./actionTypes"
import {INCREMENT} from "./actionTypes"
export const addTodo=(data)=>({
    type:ADD_TODO,
    payload:data,
})


export const increment=(data)=>({
    type:INCREMENT,
    payload:data,
})