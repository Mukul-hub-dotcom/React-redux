import React from "react"
export const TodoItem=({title,status})=>{
    return(
        <>
        <p>{title}{"---->"}{status?"COMPLETED":"NOT COMPLETED"}</p>

        </>
    )
}
