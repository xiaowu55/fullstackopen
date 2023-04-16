import { createSlice } from "@reduxjs/toolkit"
import noteService from '../services/note'


const getId = () => (100000 * Math.random()).toFixed(0)




export const asObject = (anecdote) => {
    return {
      content: anecdote,
      id: getId(),
      votes: 0
    }
  }
  
const anecdoteSlice = createSlice({
name:'anecdotes',
initialState:[],
reducers:{
    addVote(state,action){
        console.log('addVote',state);
        return state.map(anecdote=>anecdote.id===action.payload?{...anecdote,votes:anecdote.votes+1}:{...anecdote})
    },
    addNote(state,action){
        return state.concat(action.payload)
    },
    setNote(state,action){
        return action.payload
    }
    
}
})

export const {addVote,addNote,setNote} = anecdoteSlice.actions

export const initialNotes = () => { 
    return async dispatch => {
        const notes = await noteService.getAll()
        dispatch(setNote(notes))
    }
 }

export const createNote = content =>{
    return async dispatch =>{
        const newNote = await noteService.addNew(content)
        dispatch(addNote(newNote))
    }
}

export default anecdoteSlice.reducer
