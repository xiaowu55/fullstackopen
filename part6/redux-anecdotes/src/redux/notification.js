import { createSlice } from "@reduxjs/toolkit";

const initialState = 'render here notification...'

const notification = createSlice({
    name:'notification',
    initialState,
    reducers:{
        tip(state,action){

           return state = 'you voted "IF it  hurts,do it more often"'   
    },
    changeTip(state,action){
        return state = action.payload
    }
    }
})

export const { tip,changeTip } = notification.actions 

export const setNotification = (state,time) =>{
    return async (dispatch) =>{
        dispatch(changeTip(state))
        console.log('time',time);
        setTimeout(() => {
            dispatch(tip())
          }, time)
        
    }
}

export default notification.reducer