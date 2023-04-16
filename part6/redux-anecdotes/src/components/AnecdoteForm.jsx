import { useDispatch, useSelector } from "react-redux";
import { createNote } from "../redux/store";

import React from 'react'

export const AnecdoteForm = (props) => {

    
    const dispatch = useDispatch()

    console.log(useSelector(state=>state.anecdotes))

    const addN = async (event) => { 
        event.preventDefault()
        let inp = event.target.note.value
        console.log(inp);
        dispatch(createNote(inp))
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

