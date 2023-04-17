import { createSlice } from "@reduxjs/toolkit";

const initialState = 'render here notification...'

const notification = createSlice({
    name:'notification',
    initialState,
    reducers:{
        tip(state,action){

           return state = 'render here notification"'   
    },
    changeTip(state,action){
        return state = action.payload
    }
    }
})

export const { tip,changeTip } = notification.actions 

let timeoutID = null;

export const setNotification = (state,time) =>{
    return async (dispatch) =>{

        if(timeoutID!==null){
            clearTimeout(timeoutID)
            timeoutID = null
        }

        dispatch(changeTip(state))
        timeoutID =  setTimeout(() => {
            dispatch(tip())
            timeoutID = null
          }, time)
        
    }
}

export default notification.reducer