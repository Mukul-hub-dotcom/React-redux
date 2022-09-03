import React from "react"
import { useState } from "react"
import { useSelector,useDispatch } from "react-redux"
import { increment } from "../../Redux/action"
export const Counter=()=>{
    const count=useSelector((state)=>state.count)
    
    const dispatch=useDispatch()
    const handleIncrement=()=>{
        dispatch(increment(2))
    }


    return(
        <>
        <h1>Count is {count}</h1>
        <button onClick={handleIncrement}>Inc</button>
        <button>Dec</button>

        </>
    )
}