import {legacy_createStore as createStore} from "redux"
import {reducer} from "./reducer"
export const store=createStore(reducer)

// store.getState()
// store.dispatch()
store.subscribe(()=>{
    console.log("state got updated",store.getState())
})