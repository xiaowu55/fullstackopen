import { useDispatch } from "react-redux";
import { addNote } from "../reducers/anecdoteReducer";

import React from 'react'

export const AnecdoteForm = (props) => {

    
    const dispatch = useDispatch()

    const addN = (event) => { 
        event.preventDefault()
        let inp = event.target.note.value
        console.log(inp);
        dispatch(addNote(inp))
       }

  return (
    <div>
        <h2>create new</h2>
      <form onSubmit={addN}>
        <div><input name='note'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

