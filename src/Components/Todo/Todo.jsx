import React from "react"
import {TodoInput} from "./TodoInput"
import { TodoItem } from "./TodoItem"
import { useSelector } from "react-redux"
export const Todo=()=>{
    const todos=useSelector((state)=>state.todos)
    
    return(
        <>
        <TodoInput/>
        <br />
        {
            todos.map((todo)=>(<TodoItem key={todo.id}{...todo}/>))
        }
        </>
    )
}
