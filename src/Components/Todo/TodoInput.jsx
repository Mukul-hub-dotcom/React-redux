import React from "react"
import { useState } from "react"
import {v4 as uuid} from "uuid"
import {useDispatch} from "react-redux"
import {addTodo} from "../../Redux/action"

export const TodoInput=()=>{
    const dispatch=useDispatch()
    const [title,setTitle]=useState("")
    
    const handleAdd=()=>{
        const payload={
        title,
        status : false,
        id:uuid,
}
console.log(payload)
dispatch(addTodo(payload))
    }
    return(
        <>
        <input type="text" placeholder="Add new todo"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}/>
        <button onClick={handleAdd}>Add Todos</button>
        </>
    )
}
